import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

export default function PopUp({ open, setOpen, handleAdd }) {
  const [selectedFile, setSelectedFile] = useState(null);

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
          <Button variant="contained" component="label">
            Upload File
            <input
              type="file"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleAdd(selectedFile)}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
