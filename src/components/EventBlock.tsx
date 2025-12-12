import type { CalendarEvent } from "../types/Event";

interface EventBlockProps {
  event: CalendarEvent;
  ppm: number;        // pixels per minute
  maxColumns: number;
}

function EventBlock({ event, ppm, maxColumns }: EventBlockProps) {
  const top = event.start * ppm;
  const height = (event.end - event.start) * ppm;

  const colIndex = event._colIndex ?? 0;
  const width = 100 / maxColumns;
  const left = width * colIndex;

  return (
    <div
      className="event-block"
      style={{
        top,
        height,
        width: `calc(${width}% - 6px)`,
        left: `calc(${left}% + 3px)`,
      }}
    >
      <div className="event-title">{event.title}</div>
      <div className="event-location">{event.location}</div>
    </div>
  );
}

export default EventBlock;
