import TimeColumn from "./TimeColumn";
import EventBlock from "./EventBlock";
import type { CalendarEvent } from "@apptypes/Event";

const PIXELS_PER_MINUTE = 2;
const DAY_MINUTES = 12 * 60; // 9:00 → 21:00

// Distribute events into columns without overlap
function distributeColumns(events: CalendarEvent[]) {
  const sorted = [...events].sort((a, b) => a.start - b.start);

  sorted.forEach((event, i) => {
    let col = 0;

    while (true) {
      const conflict = sorted.slice(0, i).some(prev =>
        prev._colIndex === col &&
        prev.end > event.start &&
        event.end > prev.start
      );
      if (!conflict) break;
      col++;
    }

    event._colIndex = col;
  });

  const maxColumns = Math.max(...sorted.map(e => e._colIndex ?? 0)) + 1;

  return { events: sorted, maxColumns };
}

interface DayViewProps {
  events: CalendarEvent[];
}

function DayView({ events }: DayViewProps) {
  const { events: processedEvents, maxColumns } = distributeColumns(events);

  return (
    <div className="day-view">
      <TimeColumn />

      <div
        className="event-area"
        style={{ height: DAY_MINUTES * PIXELS_PER_MINUTE }}
      >
        {/* Lines every 30 minutes */}
        {Array.from({ length: DAY_MINUTES / 30 }, (_, i) => {
          const top = i * 30 * PIXELS_PER_MINUTE;
          const isHour = i % 2 === 0;

          return (
            <div
              key={i}
              className={isHour ? "hour-line" : "half-hour-line"}
              style={{ top }}
            />
          );
        })}

        {/* Event blocks */}
        {processedEvents.map(event => (
          <EventBlock
            key={event.id}
            event={event}
            ppm={PIXELS_PER_MINUTE}
            maxColumns={maxColumns}
          />
        ))}
      </div>
    </div>
  );
}

export default DayView;
