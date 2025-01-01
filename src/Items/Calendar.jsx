import React from 'react';

const Calendar = ({ events, openModal, currentDate }) => {
  
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  
  const days = [ ...Array(daysInMonth)].map((day, index) => day === null ? null : index + 1  );

  const renderDay = (day) => {
    const dayEvents = events.filter(event => event.day === day);
    return (
      <div
        key={day}
        className="border p-4 cursor-pointer"
        onClick={() => openModal(day)}
      >
        <div>Day {day}</div>
        {dayEvents.length > 0 && (
          <div className="mt-2">
            {dayEvents.map((event, index) => (
              <div key={index} className="text-sm text-blue-600">
                {event.name} ({event.startTime} - {event.endTime})
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-7 gap-4 mb-8">
      {days.map((day, index) => (
        <div key={index} className="text-center">
          {day ? renderDay(day) : <div className="border p-4" />}
        </div>
      ))}
    </div>
  );
};

export default Calendar;
