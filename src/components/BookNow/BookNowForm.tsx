import React, { useState, useRef } from 'react';
import { BookNowFormErrors, BookNowFormItems, BookNowFormKeys } from '../../types';
import { calculateDaysBetween, checkIfDateIsToday, checkIfPastDate } from '../../utils/dateFunctions';

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
    personCount: '',
    startDate: '',
    endDate: '',
    description: '',
  };

  const [formState, setFormState] = useState<BookNowFormItems>(defaultFormState);
  const [formErrors, setFormErrors] = useState<BookNowFormErrors>(defaultFormErrors);

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleValidation = (field: BookNowFormKeys, value: string | number) => {
    switch (field) {
      case 'destination':
        if (!value) {
          setFormErrors((prev) => ({ ...prev, destination: 'Please select a destination' }));
        } else {
          setFormErrors((prev) => ({ ...prev, destination: '' }));
        }
        break;
      case 'personCount':
        if ((value as number) == 0) {
          setFormErrors((prev) => ({ ...prev, personCount: 'Minimum of 1 person is required' }));
        } else if ((value as number) < 0) {
          setFormErrors((prev) => ({ ...prev, personCount: 'Number of persons cannot be negative' }));
        } else if ((value as number) > 500) {
          setFormErrors((prev) => ({ ...prev, personCount: 'Number of persons too large' }));
        } else {
          setFormErrors((prev) => ({ ...prev, personCount: '' }));
        }
        break;
      case 'description':
        if (!value) {
          setFormErrors((prev) => ({ ...prev, description: 'Please give a description' }));
        } else if ((value as string).length < 50) {
          setFormErrors((prev) => ({ ...prev, description: 'Description too short' }));
        } else if ((value as string).length > 500) {
          setFormErrors((prev) => ({ ...prev, description: 'Description too long' }));
        } else {
          setFormErrors((prev) => ({ ...prev, description: '' }));
        }
        break;
      case 'startDate':
        if (!value) {
          setFormErrors((prev) => ({ ...prev, startDate: 'Please select a valid start date' }));
        } else if (checkIfPastDate(value as string)) {
          setFormErrors((prev) => ({ ...prev, startDate: 'Start Date should be future date' }));
        } else if (checkIfDateIsToday(value as string)) {
          setFormErrors((prev) => ({ ...prev, startDate: 'Start Date cannot be today' }));
        } else {
          setFormErrors((prev) => {
            return { ...prev, startDate: '' };
          });
        }
        break;
      case 'endDate':
        if (!value) {
          setFormErrors((prev) => ({ ...prev, endDate: 'Please select an valid end date' }));
        } else if (checkIfPastDate(value as string)) {
          setFormErrors((prev) => ({ ...prev, endDate: 'End Date should be future date' }));
        } else if (checkIfDateIsToday(value as string)) {
          setFormErrors((prev) => ({ ...prev, endDate: 'End Date cannot be today' }));
        } else if (calculateDaysBetween(value as string, formState.startDate) < 1) {
          setFormErrors((prev) => ({ ...prev, endDate: 'End Date should be greater than Start Date' }));
        } else {
          setFormErrors((prev) => ({ ...prev, endDate: '' }));
        }
        break;
      default:
        break;
    }
  };

  const handleFullFormValidation = () => {
    for (const [field, value] of Object.entries(formState)) {
      handleValidation(field as BookNowFormKeys, value as string);
    }
  };

  const handleChange = (field: BookNowFormKeys, value: string | number) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
    handleValidation(field, value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = Object.values(formErrors).every((value) => value == '');
    if (isValid) {
      window.alert('Booking Successfull');
      setFormState(defaultFormState);
      setFormErrors(defaultFormErrors);
    }
  };

  return (
    <div className="w-[90%] mx-auto p-4 border rounded shadow-lg">
      <h5 className="text-3xl font-bold mb-1 text-center">Explore Your Adventure</h5>
      <h6 className="text-3md font-semibold text-center text-slate-700 mb-4">Start your dream trip now with just a few clicks!</h6>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-2sm font-medium mb-1">Where to</label>
          <select name="destination" value={formState.destination} onChange={(e) => handleChange('destination', e.target.value)} className="w-full border rounded p-2">
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
          <input name="personCount" type="number" value={formState.personCount} onChange={(e) => handleChange('personCount', e.target.value)} className="w-full border rounded p-2" min={1} required />
          <div className="text-sm ml-2 text-red-600 h-[15px]">{formErrors.personCount}</div>
        </div>

        <div className="mb-4">
          <label className="block text-2sm font-medium mb-1">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formState.startDate}
            onChange={(e) => handleChange('startDate', e.target.value)}
            className="w-full border rounded p-2"
            min={new Date().toISOString().split('T')[0]}
            required
          />
          <div className="text-sm ml-2 text-red-600 h-[15px]">{formErrors.startDate}</div>
        </div>

        <div className="mb-4">
          <label className="block text-2sm font-medium mb-1">End Date</label>
          <input
            type="date"
            name="endDate"
            value={formState.endDate}
            onChange={(e) => handleChange('endDate', e.target.value)}
            className="w-full border rounded p-2 disabled:cursor-not-allowed disabled:border-gray-400 disabled:bg-gray-100 disabled:text-gray-300"
            min={formState.startDate}
            disabled={!formState.startDate || !!formErrors.startDate}
            required
          />
          <div className="text-sm ml-2 text-red-600 h-[15px]">{formErrors.endDate}</div>
        </div>

        <div className="mb-4">
          <label className="block text-2sm font-medium mb-1">Description</label>
          <textarea
            value={formState.description}
            name="description"
            onChange={(e) => handleChange('description', e.target.value)}
            className="w-full border rounded p-2"
            minLength={50}
            maxLength={500}
            required
            rows={4}
          />
          <div className="text-sm ml-2 text-red-600 h-[15px]">{formErrors.description}</div>
        </div>

        <button onClick={() => handleFullFormValidation()} type="submit" className="w-full bg-blue-500 text-white rounded p-2 hover:bg-blue-600 cursor-pointer">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookNowForm;
