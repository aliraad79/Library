import { Fragment } from "react";

import Navbar from "../common/NavBar";

function HomePage() {
  return (
    <Fragment>
      <Navbar />
      <div className="d-flex justify-center">
        <h3>Welcome to Library Managment System</h3>
      </div>
    </Fragment>
  );
}

export default HomePage;
