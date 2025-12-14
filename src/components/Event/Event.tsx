import type { ICardEvent } from '@lib/types';
import { PIXELS_PER_MINUTE } from '@lib/constants';
import './event.css';

interface IEventCard {
  columns: number;
  event: ICardEvent;
}

export const EventCard = ({ columns, event }: IEventCard) => {
  const COLUMN = event.column ?? 0;
  const CARD_WIDTH = 100 / columns;
  const POSITION_LEFT = CARD_WIDTH * COLUMN;
  const POSITION_TOP = event.start * PIXELS_PER_MINUTE;
  const POSITION_BOTTOM = (event.end - event.start) * PIXELS_PER_MINUTE;

  return (
    <article
      className="event__card"
      style={{
        top: POSITION_TOP,
        height: POSITION_BOTTOM,
        width: `calc(${CARD_WIDTH}% - 6px)`,
        left: `calc(${POSITION_LEFT}% + 3px)`,
      }}
    >
      <h2 className="event__title">{event.title}</h2>
      <p className="event__location">{event.description}</p>
    </article>
  );
};
