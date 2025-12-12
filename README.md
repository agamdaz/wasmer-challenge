# Wasmer coding challenge

## 🎯 Challenge objetives
Given a set of events, each with a start time and end time, render the events on a **single day calendar** Web app based on React.

Events are represented by a JavaScript object with `start` and `end` attributes, such as the number of minutes elapsed since the start of the calendar (9:00 a.m.). Therefore, `{start:30, end:90}` represents an event between 9:30 a.m. and 10:30 a.m.

The application must implement a `layOutDay` function in the global namespace (`window`) that receives an array of events and distributes them across the calendar.

The event matrix will have this form:

```
[ 
  {start: 30, end: 150},
  {start: 540, end: 600},
  {start: 560, end: 620}
  ... 
]
```

The layout must comply with the following rules:
- The events should be displayed in a container 620px wide (600px + 10px side padding) and 720px high.
- No events may visually overlap.
- Events that collide in time MUST be the same size and fit the entire width of the column.
- The event style should match the following prototype:

![Calendar challenge prototype](./public/calendar.png)
