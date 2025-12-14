import type { IEvent } from '@lib/types';
import { PIXELS_PER_MINUTE } from '@lib/constants';
import './event.css';

interface IEventCard {
  columns: number;
  event: IEvent;
}

export const EventCard = ({ columns, event }: IEventCard) => {
  const top = event.start * PIXELS_PER_MINUTE;
  const height = (event.end - event.start) * PIXELS_PER_MINUTE;

  const colIndex = event._colIndex ?? 0;
  const width = 100 / columns;
  const left = width * colIndex;

  return (
    <article
      className="event__card"
      style={{
        top,
        height,
        width: `calc(${width}% - 6px)`,
        left: `calc(${left}% + 3px)`,
      }}
    >
      <h2 className="event__title">{event.title}</h2>
      <p className="event__location">{event.location}</p>
    </article>
  );
};
