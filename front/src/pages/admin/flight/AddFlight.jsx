import React, { useState } from 'react'
import {useCreateFlightMutation,useUploadImageMutation} from "../../../redux/api/flightApiSlice"
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
const AddFlight = () => {
    const[departure, setDeparture] = useState("")
    const[arrival, setArrival] = useState("")
    const[departureTime, setDepartureTime] = useState("")
    const[arrivalTime, setArrivalTime] = useState("")
    const[price, setPrice] = useState("")
    const[date, setDate] = useState("")
    const[airline, setAirline] = useState("")
    const[flightNumber, setFlightNumber] = useState("")
    const[seats, setSeats] = useState("")
    const[availableSeats, setAvailableSeats] = useState("")
    const[image, setImage] = useState("")
    const[status, setStatus] = useState("")
    const[imageUrl, setImageUrl] = useState(null)
    const navigate = useNavigate()
    const [create] = useCreateFlightMutation()
    const[uploadProductImage] = useUploadImageMutation()
    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
const flightData ={
    departure,
    airline,
    departureTime,
    arrivalTime,
    flightNumber,
    arrival,
    seats,
    availableSeats,
    price,
    image,
    date,
    status

}
const{data} = await create(flightData)


if (data.error) {
    toast.error("Product create failed. Try Again.");
  } else {
    toast.success(`New flight is created`);
    navigate("/");
  }         
        } catch (error) {
console.log(error);
toast.error(error.message)

        }
    }

    const uploadFileHandler = async (e) => {
        const formData = new FormData();
        formData.append("image", e.target.files[0]);
    
        try {
          const res = await uploadProductImage(formData).unwrap();
          toast.success(res.message);
          setImage(res.image);
          setImageUrl(res.image);
        } catch (error) {
          toast.error(error?.data?.message || error.error);
        }
      };
  return (
    <div className="container xl:mx-[9rem] sm:mx-[0]">
    <div className="flex flex-col md:flex-row">
      {/* <AdminMenu /> */}
      <div className="md:w-3/4 p-3">
        <div className="h-12">Create Flight</div>

        {imageUrl && (
          <div className="text-center">
            <img
              src={imageUrl}
              alt="product"
              className="block mx-auto max-h-[200px]"
            />
          </div>
        )}

        <div className="mb-3">
          <label className="border text-white px-4 block w-full text-center rounded-lg cursor-pointer font-bold py-11">
            {image ? image.name : "Upload Image"}

            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={uploadFileHandler}
              className={!image ? "hidden" : "text-white"}
            />
          </label>
        </div>

        <div className="p-3">
          <div className="flex flex-wrap">
            <div className="one">
              <label htmlFor="name">Departure Airport
              </label> <br />
              <input
                type="text"
                className="p-4 mb-3 w-[30rem] border rounded-lg bg-[#101011] text-white"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
              />
            </div>
            <div className="two ml-10 ">
              <label htmlFor="name block">Arrival Airport
              </label> <br />
              <input
                type="text"
                className="p-4 mb-3 w-[30rem] border rounded-lg bg-[#101011] text-white"
                value={arrival}
                onChange={(e) => setArrival(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="one">
              <label htmlFor="name block">Departure Time</label> <br />
              <input
                type="text"
                className="p-4 mb-3 w-[30rem] border rounded-lg bg-[#101011] text-white"
                value={departureTime}
                onChange={(e) => setDepartureTime(e.target.value)}
              />
            </div>
            <div className="two ml-10 ">
              <label htmlFor="name block">Arrival Time</label> <br />
              <input
                type="text"
                className="p-4 mb-3 w-[30rem] border rounded-lg bg-[#101011] text-white"
                value={arrivalTime}
                onChange={(e) => setArrivalTime(e.target.value)}
              />
            </div>
          </div>


          <div className="flex flex-wrap">
            <div className="one">
              <label htmlFor="name block">Airline</label> <br />
              <input
                type="text"
                className="p-4 mb-3 w-[30rem] border rounded-lg bg-[#101011] text-white"
                value={airline}
                onChange={(e) => setAirline(e.target.value)}
              />
            </div>
            <div className="two ml-10 ">
              <label htmlFor="name block">Flight Number</label> <br />
              <input
                type="text"
                className="p-4 mb-3 w-[30rem] border rounded-lg bg-[#101011] text-white"
                value={flightNumber}
                onChange={(e) => setFlightNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="one">
              <label htmlFor="name block">Seats</label> <br />
              <input
                type="number"
                className="p-4 mb-3 w-[30rem] border rounded-lg bg-[#101011] text-white"
                value={seats}
                onChange={(e) => setSeats(e.target.value)}
              />
            </div>
            <div className="two ml-10 ">
              <label htmlFor="name block">AvailbleSeats</label> <br />
              <input
                type="number"
                className="p-4 mb-3 w-[30rem] border rounded-lg bg-[#101011] text-white"
                value={availableSeats}
                onChange={(e) => setAvailableSeats(e.target.value)}
              />
            </div>
          </div>


          <div className="flex flex-wrap">
            <div className="one">
              <label htmlFor="name block">Date</label> <br />
              <input
                type="text"
                className="p-4 mb-3 w-[30rem] border rounded-lg bg-[#101011] text-white"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="two ml-10 ">
              <label htmlFor="name block">Price</label> <br />
              <input
                type="number"
                className="p-4 mb-3 w-[30rem] border rounded-lg bg-[#101011] text-white"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <label htmlFor="name block">Status</label> <br />
              <input
                type="text"
                className="p-4 mb-3 w-[95%] border rounded-lg bg-[#101011] text-white"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
          
          {/* <label htmlFor="" className="my-5">
            Price
          </label>
          <input
            type="number"
            className="p-2 mb-3 bg-[#101011] border rounded-lg w-[95%] text-white"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input> */}



          <button
            onClick={handleSubmit}
            className="py-4 px-10 mt-5 rounded-lg text-lg font-bold bg-pink-600"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AddFlight