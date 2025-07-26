
import  {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const api = createApi({             // www.xyz.com/endpoint 
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api'}),
    // tagTypes:["Tasks"],
    endpoints:(builder)=>({
        getTasks: builder.query({
            query:()=>({url:"/todos",method:"GET", params: { _limit: 5 },queryParams: { _sort: 'id', _order: 'desc' }}),
            // providesTags:["Tasks"]
        }),
        addTask: builder.mutation({
            query:(task)=>({
                url:"/todos",
                method:"POST",
                body:task,
                
            })
        }),

        updateTask: builder.mutation({
            query:({id,task})=>({   
                url:`/todos/${id}`,
                method:"PUT",
                body:task,
            }), 

        }),

        // invalidateTags: ["Tasks"]

    })
})


export const {useGetTasksQuery,useAddTaskMutation} = api