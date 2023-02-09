import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { logOut, Login } from "../actions/auth";

function Navbar() {
  // const userData = localStorage.getItem("userJWT");
  // const isLoggedIn = userData && userData.access !== "";

  const [auth, setAuth] = React.useState(false);

  const handleLogout = (event) => {
    logOut({});
  };

  const handleLogin = (event) => {
    Login({});
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, marginLeft: "50px" }}
          >
            Library
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="small"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleLogout}
                color="inherit"
              >
                Logout
              </IconButton>
            </div>
          )}
          {!auth && (
            <div>
              <IconButton
                size="small"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleLogin}
                color="inherit"
              >
                Login
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
