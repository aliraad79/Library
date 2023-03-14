import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

export default function AddFileAttachmentPopUp({ open, setOpen, handleAdd }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add File Attachment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a Attchment to this Media please provide name and File
          </DialogContentText>

          <TextField
            margin="normal"
            id="username"
            label="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
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
          <Button onClick={() => handleAdd(name, selectedFile)}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
