import { Fragment, useEffect, useState } from 'react';
import { TimeColumn } from '@components/TimeColumn';
import { EventCard } from '@components/Event';
import { DAY_MINUTES, EVENTS, TIMES } from '@lib/constants';
import type { IEvent } from '@lib/types';
import { distributeColumns, registerEvents } from '@lib/utils';
import './calendar.css';

export const Calendar = () => {
  const [events, setEvents] = useState<IEvent[]>(EVENTS);

  useEffect(() => {
    registerEvents(setEvents);
    return () => {
      delete window.layOutDay;
    };
  }, []);

  const { events: processedEvents, columns } = distributeColumns(events);

  return (
    <div className="calendar__container" style={{ height: DAY_MINUTES }}>
      <TimeColumn />
      <main className="main__container">
        <div className="time-scale">
          {TIMES.map((_, idx, array) => (
            <Fragment key={idx}>
              <div className="hour__line" />
              {idx < array.length - 1 && <div className="half-hour__line" />}
            </Fragment>
          ))}
        </div>
        <div className="events__container">
          {processedEvents.map((event) => (
            <EventCard key={event.id} event={event} columns={columns} />
          ))}
        </div>
      </main>
    </div>
  );
};
