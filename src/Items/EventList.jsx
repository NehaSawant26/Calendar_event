import React from 'react';

const EventList = ({ events }) => {
  if (events.length === 0) {
    return <p>No events scheduled yet.</p>;
  }

  return (
    <div className="event-list mt-8 ml-4">
      <h2 className="text-2xl font-bold mb-8 text-center">All Events</h2>
      <ul className="flex flex-wrap gap-10">
        {events.map((event, index) => (
          <li key={index} className="mb-2">
            <div className="text-xl font-medium w-44">Day {event.day}: {event.name}</div>
            <div>Time: {event.startTime} - {event.endTime}</div>
            {event.description && <div className="w-40">Description: {event.description}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
};



export default EventList;
