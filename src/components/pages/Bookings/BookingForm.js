import { useState } from 'react';
import FormField from './FormField';

const BookingForm = ({ availableTimes, dispatchOnDateChange, submitData }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const isNameValid = () => name.trim() !== '';
  const isEmailValid = () => email.trim() !== '' && email.includes('@');
  const isDateValid = () => date.trim() !== '';
  const isTimeValid = () => time.trim() !== '';
  const isNumberOfGuestsValid = () => Number(numberOfGuests) > 0;
  const isOccasionValid = () => occasion.trim() !== '';

  const areAllFieldsValid = () =>
    isNameValid() &&
    isEmailValid() &&
    isDateValid() &&
    isTimeValid() &&
    isNumberOfGuestsValid() &&
    isOccasionValid();

  const handleFormSubmit = e => {
    e.preventDefault();
    setHasSubmitted(true);
    if (!areAllFieldsValid()) return;

    submitData({
      name,
      email,
      date,
      time,
      numberOfGuests,
      occasion
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <FormField
        label="Full Name"
        htmlFor="booking-name"
        hasError={hasSubmitted && !isNameValid()}
        errorMessage="Please enter your name"
      >
        <input
          type="text"
          id="booking-name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </FormField>

      <FormField
        label="Email"
        htmlFor="booking-email"
        hasError={hasSubmitted && !isEmailValid()}
        errorMessage="Please enter a valid email"
      >
        <input
          type="email"
          id="booking-email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </FormField>

      <FormField
        label="Date"
        htmlFor="booking-date"
        hasError={hasSubmitted && !isDateValid()}
        errorMessage="Please select a date"
      >
        <input
          type="date"
          id="booking-date"
          value={date}
          onChange={e => {
            setDate(e.target.value);
            dispatchOnDateChange(e.target.value);
          }}
          required
        />
      </FormField>

      <FormField
        label="Time"
        htmlFor="booking-time"
        hasError={hasSubmitted && !isTimeValid()}
        errorMessage="Please select a time"
      >
        <select
          id="booking-time"
          value={time}
          onChange={e => setTime(e.target.value)}
          required
        >
          <option value="">Select a time</option>
          {availableTimes.map(t => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </FormField>

      <FormField
        label="Number of Guests"
        htmlFor="booking-guests"
        hasError={hasSubmitted && !isNumberOfGuestsValid()}
        errorMessage="Please enter the number of guests"
      >
        <input
          type="number"
          id="booking-guests"
          value={numberOfGuests}
          onChange={e => setNumberOfGuests(e.target.value)}
          min="1"
          required
        />
      </FormField>

      <FormField
        label="Occasion"
        htmlFor="booking-occasion"
        hasError={hasSubmitted && !isOccasionValid()}
        errorMessage="Please select an occasion"
      >
        <select
          id="booking-occasion"
          value={occasion}
          onChange={e => setOccasion(e.target.value)}
          required
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Graduation">Graduation</option>
          <option value="Anniversary">Anniversary</option>
          <option value="No special occasion">No special occasion</option>
        </select>
      </FormField>

      <button type="submit" className="button-primary">Book Table</button>
    </form>
  );
};

export default BookingForm;
