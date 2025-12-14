import type { IEvent } from '@lib/types';

export const distributeColumns = (events: IEvent[]) => {
  const eventsSorted = [...events].sort((a, b) => a.start - b.start);

  eventsSorted.forEach((event, i) => {
    let col = 0;

    while (true) {
      const conflict = eventsSorted
        .slice(0, i)
        .some(
          (prev) =>
            prev._colIndex === col &&
            prev.end > event.start &&
            event.end > prev.start,
        );
      if (!conflict) break;
      col++;
    }

    event._colIndex = col;
  });

  const columns = Math.max(...eventsSorted.map((e) => e._colIndex ?? 0)) + 1;

  return { events: eventsSorted, columns };
};
