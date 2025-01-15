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
            query : ({flightId,formData})=>({
                url : `${FLIGHT_URL}/${flightId}`,
                method : "PUT",
                body : formData
            })
        }),
        deleteFlight : builder.mutation({
            query : (flightId)=>({
                url :`${FLIGHT_URL}/${flightId}`,
                method : "DELETE"
            })
        }),
        uploadImage : builder.mutation({
            query : (data)=>({
                url : `${UPLOAD_IMG}`,
                method : "POST",
                body : data

            })
        }),
        search : builder.mutation({
            query : (data)=>({
                url : `${FLIGHT_URL}/search`,
                method : "POST",
                body : data
            })
        }),
        randomFlight : builder.query({
            query : ()=>({
                url : `${FLIGHT_URL}//random-flight`,
                method : "GET"
            })
        })
    })
})

export const {useRandomFlightQuery,useUploadImageMutation,useCreateFlightMutation,useDeleteFlightMutation,useGetFlightByIdQuery,useGetFlightsQuery,useUpdateFlightMutation,useSearchMutation} = flightApiSlice