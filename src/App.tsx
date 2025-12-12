import DayView from "@components/DayView";
import type { CalendarEvent } from "@apptypes/Event";

function App() {
  const events: CalendarEvent[] = [
    { id: 1, title: "Sample Item", location: "Sample Location", start: 30, end: 90 },
    { id: 2, title: "Sample Item", location: "Sample Location", start: 540, end: 630 },
    { id: 3, title: "Sample Item", location: "Sample Location", start: 600, end: 720 },
  ];

  return <DayView events={events} />;
}

export default App;
