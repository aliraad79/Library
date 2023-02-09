import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { logOut } from "../actions/auth";

function Navbar() {
  // const userData = localStorage.getItem("userJWT");
  // const isLoggedIn = userData && userData.access !== "";

  const [auth, setAuth] = React.useState(true);

  const handleMenu = (event) => {
    logOut({});
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
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                Log Out
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
