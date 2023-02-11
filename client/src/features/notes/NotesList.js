import React from "react";
import { useGetNotesQuery } from "./notesApiSlice";
import { MemoizedNote } from "./Note";
import { useAuth } from "../../hooks/useAuth";

export const NotesList = () => {
  const { username, isManager, isAdmin } = useAuth();

  const {
    data: notes,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetNotesQuery("notesList", {
    //re-query the data every 15 secs
    pollingInterval: 15000,

    //if different window if focused and landed back,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p className="errmsg">{error?.data?.message}</p>;

  if (isSuccess) {
    const { ids, entities } = notes;

    let filteredIds;
    if (isManager || isAdmin) {
      filteredIds = [...ids];
    } else {
      filteredIds = ids.filter(
        (noteId) => entities[noteId].username === username
      );
    }

    const tableContent =
      filteredIds.length &&
      filteredIds.map((noteId) => (
        <MemoizedNote key={noteId} noteId={noteId} />
      ));

    return (
      <table className="table table--notes">
        <thead className="table__thead">
          <tr>
            <th scope="col" className="table_th note_status">
              Username
            </th>
            <th scope="col" className="table_th note_created">
              Created
            </th>
            <th scope="col" className="table_th note_updated">
              Updated
            </th>
            <th scope="col" className="table_th note_title">
              Title
            </th>
            <th scope="col" className="table_th note_owner">
              Owner
            </th>
            <th scope="col" className="table_th note_edit">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>{tableContent}</tbody>
      </table>
    );
  }
};
