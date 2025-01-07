import { FLIGHT_URL, UPLOAD_IMG } from "../constraint";
import apiSlice from "./apiSlice";

const flightApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        createFlight : builder.mutation({
            query : (flightData)=>({
                url : `${FLIGHT_URL}`,
                method : 'POST',
                body : flightData
            })
        }),
        getFlights : builder.query({
            query : ()=>({
                url : `${FLIGHT_URL}`,
                method : "GET"
            })
        }),
        getFlightById : builder.query({
            query : (flightId)=>({
                url : `${FLIGHT_URL}/${flightId}`,
                method : "Get"
            })
        }),
        updateFlight : builder.mutation({
            query : (formData)=>({
                url : `${FLIGHT_URL}/update/${formData.flightId}`,
                method : "PUT",
                body : formData
            })
        }),
        deleteFlight : builder.mutation({
            query : (id)=>({
                url :`${FLIGHT_URL}/delete/${id}`
            })
        }),
        uploadImage : builder.mutation({
            query : (data)=>({
                url : `${UPLOAD_IMG}`,
                method : "POST",
                body : data

            })
        })
    })
})

export const {useUploadImageMutation,useCreateFlightMutation,useDeleteFlightMutation,useGetFlightByIdQuery,useGetFlightsQuery,useUpdateFlightMutation} = flightApiSlice