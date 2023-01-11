import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectNoteById } from "./notesApiSlice";
import { selectAllUsers } from "../users/usersApiSlice";
import { EditNoteForm } from "./EditNoteForm";

export const EditNote = () => {
  const { id } = useParams();

  //get specific note
  const note = useSelector((state) => selectNoteById(state, id));
  const users = useSelector(selectAllUsers);

  return note && users ? (
    <EditNoteForm note={note} users={users} />
  ) : (
    <p>Loading...</p>
  );
};
