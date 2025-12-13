import { TimeColumn } from "@components/TimeColumn";
import { EventBlock } from "@components/EventBlock";
import { DAY_MINUTES, PIXELS_PER_MINUTE } from "@lib/constants";
import type { ICalendarEvent } from "@lib/types";
import { distributeColumns } from "@lib/helpers";
import './dayView.css'

interface IDayViewProps {
  events: ICalendarEvent[];
}

export const DayView = ({ events }: IDayViewProps) => {
  const { events: processedEvents, maxColumns } = distributeColumns(events);

  return (
    <div className="day-view">
      <TimeColumn />
      <div
        className="event-area"
        style={{ height: DAY_MINUTES * PIXELS_PER_MINUTE }}
      >
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
