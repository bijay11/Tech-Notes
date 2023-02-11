import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Welcome = () => {
  const { username, isManager, isAdmin } = useAuth();
  const date = new Date();
  const today = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);

  const isManagerOrAdmin = isManager || isAdmin;

  return (
    <section className="welcome">
      <p>{today}</p>
      <h1>Welcome {username}</h1>
      <p>
        <Link to="/dash/notes" />
        View tech notes
      </p>
      <p>
        <Link to="/dash/notes/new" />
        Add New techNote
      </p>
      {isManagerOrAdmin && (
        <>
          <p>
            <Link to="/dash/users" />
            View user settings
          </p>

          <p>
            <Link to="/dash/users/new" />
            Add New User
          </p>
        </>
      )}
    </section>
  );
};

export default Welcome;
