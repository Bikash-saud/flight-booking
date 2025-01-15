import { PACKAGE_URL } from "../constraint";
import apiSlice from "./apiSlice";


const packageApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        createPackage : builder.mutation({
            query : (flightData)=>({
                url : `${PACKAGE_URL}`,
                method : "POST",
                body : flightData
            })
        }),
        getPackage : builder.query({
            query : (packageId)=>({
                url : `${PACKAGE_URL}/${packageId}`,
                method : "GET",

            })
        }),
        getPackages : builder.query({
            query:()=>({
                url : `${PACKAGE_URL}`,
                method : "GET"
            })
        }),
        deletePackage : builder.mutation({
            query : (packageId)=>({
                url : `${PACKAGE_URL}/${packageId}`,
                method : "DELETE"
            })
        }),
        updatePackage : builder.mutation({
            query : ({packageId,formData})=>({
                url : `${PACKAGE_URL}/${packageId}`,
                method : "PUT",
                body : formData
            })
        }),
        addReview : builder.mutation({
            query : ({id,rating,comment})=>({
                url : `${PACKAGE_URL}/${id}/reviews`,
                method : "POST",
                body : {id,rating,comment}
            })
        }),
        topPackage : builder.query({
            query : ()=>({
                url : `${PACKAGE_URL}/top-package`
            })
        })
    })
})


export const {useTopPackageQuery,useAddReviewMutation,useCreatePackageMutation,useDeletePackageMutation,useGetPackageQuery,useGetPackagesQuery,useUpdatePackageMutation} = packageApiSlice