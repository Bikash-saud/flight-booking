import React, { useState } from 'react'
import {useCreateBookingMutation} from "../../../redux/api/bookingApiSlice"
import{useGetFlightByIdQuery} from "../../../redux/api/flightApiSlice"
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
const AddBooking = () => {
    const {data : flight} = useGetFlightByIdQuery()
    const[name, setName] = useState("")
    const[phone, setPhone] = useState("")
    const[email, setEmail] = useState("")
    const[age, setAge] = useState("")
    const[luggage, setLuggage] = useState("")
    const[meal, setMeal] = useState("")
    const[bookingDate, setBookingDate] = useState("")
    const[address, setAddress] = useState("")
    const[postalCode, setPostalCode] = useState("")
    const[city, setCity] = useState("")
    const[country, setCountry] = useState("")
    const[seatNumber, setSetNumber] = useState("")
    const[gender, setGender] = useState("")
    const[flight1, setFlight] = useState(flight?._id)
    const[createBooking] = useCreateBookingMutation()
    const navigate = useNavigate()

    const submitHandler = async(e)=>{
        e.preventDefault()
        try {
            const res = await createBooking({name,gender,age,seatNumber,luggage,meal,phone,email,bookingDate,address,city,postalCode,country,flight1:flight?._id}).unwrap()
            toast.success("Your form submited successfully")
            navigate("/")
        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
        }
    }

  return (
    <div className="flex items-center justify-center p-12">
    {/* <!-- Author: FormBold Team --> */}
    <div className="mx-auto w-full max-w-[550px] ">
        <form onSubmit={submitHandler}>
            <div className="mb-5">
                <label htmlFor="name" className="mb-3 block text-base font-medium text-white">
                    Full Name
                </label>
                <input type="text" name="name" id="name" placeholder="Full Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className="mb-5">
                <label htmlFor="phone" className="mb-3 block text-base font-medium text-white">
                    Phone Number
                </label>
                <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            </div>
          <div className="mb-5">
                <label htmlFor="email" className="mb-3 block text-base font-medium text-white">
                    Email Address
                </label>
                <input type="email" name="email" id="email" placeholder="Enter your email"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="mb-5">
                <label htmlFor="age" className="mb-3 block text-base font-medium text-white">
                    Age
                </label>
                <input type="number" name="age" id="age" placeholder="Enter your age"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" value={age} onChange={(e)=>setAge(e.target.value)} />
            </div>

            <div className="mb-5">
                <label htmlFor="luggage" className="mb-3 block text-base font-medium text-white">
                    Luggage
                </label>
                <input type="text" name="text" id="text" placeholder="Enter your luggage"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" value={luggage} onChange={(e)=>setLuggage(e.target.value)}/>
            </div>


            <div className="mb-5">
                <label htmlFor="luggage" className="mb-3 block text-base font-medium text-white">
                    Flight
                </label>
                <input type="text" name="text" id="text" placeholder="Enter your luggage"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" value={flight1} onChange={()=>setFlight(flight1)}/>
            </div>


            <div className="mb-5">
                <label htmlFor="email" className="mb-3 block text-base font-medium text-white">
                Select Meal Type

                </label>
                <select onChange={(e)=>setMeal(e.target.value)} name="meal" id="meal" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
  <option value="vegitarian">Vegitarian</option>
  <option value="non-vegitarian">non-Vegitarian</option>
  <option value="sugarfree">Sugar Free</option>

</select>
            </div>

            <div className="mb-5">
                <label htmlFor="email" className="mb-3 block text-base font-medium text-white">
                Choose Gender

                </label>
                <select onChange={(e)=>setGender(e.target.value)} name="meal" id="meal" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
  <option value="male">Male</option>
  <option value="female">Female</option>
 

</select>
            </div>
            <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label htmlFor="date" className="mb-3 block text-base font-medium text-white">
                        Date
                        </label>
                        <input type="date" name="date" id="date"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" value={bookingDate} onChange={(e)=>setBookingDate(e.target.value)} />
                    </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label htmlFor="number" className="mb-3 block text-base font-medium text-white">
                            SeatNumber
                        </label>
                        <input type="number" name="number" id="number"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" value={seatNumber} onChange={(e)=>setSetNumber(e.target.value)} />
                    </div>
                </div>
            </div>


            <div className="mb-5 pt-3">
                <label className="mb-5 block text-base font-semibold text-white sm:text-xl">
                    Address Details
                </label>
                <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <input type="text" name="area" id="area" placeholder="Enter address"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <input type="text" name="city" id="city" placeholder="Enter city"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" value={city} onChange={(e)=>setCity(e.target.value)}/>
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <input type="text" name="state" id="state" placeholder="Enter country"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" value={country} onChange={(e)=>setCountry(e.target.value)}/>
                        </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                            <input type="text" name="post-code" id="post-code" placeholder="Post Code"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" value={postalCode} onChange={(e)=>setPostalCode(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>




            <div>
                <button type='submit'
                    className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Book Appointment
                </button>
            </div>
        </form>
    </div>
</div>
  )
}

export default AddBooking