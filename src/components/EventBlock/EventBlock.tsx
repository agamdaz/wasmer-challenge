import type { ICalendarEvent } from "@lib/types";
import './eventBlock.css'

interface IEventBlockProps {
  event: ICalendarEvent;
  ppm: number;
  maxColumns: number;
}

export const EventBlock = ({ event, ppm, maxColumns }: IEventBlockProps) => {
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
