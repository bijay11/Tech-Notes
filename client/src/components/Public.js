import { Link } from "react-router-dom";

import React from "react";

const Public = () => {
  return (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Test App!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>Test App</p>
        <address className="public__addr">
          Test App
          <br />
          555 Foo Drive
          <br />
          Foo City, NC 27513
          <br />
          <a href="tel:+15555555555">(555) 555-5555</a>
        </address>
        <br />
        <p>Owner: Test Test</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
};

export default Public;
