import { useState } from 'react';
import { BookNowFormItems, BookNowFormKeys } from '../../types';

const BookNowForm = () => {
  const places = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
  const defaultFormState: BookNowFormItems = {
    destination: '',
    personCount: 0,
    startDate: '',
    endDate: '',
    description: '',
  };

  const [formState, setFormState] = useState<BookNowFormItems>(defaultFormState);

  const handleChange = (field: BookNowFormKeys, value: string | number) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(formState);
    setFormState(defaultFormState);
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Where to</label>
          <select value={formState.destination} onChange={(e) => handleChange('destination', e.target.value)} className="w-full border rounded p-2">
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
          <input type="number" value={formState.personCount} onChange={(e) => handleChange('personCount', e.target.value)} className="w-full border rounded p-2" min="1" required />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Start Date</label>
          <input
            type="date"
            value={formState.startDate}
            onChange={(e) => handleChange('startDate', e.target.value)}
            className="w-full border rounded p-2"
            min={new Date().toISOString().split('T')[0]} // Set minimum to today
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">End Date</label>
          <input
            type="date"
            value={formState.endDate}
            onChange={(e) => handleChange('endDate', e.target.value)}
            className="w-full border rounded p-2"
            min={formState.startDate ?? new Date().toISOString().split('T')[0]} // Set minimum to start date
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea value={formState.description} onChange={(e) => handleChange('description', e.target.value)} className="w-full border rounded p-2" minLength={50} maxLength={500} required />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white rounded p-2 hover:bg-blue-600">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookNowForm;
