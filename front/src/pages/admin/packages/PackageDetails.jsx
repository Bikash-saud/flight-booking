import {useParams,Link} from "react-router-dom"
import {useAddReviewMutation,useGetPackageQuery} from "../../../redux/api/packageApiSlice"
import { toast } from "react-toastify";
import { useState } from "react";
import { useSelector } from "react-redux";
import MovieTabs from "./PackageTap";
const MovieDetails = () => {
    const {id : packageId} = useParams();
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState("")
    const {data : movie, refetch} = useGetPackageQuery(packageId)
    const {userInfo} = useSelector((state)=> state.auth)
    const [createReview, {isLoading : loadingMovieReview}] = useAddReviewMutation()

    const submitHandler = async(e) =>{
        e.preventDefault()
        try {
            await createReview({
                id : packageId,
                rating,
                comment
            }).unwrap()
            refetch()
            toast.success("Review created successfully")
        } catch (error) {
            toast.error(error.data || error.message)
        }
    }



    return (
        <>
        <div>
          <Link
            to="/"
            classNameName="  text-white font-semibold hover:underline ml-[20rem]"
          >
            Go Back
          </Link>
        </div>
  
        <div className="font-sans bg-white">
      <div className="p-4 lg:max-w-7xl max-w-4xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(169,170,172,0.8)] p-6 rounded">
          <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">

            <div className="px-4 py-10 rounded shadow-md relative">
              <img src={movie?.image} alt="Product" className="w-4/5 aspect-[251/171] rounded object-cover mx-auto" />
              <button type="button" className="absolute top-4 right-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="#ccc" className="mr-1 hover:fill-[#333]" viewBox="0 0 64 64">
                  <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000"></path>
                </svg>
              </button>
            </div>

           
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-gray-800">{movie?.name}</h3>
            <div className="flex items-center space-x-1 mt-2">
            
              <h4 className="text-gray-500 text-base !ml-3">Location :{movie?.location}</h4>
            </div>

            <p className="text-xl font-bold text-gray-500 mt-2">Description: {movie?.description}.</p>

            <div className="flex flex-wrap gap-4 mt-6">
              <p className="text-gray-800 text-2xl font-bold">Price: ${movie?.price}</p>
              {/* <p className="text-gray-500 text-base"><strike>$1500</strike> <span className="text-sm ml-1">Tax included</span></p> */}
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-800">Status: {movie?.status}</h3>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-800">Reviews: {movie?.numReviews}</h3>
            </div>


            <div className="flex gap-4 mt-12 max-w-md">
            <Link to="/addbooking">
            
              <button type="button" className="w-full px-4 py-2.5 outline-none border border-blue-600 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded">Book now</button>
              
            </Link>
            </div>
          </div>
        </div>
        <div className="container ml-[20rem] mt-5">
            <MovieTabs
              loadingMovieReview={loadingMovieReview}
              userInfo={userInfo}
              submitHandler={submitHandler}
              rating={rating}
              setRating={setRating}
              comment={comment}
              setComment={setComment}
              movie={movie}
            />
          </div>

    </div>
    </div>
    </>
  )
}

export default MovieDetails