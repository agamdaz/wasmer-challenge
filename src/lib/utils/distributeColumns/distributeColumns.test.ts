import { distributeColumns } from './distributeColumns';

describe('Given a list of events', () => {
  it('When events overlap and are not ordered in time', () => {
    const testEvents = [
      {
        id: 2,
        title: 'Sample Item',
        location: 'Sample Location',
        start: 60,
        end: 180,
      },
      {
        id: 1,
        title: 'Sample Item',
        location: 'Sample Location',
        start: 30,
        end: 150,
      },
      {
        id: 3,
        title: 'Sample Item',
        location: 'Sample Location',
        start: 200,
        end: 300,
      },
    ];

    const { columns, events } = distributeColumns(testEvents);

    expect(events[0]).toBe(testEvents[1]);
    expect(events[1]).toBe(testEvents[0]);
    expect(events[2]).toBe(testEvents[2]);

    expect(columns).toBe(2);
  });

  it('When events do not overlap', () => {
    const testEvents = [
      {
        id: 1,
        title: 'Sample Item',
        location: 'Sample Location',
        start: 0,
        end: 100,
      },
      {
        id: 2,
        title: 'Sample Item',
        location: 'Sample Location',
        start: 100,
        end: 200,
      },
    ];

    const { columns } = distributeColumns(testEvents);

    expect(columns).toBe(1);
  });
});
