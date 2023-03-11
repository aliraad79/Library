import React, { Fragment, useEffect, useState } from "react";

import { Paper } from "@mui/material";
import Link from "@mui/material/Link";
import { useParams } from "react-router-dom";
import { getAttachmentInfo } from "../actions/attachment";
import Navbar from "../common/NavBar";

function AttachmentPage() {
  const [name, setName] = useState("");
  const [textValue, setTextValue] = useState("");
  const [fileValue, setFileValue] = useState("");
  const [mediaId, setMedia] = useState("");

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

  return (
    <Fragment>
      <Navbar />

      <Paper
        className="d-flex flex-column justify-start"
        style={{ height: "94vh" }}
      >
        <h1>{name}</h1>

        {textValue && (
          <>
            <h2>{textValue}</h2>
          </>
        )}

        {fileValue && (
          <h2>
            <Link href={fileValue} color="inherit">
              Data
            </Link>
          </h2>
        )}
        <Link href={`/mymedia/${mediaId}`} color="inherit">
          Related Media
        </Link>
      </Paper>
    </Fragment>
  );
}

export default AttachmentPage;
