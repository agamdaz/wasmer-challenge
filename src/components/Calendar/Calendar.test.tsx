import { render, screen } from '@testing-library/react';
import { Calendar } from './Calendar';

describe('Given two events', () => {
  it('When the Calendar component is rendered', () => {
    render(<Calendar />);

    const timeColumn = screen.getByRole('complementary');
    expect(timeColumn).toBeVisible;

    const eventsArea = screen.getByRole('main');
    expect(eventsArea).toBeVisible;

    const renderedEvents = screen.getAllByRole('article');
    expect(renderedEvents).toHaveLength(3);
  });
});
