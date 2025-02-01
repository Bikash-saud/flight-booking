import React from 'react'
import {useGetFlightByIdQuery} from "../../../redux/api/flightApiSlice"
import { Link, useParams } from 'react-router'
const FlightDetail = () => {
    const { id: flightId } = useParams()
    const {data : flight} = useGetFlightByIdQuery(flightId)
   
    
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img className="w-full h-full object-cover" src={flight?.image} alt="Product Image"/>
                </div>
                
            </div>
            <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{flight?.departure} <span className=' text-orange-400'>to</span> {flight?.arrival}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                 DepartureTime : {flight?.departureTime} - ArrivalTime : {flight?.arrivalTime}
                </p>
                <div className="flex mb-4">
                    <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                        <span className="text-gray-600 dark:text-gray-300">${flight?.price}</span>
                    </div>
                    <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300">Seats :</span>
                        <span className="text-gray-600 dark:text-gray-300">{flight?.seats}</span>
                    </div>
                </div>
                
               <div className='mb-4'>
                <span className=' font-bold text-gray-700 dark:text-gray-300'>Available Seats :</span>
                <span className=' font-bold text-gray-700 dark:text-gray-300'> {flight?.availableSeats}</span>
               </div>

               <div className='mb-4'>
                <span className=' font-bold text-gray-700 dark:text-gray-300'>Date :</span>
                <span className=' font-bold text-gray-700 dark:text-gray-300'> {flight?.date}</span>
               </div>

               <div className='mb-4'>
                <span className=' font-bold text-gray-700 dark:text-gray-300'>Flight Number :</span>
                <span className=' font-bold text-gray-700 dark:text-gray-300'> {flight?.flightNumber}</span>
               </div>

               <div className='mb-4'>
                <span className=' font-bold text-gray-700 dark:text-gray-300'>Airline :</span>
                <span className=' font-bold text-gray-700 dark:text-gray-300'> {flight?.airline}</span>
               </div>

               
                <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">Status:</span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                      {flight?.status}
                    </p>
                </div>
                <div className=" px-2 mt-9">
                    <Link to="/addbooking">
                    
                        <button className="btn btn-secondary">Book now</button>
                    </Link>
                    </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default FlightDetail