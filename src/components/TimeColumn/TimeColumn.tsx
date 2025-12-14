import { Fragment } from 'react';
import { TIMES } from '@lib/constants';
import './timeColumn.css';

export const TimeColumn = () => (
  <aside className="time-column">
    {TIMES.map((time, idx, array) => {
      const hour = parseInt(time.split(':')[0], 10);
      const amOrPm = hour >= 12 ? 'PM' : 'AM';

      return (
        <Fragment key={idx}>
          <time dateTime={`${hour}:00`} className="time__oclock">
            <b>{`${hour}:00`}</b>
            {` ${amOrPm}`}
          </time>
          {idx < array.length - 1 && (
            <time datatype={`${hour}:30`} className="time__half">
              {`${hour}:30`}
            </time>
          )}
        </Fragment>
      );
    })}
  </aside>
);
