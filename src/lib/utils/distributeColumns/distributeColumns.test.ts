import { distributeColumns } from './distributeColumns';

describe('Given a list of events', () => {
  it('When events overlap and are not ordered in time', () => {
    const testEvents = [
      {
        title: 'Test event 1',
        description: 'Sample event description',
        start: 60,
        end: 180,
      },
      {
        title: 'Test event 2',
        description: 'Sample event description',
        start: 30,
        end: 150,
      },
      {
        title: 'Test event 3',
        description: 'Sample event description',
        start: 200,
        end: 300,
      },
    ];

    const { columns, events } = distributeColumns(testEvents);

    expect(events[0]).toStrictEqual({ ...testEvents[1], column: 0, id: '001' });
    expect(events[1]).toStrictEqual({ ...testEvents[0], column: 1, id: '002' });
    expect(events[2]).toStrictEqual({ ...testEvents[2], column: 0, id: '003' });

    expect(columns).toBe(2);
  });

  it('When events do not overlap', () => {
    const testEvents = [
      {
        id: 1,
        title: 'Test event 1',
        description: 'Sample event description',
        start: 0,
        end: 100,
      },
      {
        id: 2,
        title: 'Test event 2',
        description: 'Sample event description',
        start: 100,
        end: 200,
      },
    ];

    const { columns } = distributeColumns(testEvents);

    expect(columns).toBe(1);
  });
});
