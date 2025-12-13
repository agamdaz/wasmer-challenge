import { TIMES } from '@lib/constants';
import './timeColum.css';

export const TimeColumn = () => (
  <div className="time-column">
    {TIMES.map((t, i) => (
      <div key={i} className="time-slot">
        {t}
      </div>
    ))}
  </div>
);

