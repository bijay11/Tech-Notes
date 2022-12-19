import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  const date = new Date();
  const today = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);
  return (
    <section className="welcome">
      <p>{today}</p>
      <h1>Welcome</h1>
      <p>
        <Link to="/dash/notes" />
        View tech notes
      </p>
      <p>
        <Link to="/dash/users" />
        View user settings
      </p>
    </section>
  );
};

export default Welcome;
