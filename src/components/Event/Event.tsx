import type { ICardEvent } from '@lib/types';
import './event.css';

interface IEventCard {
  columns: number;
  event: ICardEvent;
}

export const EventCard = ({ columns, event }: IEventCard) => {
  const COLUMN = event.column ?? 0;
  const CARD_WIDTH = 100 / columns;
  const POSITION_LEFT = CARD_WIDTH * COLUMN;
  const POSITION_TOP = event.start;
  const POSITION_BOTTOM = event.end - event.start;

  return (
    <article
      className="event__card"
      style={{
        top: POSITION_TOP,
        height: POSITION_BOTTOM,
        width: `${CARD_WIDTH}%`,
        left: `${POSITION_LEFT}%`,
      }}
    >
      <h2 className="event__title">{event.title}</h2>
      <p className="event__description">{event.description}</p>
    </article>
  );
};
