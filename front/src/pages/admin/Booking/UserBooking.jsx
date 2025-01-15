import React from 'react'
import {useGetUserBookingQuery} from "../../../redux/api/bookingApiSlice"
const UserBooking = () => {
    const {data : userbooking} = useGetUserBookingQuery()
  return (
    <>
    {
        userbooking?.map((p)=>(
            
<div className="card bg-base-100 image-full w-96 shadow-xl" key={p._id}>
  <figure>
    <img
      src={p?.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{p?.airline}</h2>
    <p>{p?.price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        ))
    }
</>

)
}

export default UserBooking