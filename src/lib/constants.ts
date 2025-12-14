import type { IEvent } from '@lib/types';

export const DAY_MINUTES = 12 * 60; // 9:00 → 21:00

export const PIXELS_PER_MINUTE = 2;

export const EVENTS: IEvent[] = [
  {
    title: 'Sample event',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    start: 30,
    end: 90,
  },
  {
    title: 'Sample event',
    description: 'Aliquam ullamcorper erat at arcu facilisis finibus.',
    start: 540,
    end: 630,
  },
  {
    title: 'Sample event',
    description:
      'Morbi sagittis, nunc id mattis tempor, nisl ante bibendum est, ac tempor metus felis vel eros.',
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
