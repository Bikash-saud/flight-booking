import React, { useState } from 'react'
import {useCreatePackageMutation} from "../../../redux/api/packageApiSlice"
import {useUploadImageMutation} from "../../../redux/api/flightApiSlice"
import {  useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import AdminMenu from '../AdminMenu'
const AddPackages = () => {
    const[name, setName] = useState("")
    const[description, setDescription] = useState("")
    const[price, setPrice] = useState("")
    const[location, setLocation] = useState("")
    const[status, setStatus] = useState("")
    const[image, setImage] = useState("")
    const[imageUrl, setImageUrl] = useState("")
    const navigate = useNavigate()

    const [createPackage] = useCreatePackageMutation()
    const[uploadImg] = useUploadImageMutation()

    const imageHandler = async(e)=>{
        const formData = new FormData()
        formData.append("image", e.target.files[0])
        try {
          const res = await uploadImg(formData).unwrap()
          toast.success(res.message)
          setImage(res.image)
          setImageUrl(res.image)
            
        } catch (error) {
            console.log(error);
            
            toast.error(error.message)
        }
    }

    const submitHandler = async(e)=>{
      e.preventDefault()
      try {
       

        const flightData={
          name,
          description,
          price,
          location,
          status,
          image
        }

        const {data} = await createPackage(flightData)
        if (data.error) {
            toast.error("Product create failed. Try Again.");
          } else {
            toast.success(`New Package is created`);
            navigate("/");
          }         
      } catch (error) {
        console.log(error);
        toast.error(error.message)
        
      }
    }
    
  return (
    <div className="container xl:mx-[9rem] sm:mx-[0]">
    <div className="flex flex-col md:flex-row">
      <AdminMenu /> 
      <div className="md:w-3/4 p-3">
        <div className="h-12">Create Packages</div>

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
              onChange={imageHandler}
              className={!image ? "hidden" : "text-white"}
            />
          </label>
        </div>

        <div className="p-3">
          <div className="flex flex-wrap">
            <div className="one">
              <label htmlFor="name">Titel
              </label> <br />
              <input
                type="text"
                className="p-4 mb-3 w-[30rem] border rounded-lg bg-[#101011] text-white"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="two ml-10 ">
              <label htmlFor="name block">Price
              </label> <br />
              <input
                type="number"
                className="p-4 mb-3 w-[30rem] border rounded-lg bg-[#101011] text-white"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="one">
              <label htmlFor="name block">Location</label> <br />
              <input
                type="text"
                className="p-4 mb-3 w-[30rem] border rounded-lg bg-[#101011] text-white"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="two ml-10 ">
              <label htmlFor="name block">Status
              </label> <br />
              <input
                type="number"
                className="p-4 mb-3 w-[30rem] border rounded-lg bg-[#101011] text-white"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
          </div>


         


        
          <label htmlFor="name block">Description</label> <br />
              <input
                type="text"
                className="p-4 mb-3 w-[95%] border rounded-lg bg-[#101011] text-white"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
            onClick={submitHandler}
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

export default AddPackages