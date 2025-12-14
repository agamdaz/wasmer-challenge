import type { IEvent } from '@lib/types';

export const registerEvents = (
  setEvents: React.Dispatch<React.SetStateAction<IEvent[]>>,
) => {
  window.layOutDay = (events: IEvent[]) => {
    if (!Array.isArray(events))
      throw new TypeError('layOutDay expects an array of events');

    if (events.length === 0) return [];

    const sanitizedEvents = events.filter((e) => e.start < e.end);
    setEvents(sanitizedEvents);
  };
};
