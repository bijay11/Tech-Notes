import { useParams } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import { EditUserForm } from "./EditUserForm";
import { useGetUsersQuery } from "./usersApiSlice";
import { useTitle } from "./../../hooks/useTitle";

export const EditUser = () => {
  useTitle("Edit User Page");

  const { id } = useParams();
  const { user } = useGetUsersQuery("usersList", {
    selectFromResult: ({ data }) => ({
      user: data?.entities[id],
    }),
  });

  if (!user) return <PulseLoader color="#fff" />;

  return <EditUserForm user={user} />;
};
