import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api'}),
        tagTypes: ['Task'],
    endpoints: (builder)=>({
        getTasks: builder.query({
            query: () => 'tasks',
            providesTags: ['Task']
        }),
        addTask: builder.mutation({
            query: (task)=>{
                console.log('addTask payload:', task);
                return {
                    url: 'tasks',
                    method: 'POST',
                    body: task,
                };
            },
            invalidatesTags: ['Task'],
            async onQueryStarted(arg, {dispatch, queryFulfilled}) {
                const patchResult = dispatch(
                    api.util.updateQueryData('getTasks', undefined, (draft) => {
                        draft.unshift(arg);
                    })
                );
                try{
                    await queryFulfilled;
                } catch {
                    patchResult.undo();
                }
            }
        }),
        updateTask: builder.mutation({
            query:({id,...task})=>{
                console.log('updateTask payload:', {id, ...task});
                return {
                    url: `tasks/${id}`,
                    method: 'PATCH',
                    body: task,
                };
            },
            invalidatesTags: ['Task']
        })
    })
})
export const {useGetTasksQuery,useAddTaskMutation,useUpdateTaskMutation} = api;