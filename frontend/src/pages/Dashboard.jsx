import { Grid, Typography } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { getLibraries } from "../actions/library";

import LibraryCard from "../common/ItemCard";
import Navbar from "../common/NavBar";

function Dashboard() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getLibraries()
      .then((response) => {
        setItems(response.data);
      })
      .catch((e) => {
        console.log("Error", e);
      });
  }, []);

  return (
    <Fragment>
      <Navbar />
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
          <Grid item xs={3}>
            <LibraryCard title={i.title} desc={i.description} id={i.id}></LibraryCard>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
}

export default Dashboard;
