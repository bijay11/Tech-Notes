import React from "react";
import { useGetUsersQuery } from "./usersApiSlice";
import { MemoizedUser } from "./User";

const UsersList = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery("usersList", {
    //re-query the data every minute
    pollingInterval: 60000,

    //if different window if focused and landed back,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p className="errmsg">{error?.data?.message}</p>;

  if (isSuccess) {
    const { ids } = users;

    const tableContent =
      ids.length &&
      ids.map((userId) => <MemoizedUser key={userId} userId={userId} />);

    return (
      <table className="table table--users">
        <thead className="table__thead">
          <tr>
            <th scope="col" className="table_th user_username">
              Username
            </th>
            <th scope="col" className="table_th user_roles">
              Roles
            </th>
            <th scope="col" className="table_th user_edit">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>{tableContent}</tbody>
      </table>
    );
  }
};

export { UsersList };
