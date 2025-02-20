import React, { useState } from 'react';
import { BookNowFormErrors, BookNowFormItems, BookNowFormKeys } from '../../types';

const BookNowForm = () => {
  const places = ['India', 'United States', 'France', 'Germany', 'Dubai'];
  const defaultFormState: BookNowFormItems = {
    destination: '',
    personCount: 0,
    startDate: '',
    endDate: '',
    description: '',
  };
  const defaultFormErrors: BookNowFormErrors = {
    destination: '',
    personCount: 'Error Sample',
    startDate: 'Error Sample',
    endDate: 'Error Sample',
    description: 'Error Sample',
  };

  const [formState, setFormState] = useState<BookNowFormItems>(defaultFormState);
  const [formErrors, setFormErrors] = useState<BookNowFormErrors>(defaultFormErrors);

  const handleChange = (field: BookNowFormKeys, value: string | number) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formState);
    setFormState(defaultFormState);
    setFormErrors(defaultFormErrors);
  };

  return (
    <div className="w-[90%] mx-auto p-4 border rounded shadow-lg">
      <h5 className="text-3xl font-bold mb-1 text-center">Explore Your Adventure</h5>
      <h6 className="text-3md font-semibold text-center text-slate-700 mb-4">Start your dream trip now with just a few clicks!</h6>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-2sm font-medium mb-1">Where to</label>
          <select value={formState.destination} onChange={(e) => handleChange('destination', e.target.value)} className="w-full border rounded p-2">
            <option value="" disabled hidden>
              Select a place
            </option>
            {places.map((place) => (
              <option key={place} value={place}>
                {place}
              </option>
            ))}
          </select>
          <div className="text-sm ml-2 text-red-600 h-[15px]">{formErrors.destination}</div>
        </div>

        <div className="mb-4">
          <label className="block text-2sm font-medium mb-1">How Many Persons</label>
          <input type="number" value={formState.personCount} onChange={(e) => handleChange('personCount', e.target.value)} className="w-full border rounded p-2" min="1" required />
          <div className="text-sm ml-2 text-red-600 h-[15px]">{formErrors.personCount}</div>
        </div>

        <div className="mb-4">
          <label className="block text-2sm font-medium mb-1">Start Date</label>
          <input
            type="date"
            value={formState.startDate}
            onChange={(e) => handleChange('startDate', e.target.value)}
            className="w-full border rounded p-2"
            min={new Date().toISOString().split('T')[0]} // Set minimum to today
            required
          />
          <div className="text-sm ml-2 text-red-600 h-[15px]">{formErrors.startDate}</div>
        </div>

        <div className="mb-4">
          <label className="block text-2sm font-medium mb-1">End Date</label>
          <input
            type="date"
            value={formState.endDate}
            onChange={(e) => handleChange('endDate', e.target.value)}
            className="w-full border rounded p-2"
            min={formState.startDate ?? new Date().toISOString().split('T')[0]} // Set minimum to start date
            required
          />
          <div className="text-sm ml-2 text-red-600 h-[15px]">{formErrors.endDate}</div>
        </div>

        <div className="mb-4">
          <label className="block text-2sm font-medium mb-1">Description</label>
          <textarea value={formState.description} onChange={(e) => handleChange('description', e.target.value)} className="w-full border rounded p-2" minLength={50} maxLength={500} required />
          <div className="text-sm ml-2 text-red-600 h-[15px]">{formErrors.description}</div>
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white rounded p-2 hover:bg-blue-600">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookNowForm;
