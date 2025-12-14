import { registerEvents } from './registerEvents';

describe('registerEvents', () => {
  let setEvents: jest.Mock;

  beforeEach(() => {
    setEvents = jest.fn();
    delete (window as any).layOutDay;
  });

  afterEach(() => {
    delete (window as any).layOutDay;
    jest.clearAllMocks();
  });

  it('registers layOutDay on window', () => {
    registerEvents(setEvents);

    expect(window.layOutDay).toBeDefined();
    expect(typeof window.layOutDay).toBe('function');
  });

  it('throws if layOutDay is called with non-array input', () => {
    registerEvents(setEvents);

    // @ts-expect-error — intentional invalid input
    expect(() => window.layOutDay!('invalid')).toThrow(TypeError);
    expect(setEvents).not.toHaveBeenCalled();
  });

  it('returns early for an empty array', () => {
    registerEvents(setEvents);

    const result = window.layOutDay!([]);

    expect(result).toEqual(undefined);
    expect(setEvents).toHaveBeenCalledWith([]);
  });

  it('filters out events where start >= end', () => {
    registerEvents(setEvents);

    const events = [
      { title: 'Test', description: 'Event', start: 30, end: 60 },
      { title: 'Test', description: 'Event', start: 90, end: 90 },
      { title: 'Test', description: 'Event', start: 120, end: 100 },
      { title: 'Test', description: 'Event', start: 200, end: 240 },
    ];

    window.layOutDay!(events);

    expect(setEvents).toHaveBeenCalledTimes(1);
    expect(setEvents).toHaveBeenCalledWith([
      { title: 'Test', description: 'Event', start: 30, end: 60 },
      { title: 'Test', description: 'Event', start: 200, end: 240 },
    ]);
  });

  it('does not modify valid events', () => {
    registerEvents(setEvents);

    const events = [
      { title: 'Test', description: 'Event', start: 10, end: 20 },
      { title: 'Test', description: 'Event', start: 30, end: 40 },
    ];

    window.layOutDay!(events);

    expect(setEvents).toHaveBeenCalledWith(events);
  });
});
