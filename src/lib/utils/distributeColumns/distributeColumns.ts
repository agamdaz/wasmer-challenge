import type { ICardEvent, IEvent } from '@lib/types';

export const distributeColumns = (events: IEvent[]) => {
  const parsedEvents: ICardEvent[] = [];

  const eventsSorted = [...events].sort((a, b) => a.start - b.start);

  eventsSorted.forEach((event, idx) => {
    const id = String(idx + 1).padStart(3, '0');

    let col = 0;

    while (true) {
      const conflict = parsedEvents
        .slice(0, idx)
        .some(
          (prev) =>
            prev.column === col &&
            prev.end > event.start &&
            event.end > prev.start,
        );
      if (!conflict) break;
      col++;
    }

    parsedEvents.push({ ...event, id, column: col });
  });

  const columns = Math.max(...parsedEvents.map((e) => e.column ?? 0)) + 1;

  return { events: parsedEvents, columns };
};
