import { useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from "@mui/material";

export default function AddMediaPopUp({ open, setOpen, handleAdd }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Media</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a Media to this library please select the Media.
          </DialogContentText>
          <TextField
            margin="normal"
            label="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />

          <Button variant="contained" component="label">
            Upload File
            <input
              type="file"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleAdd(selectedFile, title)}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
