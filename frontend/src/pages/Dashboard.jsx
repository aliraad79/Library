import { Grid, Typography } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { getLibraries, setLibraryAsShared } from "../actions/library";

import LibraryCard from "../common/LibraryCard";
import Navbar from "../common/NavBar";
import SharePopUp from "../Popups/SharePopUp";

function Dashboard() {
  const [items, setItems] = useState([]);
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState(false);

  useEffect(() => {
    getLibraries()
      .then((response) => {
        setItems(response.data);
      })
      .catch((e) => {
        console.log("Error", e);
      });
  }, []);

  const openSuccessShare = (library) => {
    setLibraryAsShared(library.id, library)
      .then((response) => {
        setShareUrl(library.sharePath);
        setPopUpOpen(true);
      })
      .catch((e) => {
        console.log("Error", e);
      });
  };
  return (
    <Fragment>
      <Navbar />
      <SharePopUp open={popUpOpen} setOpen={setPopUpOpen} shareUrl={shareUrl} />
      <div
        className="justify-center"
        style={{
          backgroundColor: "#86A3B8",
          color: "#fff",
          display: "flex",
        }}
      >
        <Typography component="h1" variant="h2">
          Your Library
        </Typography>
      </div>
      <Grid container spacing={0.5} style={{ margin: "5px", maxWidth: "99%" }}>
        {items.map((i) => (
          <Grid item xs={3} key={i.id}>
            <LibraryCard
              library={i}
              openSuccessShare={openSuccessShare}
            ></LibraryCard>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
}

export default Dashboard;
