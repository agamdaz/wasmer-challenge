export interface CalendarEvent {
  id: number | string;
  title: string;
  location: string;
  start: number;
  end: number;
  _colIndex?: number;
}
