import React, { Fragment, useEffect, useState } from "react";

import { Button, Link, Paper, Snackbar, Alert } from "@mui/material";

import { useParams } from "react-router-dom";
import { getLibraryInfo } from "../actions/library";
import { addMedia } from "../actions/media";
import AddMediaPopUp from "../Popups/AddMediaPopUp";
import Navbar from "../common/NavBar";

function LibraryPage() {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [acceptedTypes, setAcceptedTypes] = useState([]);
  const [open, setOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [notShared, setNotShared] = useState(false);

  const [medias, setMedias] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getLibraryInfo({ id })
      .then((response) => {
        setTitle(response.data.title);
        setDesc(response.data.description);
        setAcceptedTypes(response.data.accepted_file_extention);
        setMedias(response.data.medias);
      })
      .catch((e) => {
        setNotShared(true);
      });
  }, [id]);

  const handleSubmit = () => setOpen(true);
  const handleAdd = (file, title) => {
    addMedia({ library: id, data: file, title })
      .then((response) => {
        setOpen(false);
        window.location.reload();
      })
      .catch((e) => {
        console.log("Error", e);
        setAlertOpen(true);
      });
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlertOpen(false);
  };

  return (
    <Fragment>
      <Navbar />

      <div>
        <Snackbar
          open={alertOpen}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
        >
          <Alert severity="error">
            This Media Type is not accepted in this Library
          </Alert>
        </Snackbar>
      </div>

      <AddMediaPopUp open={open} setOpen={setOpen} handleAdd={handleAdd} />

      <Paper
        className="d-flex flex-column justify-start"
        style={{ height: "94vh" }}
      >
        {!notShared && (
          <>
            <h2>{title}</h2>
            <p>{description}</p>

            <div className="d-flex flex-column" style={{ color: "#00FF00" }}>
              <p>Accepted types for this Library:</p>
              {acceptedTypes.map((value) => (
                <span key={value}>{value}</span>
              ))}
            </div>

            <Button onClick={handleSubmit} style={{ marginTop: "20px" }}>
              Add Media
            </Button>
            <h1>Medias</h1>

            {medias.map((value) => (
              <Link
                href={`/mymedia/${value.id}`}
                color="inherit"
                key={value.id}
              >
                {value.title}
              </Link>
            ))}
          </>
        )}
        {notShared && (
          <h3 style={{ color: "red" }}>
            The library id is not correct or library has not been shared
          </h3>
        )}
      </Paper>
    </Fragment>
  );
}

export default LibraryPage;
