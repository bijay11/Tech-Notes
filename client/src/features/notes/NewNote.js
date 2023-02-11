import PulseLoader from "react-spinners/PulseLoader";
import { NewNoteForm } from "./NewNoteForm";
import { useGetUsersQuery } from "../users/usersApiSlice";

export const NewNote = () => {
  const { users } = useGetUsersQuery("usersList", {
    selectFromResult: ({ data }) => ({
      users: data?.ids.map((id) => data?.entities[id]),
    }),
  });

  if (!users.length) return <PulseLoader color="#fff" />;

  return <NewNoteForm users={users} />;
};
