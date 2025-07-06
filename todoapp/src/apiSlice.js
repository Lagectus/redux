
import  {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api'}),
    // tagTypes:["Tasks"],
    endpoints:(builder)=>({
        getTasks: builder.query({
            query:()=>({url:"/todos",method:"GET", params: { _limit: 5 },}),
            // providesTags:["Tasks"]
        }),
        addTask: builder.mutation({
            query:(task)=>({
                url:"/todos",
                method:"POST",
                body:task
            })
        }),
        // invalidateTags: ["Tasks"]

    })
})


export const {useGetTasksQuery,useAddTaskMutation} = api