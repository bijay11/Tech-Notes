import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserById } from "./usersApiSlice";
import { EditUserForm } from "./EditUserForm";

export const EditUser = () => {
  const { id } = useParams();
  const user = useSelector((state) => selectUserById(state, id));

  if (!user) return <p>Loading ...</p>;

  return <EditUserForm user={user} />;
};
