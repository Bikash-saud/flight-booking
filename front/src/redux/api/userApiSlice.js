import { data } from "react-router";
import { USER_URL } from "../constraint";
import apiSlice from "./apiSlice";

const userApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        createUser :builder.mutation({
            query : (data)=>({
                url : `${USER_URL}`,
                method : "POST",
                body : data
            })
        }),
        loginUser : builder.mutation({
            query : (data)=>({
                url : `${USER_URL}/login`,
                method : "POST",
                body : data
            })
        }),
        logout : builder.mutation({
            query : ()=>({
                url : `${USER_URL}/logout`,
                method : "POST",

            })
        }),
        getUsers : builder.query({
            query : ()=>({
                url : `${USER_URL}`,
                method : "GET"
            })
        }),
        getUser : builder.query({
            query : (id)=>({
                url : `${USER_URL}/${id}`,
                method : "GET"
            }) 
        }),
        updateUserByAdmin : builder.mutation({
           query : (formData)=>({
            url : `${USER_URL}/${formData.userId}`,
            method : "PUT",
            body : formData
           })
        }),
        updateUser : builder.mutation({
            query:(formData)=>({
                url : `${USER_URL}/profile`,
                method : "PUT",
                body : formData
            })
        }),
        deleteUser : builder.mutation({
            query : (id)=>({
                url : `${USER_URL}/${id}`,
                method : "DELETE",
            })
        })
    })
})

export const {useCreateUserMutation,useDeleteUserMutation,useGetUserQuery,useGetUsersQuery,useLoginUserMutation,useLogoutMutation,useUpdateUserByAdminMutation,useUpdateUserMutation} = userApiSlice