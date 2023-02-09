import * as React from "react";
import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { logOut } from "../actions/auth";

function Navbar() {
  // const userData = localStorage.getItem("userJWT");
  // const isLoggedIn = userData && userData.access !== "";

  const [auth, setAuth] = React.useState(false);
  const navigate = useNavigate();

  const handleLogout = (event) => {
    logOut({});
  };

  const handleLogin = (event) => {
    navigate("/login");
  };

  return (
    <Box sx={{ flexGrow: 1, height:"7vh" }}>
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
