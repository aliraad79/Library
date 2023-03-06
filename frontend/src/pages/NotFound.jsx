import { Fragment } from "react";

import Navbar from "../common/NavBar";

function NotFound() {
  return (
    <Fragment>
      <Navbar />
      <div className="d-flex justify-center">
        <h3>Page Not Found!</h3>
      </div>
    </Fragment>
  );
}

export default NotFound;
