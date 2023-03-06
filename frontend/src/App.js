import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AttachmentPage from "./pages/AttachmentPage";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import LibraryPage from "./pages/LibraryPage";
import Login from "./pages/Login";
import MediaPage from "./pages/MediaPage";
import NewLibrary from "./pages/NewLibrary";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./pages/PrivateRoute";
import SignUp from "./pages/SignUp";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />

          <Route exact path="/dashboard" element={<PrivateRoute />}>
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route exact path="/new-library" element={<PrivateRoute />}>
            <Route exact path="/new-library" element={<NewLibrary />} />
          </Route>

          <Route exact path="/library/:id" element={<PrivateRoute />}>
            <Route exact path="/library/:id" element={<LibraryPage />} />
          </Route>

          <Route exact path="/media/:id" element={<PrivateRoute />}>
            <Route exact path="/media/:id" element={<MediaPage />} />
          </Route>

          <Route exact path="/attachment/:id" element={<PrivateRoute />}>
            <Route exact path="/attachment/:id" element={<AttachmentPage />} />
          </Route>

          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
