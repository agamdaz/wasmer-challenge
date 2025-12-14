export interface IEvent {
  title: string;
  description: string;
  start: number;
  end: number;
}

export interface ICardEvent extends IEvent {
  column: number;
  id: string;
}

declare global {
  interface Window {
    layOutDay?: (events: IEvent[]) => void;
  }
}
