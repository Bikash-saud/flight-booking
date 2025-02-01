import React from 'react'
import {useGetFlightsQuery} from "../../../redux/api/flightApiSlice"
import { Link } from 'react-router';
const Flights = () => {
    const {data : flights} = useGetFlightsQuery()
    // console.log(data);
    
  return (
    <>
     <h1 className=' font-bold text-center mb-2 mt-20 text-orange-400 '>Available Flights</h1>
     <h1 className=' font-extrabold text-center mb-4 text-3xl'>Check Recents Flight</h1>
    <div className="  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
        {
            flights?.map((f)=>(
<div key={f._id}>
    <Link to={`/flight/${f._id}`}>
    <figure className="px-10 pt-10">
      <img
        src={f?.image}
        alt="Shoes"
        className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{f?.departure} <span className=' text-orange-300'>to</span> {f?.arrival}</h2>
      <p>DepartureTime : {f?.departureTime} - ArrivalTime : {f?.arrivalTime}</p>
      <p>Airline : {f?.airline}</p>
      <p>Date : {f?.date}</p>
      <div className="card-actions">
        <Link to="/addbooking">
        
        <button className="btn btn-primary">Book Now</button>
        </Link>
      </div>
      </div>
      </Link>
      </div>
            ))
        }
  
  </div>
  </>
  )
}

export default Flights