import { TIMES } from '@lib/constants';
import './timeColumn.css';

export const TimeColumn = () => (
  <aside className="time-column">
    {TIMES.map((t) => (
      <time key={t} dateTime={t} className="time-slot">
        {t}
      </time>
    ))}
  </aside>
);
