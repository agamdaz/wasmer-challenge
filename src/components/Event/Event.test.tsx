import { render, screen, within } from '@testing-library/react';
import { EventCard } from './Event';

describe('Given an event', () => {
  it('When the Event component is rendered', () => {
    const events = {
      id: 1,
      title: 'Sample Item',
      location: 'Sample Location',
      start: 30,
      end: 150,
    };

    render(<EventCard columns={1} event={events} />);

    const card = screen.getByRole('article');
    expect(card).toBeVisible;

    const title = within(card).getByRole('heading', {
      level: 2,
      name: events.title,
    });
    expect(title).toBeVisible;

    const description = within(card).getByText(events.location);
    expect(description).toBeVisible;
  });
});
