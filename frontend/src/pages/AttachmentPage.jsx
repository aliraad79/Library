import React, { Fragment, useEffect, useState } from "react";

import { Paper } from "@mui/material";
import Link from "@mui/material/Link";
import { useParams } from "react-router-dom";
import { addAttachment, getAttachmentInfo } from "../actions/attachment";
import Navbar from "../common/NavBar";

function AttachmentPage() {
  const [name, setName] = useState("");
  const [textValue, setTextValue] = useState("");
  const [fileValue, setFileValue] = useState("");
  const [media, setMedia] = useState("");

  const [open, setOpen] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    getAttachmentInfo({ id })
      .then((response) => {
        setName(response.data.name);
        setTextValue(response.data.textValue);
        setFileValue(response.data.fileValue);
        setMedia(response.data.media);
      })
      .catch((e) => {
        console.log("Error", e);
      });
  }, [id]);

  const handleSubmit = () => setOpen(true);
  const handleAdd = (file) => {
    addAttachment({})
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

      <Paper
        className="d-flex flex-column justify-start"
        style={{ height: "94vh" }}
      >
        <h1>ATTACHMENT</h1>
        <h3>{name}</h3>

        {textValue && (
          <>
            <div>Value :</div>
            <div>{textValue}</div>
          </>
        )}

        {fileValue && (
          <h3>
            <Link href={fileValue} color="inherit">
              Data
            </Link>
          </h3>
        )}
      </Paper>
    </Fragment>
  );
}

export default AttachmentPage;
