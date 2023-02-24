import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { logOut } from "../actions/auth";

function Navbar() {
  const userData = localStorage.getItem("Token");
  const isLoggedIn = userData && userData !== "";

  const navigate = useNavigate();

  const handleLogout = (event) => {
    console.log("HERE2");
    logOut()
      .then((response) => {
        localStorage.clear();
        navigate("/dashboard");
      })
      .catch((e) => {
        navigate("/login");
        console.log("Error", e);
      });
  };

  const handleLogin = (event) => {
    navigate("/login");
  };

  const handleNewLibrary = (event) => {
    navigate("/new-library");
  };

  return (
    <Box sx={{ flexGrow: 1, height: "7vh" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, marginLeft: "50px" }}
          >
            Library
          </Typography>
          {isLoggedIn && (
            <div>
              <IconButton
                size="small"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleNewLibrary}
                color="inherit"
              >
                New Library
              </IconButton>
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
          {!isLoggedIn && (
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
