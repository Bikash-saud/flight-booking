import { useState, useEffect } from "react";
import AdminMenu from "../AdminMenu";
import { useNavigate, useParams } from "react-router-dom";
import {
 useUpdatePackageMutation,
  useDeletePackageMutation,
  useGetPackageQuery,

} from "../../../redux/api/packageApiSlice";
import {useUploadImageMutation} from "../../../redux/api/flightApiSlice"
import { toast } from "react-toastify";

const UpdateDeletePackage = () => {
      const {id : packageId} = useParams()

  const { data : packageData,refetch } = useGetPackageQuery(packageId);


      const[name, setName] = useState(packageData?.name || "")
      const[description, setDescription] = useState(packageData?.description || "")
      const[price, setPrice] = useState(packageData?.price || "")
      const[status, setStatus] = useState(packageData?.status || "")
      const[location, setLocation] = useState(packageData?.location || "")
      const[image, setImage] = useState(packageData?.image || "")
      // const[imageUrl, setImageUrl] = useState(null)
      const navigate = useNavigate()
      
  const [uploadProductImage] = useUploadImageMutation();

  // Define the update product mutation
  const [updateProduct] = useUpdatePackageMutation();

  // Define the delete product mutation
  const [deleteProduct] = useDeletePackageMutation();

  useEffect(() => {
    if (packageData && packageData._id) {
      setName(packageData.name)
      setDescription(packageData.description)
      setLocation(packageData.location)
      setPrice(packageData.price)
      setStatus(packageData.status)
      setImage(packageData.image)
    }
  }, [packageData]);

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
 const flightData = new FormData()
        flightData.append("name",name)
        flightData.append("description", description)
        flightData.append("price", price)
        flightData.append("location", location)
        flightData.append("status", status)
        flightData.append("image",image)

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
      const {data} = await updateProduct({packageId, formData });
      console.log(data);
      

      if (data?.error) {
        toast.error(data.error, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
      } else {
        toast.success(`Package successfully updated`);
        navigate("/admin/allPackages");
      }
    } catch (err) {
      console.log(err);
      toast.error("Package update failed. Try again.");
    }
  };

  const handleDelete = async () => {
    try {
      let answer = window.confirm(
        "Are you sure you want to delete this Package?"
      );
      if (!answer) return;

       await deleteProduct(packageId);
      toast.success(`Package is deleted`);
      refetch()
      navigate("/admin/allPackages");
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
            <div className="h-12">Update / Delete Package</div>

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
              <label htmlFor="name">Title
              </label> <br />
              <input
                type="text"
                className="p-4 mb-3 w-[30rem] border rounded-lg bg-[#101011] text-white"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="two ml-10 ">
              <label htmlFor="name block">Location
              </label> <br />
              <input
                type="text"
                className="p-4 mb-3 w-[30rem] border rounded-lg bg-[#101011] text-white"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="one">
              <label htmlFor="name block">Description</label> <br />
              <input
                type="text"
                className="p-4 mb-3 w-[30rem] border rounded-lg bg-[#101011] text-white"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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


         
          {/* </div> */}
          {/* </div> */}


          
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

export default UpdateDeletePackage;