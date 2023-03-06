import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import NewLibrary from "./pages/NewLibrary";
import LibraryPage from "./pages/LibraryPage";
import MediaPage from "./pages/MediaPage";
import AttachmentPage from './pages/AttachmentPage';

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
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/new-library" element={<NewLibrary />} />
          <Route exact path="/library/:id" element={<LibraryPage />} />
          <Route exact path="/media/:id" element={<MediaPage />} />
          <Route exact path="/attachment/:id" element={<AttachmentPage />} />
          
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
