import React, { useState } from 'react';
import Calendar from './Items/Calendar';
import EventList from './Items/EventList';
import Modal from './Components/Modal';
import Button from './Components/Button';
import Input from './Components/Input';

const App = () => {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [newEvent, setNewEvent] = useState({
    name: '',
    startTime: '',
    endTime: '',
    description: ''
  });
  const [currentDate, setCurrentDate] = useState(new Date());

  const openModal = (day) => {
    setSelectedDay(day);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNewEvent({
      name: '',
      startTime: '',
      endTime: '',
      description: ''
    });
  };

  const handleEventChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevEvent) => ({ ...prevEvent, [name]: value }));
  };

  const addEvent = () => {
    if (newEvent.name && newEvent.startTime && newEvent.endTime) {
      setEvents([...events, { ...newEvent, day: selectedDay }]);
      closeModal();
    }
  };

  const changeMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear() + "";

  return (
    <div className="App">
      <h1 className="text-3xl font-bold mb-4 mt-3 text-center">Dynamic Calendar Event</h1>
      <div className="flex justify-evenly items-center mb-10">
        <Button onClick={() => changeMonth(-1)}>Previous</Button>
        <h2 className="text-xl">{monthName} {year}</h2>
        <Button onClick={() => changeMonth(1)}>Next</Button>
      </div>
      <Calendar events={events} openModal={openModal} />

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl mb-4">Add Event for Day {selectedDay}</h2>
        <Input
          type="text"
          name="name"
          placeholder="Event Name"
          value={newEvent.name}
          onChange={handleEventChange}
          className="mb-2"
        />
        <Input
          type="time"
          name="startTime"
          placeholder="Start Time"
          value={newEvent.startTime}
          onChange={handleEventChange}
          className="mb-2"
        />
        <Input
          type="time"
          name="endTime"
          placeholder="End Time"
          value={newEvent.endTime}
          onChange={handleEventChange}
          className="mb-2"
        />
        <Input
          type="text"
          name="description"
          placeholder="Event Description (Optional)"
          value={newEvent.description}
          onChange={handleEventChange}
          className="mb-2"
        />
        <Button onClick={addEvent}>Add Event</Button>
      </Modal>

      <EventList events={events} />
    </div>
  );
};

export default App;
