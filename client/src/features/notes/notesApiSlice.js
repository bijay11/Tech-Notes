import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const notesAdapter = createEntityAdapter({});
const initialState = notesAdapter.getInitialState();

export const notesAPiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNotes: builder.query({
      query: () => "/notes",
      validateStatus: (response, result) => {
        return (response.status === 200) & !result.isError;
      },
      keepUnusedDataFor: 5,
      transformResponse: (responseData) => {
        const loadedNotes = responseData.map((note) => {
          note.id = note._id;
          return note;
        });
        return notesAdapter.setAll(initialState, loadedNotes);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Note", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Note", id })),
          ];
        }
        return [{ type: "Note", id: "LIST" }];
      },
    }),
  }),
});

//
export const { useGetNotesQuery } = notesAPiSlice;

// returns the query result object
export const selectNotesResult = notesAPiSlice.endpoints.getNotes.select();

//creates memoized selector
const selectNotesData = createSelector(
  selectNotesResult,

  //normalized state object with ids & entities
  (notesResult) => notesResult.data
);

// getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllNotes,
  selectById: selectNoteById,
  selectIds: selectNoteId,

  // Pass in a selector that returns the notes slice of state
} = notesAdapter.getSelectors(
  (state) => selectNotesData(state) ?? initialState
);
