import { useEffect, useState } from 'react';
import { TimeColumn } from '@components/TimeColumn';
import { EventCard } from '@components/Event';
import { DAY_MINUTES, EVENTS, PIXELS_PER_MINUTE } from '@lib/constants';
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
    <div className="calendar__container">
      <TimeColumn />
      <main
        className="events__container"
        style={{ height: DAY_MINUTES * PIXELS_PER_MINUTE }}
      >
        {Array.from({ length: DAY_MINUTES / 30 }, (_, i) => {
          const top = i * 30 * PIXELS_PER_MINUTE;
          const isHour = i % 2 === 0;

          return (
            <div
              key={i}
              className={isHour ? 'hour__line' : 'half-hour__line'}
              style={{ top }}
            />
          );
        })}

        {processedEvents.map((event) => (
          <EventCard key={event.id} event={event} columns={columns} />
        ))}
      </main>
    </div>
  );
};
