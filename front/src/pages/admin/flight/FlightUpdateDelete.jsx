import { useState, useEffect } from "react";
import AdminMenu from "../AdminMenu";
import { useNavigate, useParams } from "react-router-dom";
import {
 useUpdateFlightMutation ,
  useDeleteFlightMutation,
  useGetFlightByIdQuery,
  useUploadImageMutation,
} from "../../../redux/api/flightApiSlice";
import { toast } from "react-toastify";

const AdminFlightUpdate = () => {
      const {id : flightId} = useParams()

  const { data : FlightData,refetch } = useGetFlightByIdQuery(flightId);


      const[departure, setDeparture] = useState(FlightData?.flight?.departure || "")
      const[arrival, setArrival] = useState(FlightData?.flight?.arrival || "")
      const[departureTime, setDepartureTime] = useState(FlightData?.flight?.departureTime || "")
      const[arrivalTime, setArrivalTime] = useState(FlightData?.flight?.arrivalTime || "")
      const[price, setPrice] = useState(FlightData?.flight?.price || "")
      const[date, setDate] = useState(FlightData?.flight?.date || "")
      const[airline, setAirline] = useState(FlightData?.flight?.airline || "")
      const[flightNumber, setFlightNumber] = useState(FlightData?.flight?.flightNumber || "")
      const[seats, setSeats] = useState(FlightData?.flight?.seats || "")
      const[availableSeats, setAvailableSeats] = useState(FlightData?.flight?.availableSeats ||"")
      const[image, setImage] = useState(FlightData?.flight?.image || "")
      const[status, setStatus] = useState(FlightData?.flight?.status || "")
      // const[imageUrl, setImageUrl] = useState(null)
      const navigate = useNavigate()
      
  const [uploadProductImage] = useUploadImageMutation();

  // Define the update product mutation
  const [updateProduct] = useUpdateFlightMutation();

  // Define the delete product mutation
  const [deleteProduct] = useDeleteFlightMutation();

  useEffect(() => {
    if (FlightData && FlightData._id) {
      setDeparture(FlightData?.flight.departure)
      setArrival(FlightData?.flight?.arrival)
      setAirline(FlightData?.flight?.airline)
      setArrivalTime(FlightData?.flight?.arrivalTime)
      // setAvailableSeats(FlightData.availableSeats)
      setDepartureTime(FlightData?.flight?.departureTime)
      setAvailableSeats(FlightData?.flight?.availableSeats)
      setDate(FlightData?.flight?.seats)
      setFlightNumber(FlightData?.flight?.flightNumber)
      setPrice(FlightData?.flight?.price)
      setSeats(FlightData?.flight?.seats)
      setStatus(FlightData?.flight?.status)
      setImage(FlightData?.flight?.image)
    }
  }, [FlightData]);

  const uploadFileHandler = async (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    try {
      const res = await uploadProductImage(formData).unwrap();
      toast.success("Item added successfully");
      setImage(res.image);
    } catch (err) {
      toast.success("Item added successfully");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("departure", departure);
      formData.append("arrival", arrival);
      formData.append("departureTime", departureTime);
      formData.append("arrivalTime", arrivalTime);
      formData.append("airline", airline);
      formData.append("availableSeats", availableSeats);
      formData.append("seats", seats);
      formData.append("flightNumber", flightNumber);
      formData.append("image",image)
      formData.append("price",price)
      formData.append("status",status)

    //   const flightData ={
    //     departure,
    //     airline,
    //     departureTime,
    //     arrivalTime,
    //     flightNumber,
    //     arrival,
    //     seats,
    //     availableSeats,
    //     price,
    //     image,
    //     date,
    //     status
    
    // }

      // Update product using the RTK Query mutation
      const {data} = await updateProduct({flightId, formData });
      console.log(data);
      

      if (data?.error) {
        toast.error(data.error, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
      } else {
        toast.success(`Product successfully updated`);
        navigate("/admin/allFlights");
      }
    } catch (err) {
      console.log(err);
      toast.error("Flight update failed. Try again.");
    }
  };

  const handleDelete = async () => {
    try {
      let answer = window.confirm(
        "Are you sure you want to delete this Flight?"
      );
      if (!answer) return;

       await deleteProduct(flightId);
      toast.success(`flight is deleted`);
      refetch()
      navigate("/admin/allFlights");
    } catch (err) {
      console.log(err);
      toast.error("Delete failed. Try again");
    }
  };

  return (
    <>
      <div className="container  xl:mx-[9rem] sm:mx-[0]">
        <div className="flex flex-col md:flex-row">
          <AdminMenu />
          <div className="md:w-3/4 p-3">
            <div className="h-12">Update / Delete Flight</div>

            {image && (
              <div className="text-center">
                <img
                  src={image}
                  alt="product"
                  className="block mx-auto w-full h-[40%]"
                />
              </div>
            )}

            <div className="mb-3">
              <label className="text-white  py-2 px-4 block w-full text-center rounded-lg cursor-pointer font-bold py-11">
                {image ? image.name : "Upload image"}
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={uploadFileHandler}
                  className="text-white"
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

              <div className="">
                <button
                  onClick={handleSubmit}
                  className="py-4 px-10 mt-5 rounded-lg text-lg font-bold  bg-green-600 mr-6"
                >
                  Update
                </button>
                <button
                  onClick={handleDelete}
                  className="py-4 px-10 mt-5 rounded-lg text-lg font-bold  bg-pink-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminFlightUpdate;