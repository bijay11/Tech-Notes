import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersApiSlice";
import { NewNoteForm } from "./NewNoteForm";

export const NewNote = () => {
  const users = useSelector(selectAllUsers);

  if (!users) return <p>Loading....</p>;

  return <NewNoteForm users={users} />;
};
