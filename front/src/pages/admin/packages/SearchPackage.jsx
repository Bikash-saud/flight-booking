import React, { useState } from 'react'
import {useGetPackagesQuery} from "../../../redux/api/packageApiSlice"
import { Link } from 'react-router'
const SearchPackage = () => {
    const {data : packages} = useGetPackagesQuery()
    const[store, setStore] = useState(packages)
    const[data1, setData1] = useState("")
    const getData = (e) =>{
      console.log(e.target.value);
      setData1(e.target.value)
  }
  
  let filterOut = store?.filter((curValue)=>{
    return curValue.name?.toLowerCase().includes(data1) || curValue.airline?.toLowerCase().includes(data1)
  })
  console.log(filterOut);
  
    
    return (
      <div className=' '>
        <h1 className=' text-center font-extrabold text-3xl mt-9 text-yellow-600'>Search Flights</h1>
        <p></p>
      <div className=' items-center justify-center text-center m-9 mb-20'>
      <input
      type="text"
      placeholder="Type  Title"
      className="w-[60%] h-[3rem] border px-10 outline-none rounded text-center"
          onChange={getData}/>
      
      </div>
      <h1 className=' text-3xl font-extrabold mb-20  text-center mt-20 underline text-green-400'>Our Packages</h1>
      <div className="  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
  
      {
  filterOut?.map((flight)=>(
    <div key={flight?._id} className=' grid grid-cols-3'>
       <Link to={`/package/${flight._id}`}>
  <div className="card card-compact bg-base-100 w-96 shadow-xl" >
    <figure>
      <img
        src={flight?.image}
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{flight?.departure}</h2>
      <p>{flight?.description}</p>
      <div className="card-actions justify-end">
        <Link to="/addbooking">
        
        <button className="btn btn-primary">Book Now</button>
        </Link>
      </div>
    </div>
  </div>
  </Link>
  
  </div>
  ))
      }
      </div>
      </div>
  
    )
  }

export default SearchPackage