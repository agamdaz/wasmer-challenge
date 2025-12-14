import { render, screen } from '@testing-library/react';
import { Calendar } from './Calendar';

describe('Given two events', () => {
  it('When the Calendar component is rendered', () => {
    const events = [
      {
        id: 1,
        title: 'Sample Item',
        location: 'Sample Location',
        start: 30,
        end: 150,
      },
      {
        id: 2,
        title: 'Sample Item',
        location: 'Sample Location',
        start: 200,
        end: 300,
      },
    ];

    render(<Calendar events={events} />);

    const timeColumn = screen.getByRole('complementary');
    expect(timeColumn).toBeVisible;

    const eventsArea = screen.getByRole('main');
    expect(eventsArea).toBeVisible;

    const renderedEvents = screen.getAllByRole('article');
    expect(renderedEvents).toHaveLength(2);
  });
});
