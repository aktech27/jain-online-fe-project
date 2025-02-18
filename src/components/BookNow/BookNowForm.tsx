import { useState } from "react";

const BookNowForm = () => {
  const [whereTo, setWhereTo] = useState('');
  const [howManyPersons, setHowManyPersons] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');


  const places = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

  const handleSubmit = () => {
    alert('Booking successful!');
    // Reset form
    setWhereTo('');
    setHowManyPersons('');
    setStartDate('');
    setEndDate('');
    setDescription('');
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Where to</label>
          <select
            value={whereTo}
            onChange={(e) => setWhereTo(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="">Select a place</option>
            {places.map((place) => (
              <option key={place} value={place}>
                {place}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">How Many Persons</label>
          <input
            type="number"
            value={howManyPersons}
            onChange={(e) => setHowManyPersons(e.target.value)}
            className="w-full border rounded p-2"
            min="1"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full border rounded p-2"
            min={new Date().toISOString().split('T')[0]} // Set minimum to today
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full border rounded p-2"
            min={startDate} // Set minimum to start date
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded p-2"
            minLength={50}
            maxLength={500}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookNowForm;