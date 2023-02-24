import { Fragment, useState } from "react";

import { Button, Paper, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { addLibrary } from "../actions/library";
import Navbar from "../common/NavBar";

function NewLibrary() {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const navigate = useNavigate();

  const onTextChange = (e) => setTitle(e.target.value);
  const onDescChange = (e) => setDesc(e.target.value);
  const handleSubmit = () => {
    addLibrary({ title, description })
      .then((response) => {
        navigate("/dashboard");
      })
      .catch((e) => {
        navigate("/login");
        console.log("Error", e);
      });
  };

  return (
    <Fragment>
      <Navbar />

      <Paper
        className="d-flex flex-column justify-start"
        style={{ height: "93vh" }}
      >
        <h2>New Library</h2>

        <TextField
          onChange={onTextChange}
          value={title}
          margin="normal"
          id="title"
          label="Title"
          autoFocus
        />
        <TextField
          onChange={onDescChange}
          multiline
          value={description}
          margin="normal"
          id="desc"
          label="Description"
          autoFocus
        />

        <Button onClick={handleSubmit}>Submit</Button>
      </Paper>
    </Fragment>
  );
}

export default NewLibrary;
