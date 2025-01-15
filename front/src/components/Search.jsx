import React, { useState } from 'react';
import { useSearchMutation } from '../redux/api/flightApiSlice';

const Search = () => {
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  // const [airline, setAirline] = useState('');
  const [searchFlight, { data, error, isLoading }] = useSearchMutation();
  console.log(data);
  

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      await searchFlight({ departure, arrival, departureTime, arrivalTime }).unwrap();
    } catch (err) {
      console.error('Failed to search flights: ', err);
    }
  };

  return (
    <div className="max-w-screen-md gap-3 mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Search Flights</h2>
      <form onSubmit={handleSearch} className=' flex justify-center items-center'>
        <div className="mb-4 p-2">
          <label className="block text-gray-700">Departure:</label>
          <input
            type="text"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            className="w-full  border rounded-lg p-2 px-3"
          />
        </div>
        <div className="mb-4 p-2">
          <label className="block text-gray-700">Arrival:</label>
          <input
            type="text"
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4 p-2">
          <label className="block text-gray-700">Departure Date:</label>
          <input
            type="date"
            value={departureTime}
            onChange={(e) => setDepartureTime(e.target.value)}
            className="w-full px-7 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Arrival Date:</label>
          <input
            type="date"
            value={arrivalTime}
            onChange={(e) => setArrivalTime(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
       
        <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </form>
      {error && <p className="text-red-500 mt-4">Error: {error.message}</p>}
      {data && (
        <div>
          <h2>Flights Found:</h2>
          <ul>
            {data.map((flight) => (
              <li key={flight.id}>
                {flight.departure} → {flight.arrival} ({flight.departureTime} - {flight.arrivalTime})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;