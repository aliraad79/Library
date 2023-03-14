import * as React from "react";

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography
} from "@mui/material";

function LibraryCard({ library, openSuccessShare }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href={`/library/${library.id}`}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {library.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {library.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() =>
            openSuccessShare({
              ...library,
              sharePath: window.location.origin + "/mymedia/" + library.id,
              shared: true,
            })
          }
        >
          Share
        </Button>
      </CardActions>
    </Card>
  );
}

export default LibraryCard;
