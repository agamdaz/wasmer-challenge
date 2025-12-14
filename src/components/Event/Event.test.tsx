import { render, screen, within } from '@testing-library/react';
import { EventCard } from './Event';

describe('Given an event', () => {
  it('When the Event component is rendered', () => {
    const event = {
      title: 'Test event title',
      description: 'Test description',
      start: 30,
      end: 150,
      column: 0,
      id: '001',
    };

    render(<EventCard columns={1} event={event} />);

    const card = screen.getByRole('article');
    expect(card).toBeVisible;

    const title = within(card).getByRole('heading', {
      level: 2,
      name: event.title,
    });
    expect(title).toBeVisible;

    const description = within(card).getByText(event.description);
    expect(description).toBeVisible;
  });
});
