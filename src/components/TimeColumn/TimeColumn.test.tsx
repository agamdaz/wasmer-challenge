import { render, screen, within } from '@testing-library/react';
import { TimeColumn } from './TimeColumn';

describe('Given an event', () => {
  it('When the Event component is rendered', () => {
    render(<TimeColumn />);

    const timeArea = screen.getByRole('complementary');
    expect(timeArea).toBeVisible;

    const times = within(timeArea).getAllByRole('time');
    expect(times).toHaveLength(13);
  });
});
