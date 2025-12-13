export interface ICalendarEvent {
    id: number | string;
    title: string;
    location: string;
    start: number;
    end: number;
    _colIndex?: number;
}