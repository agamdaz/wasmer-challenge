import type { IEvent } from '@lib/types';

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
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
];

export const DAY_MINUTES = (TIMES.length - 1) * 60;
