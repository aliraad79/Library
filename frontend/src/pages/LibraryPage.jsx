import React, { Fragment, useEffect, useState } from "react";

import { Button, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import { getLibraryInfo } from "../actions/library";
import { addMedia } from "../actions/media";
import Link from "@mui/material/Link";
import Navbar from "../common/NavBar";
import PopUp from "../common/PopUp";

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
        console.log(response.data);
      })
      .catch((e) => {
        console.log("Error", e);
      });
  }, [id]);

  const handleSubmit = () => setOpen(true);
  const handleAdd = (file) => {
    addMedia({ library: id, data: file })
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

      <PopUp open={open} setOpen={setOpen} handleAdd={handleAdd} />

      <Paper
        className="d-flex flex-column justify-start"
        style={{ height: "94vh" }}
      >
        <h2>{title}</h2>
        <p>{description}</p>

        <p>Accepted types for this Library:</p>
        {acceptedTypes.map((value) => (
          <span key={value}>{value}</span>
        ))}

        <Button onClick={handleSubmit} style={{ marginTop: "20px" }}>
          Add Media
        </Button>
        <h1>Medias</h1>

        {medias.map((value) => (
          <Link href={`/media/${value}`} color="inherit">
            {value}
          </Link>
        ))}
      </Paper>
    </Fragment>
  );
}

export default LibraryPage;
