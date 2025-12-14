import type { IEvent } from '@lib/types';

export const DAY_MINUTES = 12 * 60; // 9:00 → 21:00

export const PIXELS_PER_MINUTE = 2;

export const EVENTS: IEvent[] = [
  {
    id: 1,
    title: 'Sample Item',
    location: 'Sample Location',
    start: 30,
    end: 90,
  },
  {
    id: 2,
    title: 'Sample Item',
    location: 'Sample Location',
    start: 540,
    end: 630,
  },
  {
    id: 3,
    title: 'Sample Item',
    location: 'Sample Location',
    start: 600,
    end: 720,
  },
];

export const TIMES = [
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM',
  '6:00 PM',
  '7:00 PM',
  '8:00 PM',
  '9:00 PM',
];
