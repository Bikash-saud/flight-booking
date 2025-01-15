
import { BOOKING_URL } from "../constraint";
import apiSlice from "./apiSlice";


const bookingApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        createBooking : builder.mutation({
            query : (data)=>({
                url : `${BOOKING_URL}`,
                method : "POST",
                body : data
            })
        }),
        getBooking : builder.query({
            query : (bookingId)=>({
                url : `${BOOKING_URL}/${bookingId}`,
                method : "GET"
            })
        }),
        getBookings : builder.query({
            query : ()=>({
                url : `${BOOKING_URL}`,
                method : "GET"
            })
        }),
        deleteBooking : builder.mutation({
            query :(bookingId)=>({
                url : `${BOOKING_URL}/${bookingId}`,
                method : "DELETE"
            })
        }),
        updateBooking : builder.mutation({
            query : ({bookingId,formData})=>({
                url : `${BOOKING_URL}/${bookingId}`,
                method : "PUT",
                body : formData
            })
        }),
        getUserBooking : builder.query({
            query : ()=>({
                url :`${BOOKING_URL}/mine`,
                method : "Get"
            })
        })
        
    })
})

export const {useCreateBookingMutation,useDeleteBookingMutation,useGetBookingQuery,useGetBookingsQuery,useGetUserBookingQuery,useUpdateBookingMutation} = bookingApiSlice