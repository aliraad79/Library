import React, { Fragment, useEffect, useState } from "react";

import { Button, Paper } from "@mui/material";
import Link from "@mui/material/Link";
import { useParams } from "react-router-dom";
import { getLibraryInfo } from "../actions/library";
import { addMedia } from "../actions/media";
import Navbar from "../common/NavBar";
import AddMediaPopUp from "../common/PopUp";

function LibraryPage() {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [acceptedTypes, setAcceptedTypes] = useState([]);
  const [open, setOpen] = useState(false);

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
        console.log("Error", e);
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
      });
  };
  return (
    <Fragment>
      <Navbar />

      <AddMediaPopUp open={open} setOpen={setOpen} handleAdd={handleAdd} />

      <Paper
        className="d-flex flex-column justify-start"
        style={{ height: "94vh" }}
      >
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
          <Link href={`/media/${value.id}`} color="inherit">
            {value.title}
          </Link>
        ))}
      </Paper>
    </Fragment>
  );
}

export default LibraryPage;
