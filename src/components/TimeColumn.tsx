function TimeColumn() {
  const times = [
    "9:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "1:00 PM", "2:00 PM",
    "3:00 PM", "4:00 PM", "5:00 PM",
    "6:00 PM", "7:00 PM", "8:00 PM",
    "9:00 PM"
  ];

  return (
    <div className="time-column">
      {times.map((t, i) => (
        <div key={i} className="time-slot">
          {t}
        </div>
      ))}
    </div>
  );
}

export default TimeColumn;
