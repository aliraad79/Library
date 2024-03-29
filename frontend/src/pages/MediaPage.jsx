import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Button, Link, Paper } from "@mui/material";

import { addAttachment } from "../actions/attachment";
import { getMediaInfo } from "../actions/media";

import AddFieldAttachmentPopUp from "../Popups/AddFieldAttachmentPopUp";
import AddFileAttachmentPopUp from "../Popups/AddFileAttachmentPopUp";

import Navbar from "../common/NavBar";

function MediaPage() {
  const [title, setTitle] = useState("");
  const [dataUrl, setDataUrl] = useState("");
  const [libraryId, setLibraryId] = useState([]);

  const [attachments, setAttachments] = useState([]);

  const [fileOpen, setFileOpen] = useState(false);
  const [fieldOpen, setFieldOpen] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    getMediaInfo({ id })
      .then((response) => {
        setTitle(response.data.title);
        setDataUrl(response.data.data);
        setLibraryId(response.data.library);
        setAttachments(response.data.attachments);
      })
      .catch((e) => {
        console.log("Error", e);
      });
  }, [id]);

  const handleFileSubmit = () => setFileOpen(true);
  const handleFieldSubmit = () => setFieldOpen(true);

  const handleAddAttachment = (name, fileOrField) => {
    addAttachment({ media: id, data: fileOrField, name })
      .then((response) => {
        setFileOpen(false);
        window.location.reload();
      })
      .catch((e) => {
        console.log("Error", e);
      });
  };

  return (
    <Fragment>
      <Navbar />

      <AddFileAttachmentPopUp
        open={fileOpen}
        setOpen={setFileOpen}
        handleAdd={handleAddAttachment}
      />
      <AddFieldAttachmentPopUp
        open={fieldOpen}
        setOpen={setFieldOpen}
        handleAdd={handleAddAttachment}
      />

      <Paper
        className="d-flex flex-column justify-start"
        style={{ height: "94vh" }}
      >
        <h1>
          <Link href={dataUrl} color="inherit">
            {title}
          </Link>
        </h1>

        <Link href={`/library/${libraryId}`} color="#00ff00">
          Library
        </Link>

        <Button onClick={handleFileSubmit} style={{ marginTop: "20px" }}>
          Add File Attachemnt
        </Button>

        <Button onClick={handleFieldSubmit} style={{ marginTop: "20px" }} color='secondary'>
          Add field Attachemnt
        </Button>

        {attachments.map((value) => (
          <h4>
            <Link href={`/attachment/${value.id}`} color="inherit">
              {value.name}
            </Link>
          </h4>
        ))}
      </Paper>
    </Fragment>
  );
}

export default MediaPage;
