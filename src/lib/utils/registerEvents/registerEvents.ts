import type { IEvent } from '@lib/types';

export const registerEvents = (
  setEvents: React.Dispatch<React.SetStateAction<IEvent[]>>,
) => {
  window.layOutDay = (events: IEvent[]) => {
    if (!Array.isArray(events))
      throw new TypeError(
        'layOutDay expects an array of events like this: [{ title: string, description: strig, start: number, end: number }]',
      );

    const sanitizedEvents = events.filter((e) => e.start < e.end);
    setEvents(sanitizedEvents);
  };
};
