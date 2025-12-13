import type { ICalendarEvent } from "@lib/types";

export const distributeColumns = (events: ICalendarEvent[]) => {
  const sorted = [...events].sort((a, b) => a.start - b.start);

  sorted.forEach((event, i) => {
    let col = 0;

    while (true) {
      const conflict = sorted.slice(0, i).some(prev =>
        prev._colIndex === col &&
        prev.end > event.start &&
        event.end > prev.start
      );
      if (!conflict) break;
      col++;
    }

    event._colIndex = col;
  });

  const maxColumns = Math.max(...sorted.map(e => e._colIndex ?? 0)) + 1;

  return { events: sorted, maxColumns };
}
