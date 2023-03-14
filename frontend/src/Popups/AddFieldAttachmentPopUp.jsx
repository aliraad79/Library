import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

export default function AddFieldAttachmentPopUp({ open, setOpen, handleAdd }) {
  const [field, setField] = useState("");
  const [name, setName] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Attachment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a Attchment to this Media please provide Name and Value
          </DialogContentText>

          <TextField
            margin="normal"
            label="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <br />
          <TextField
            margin="normal"
            label="Value"
            onChange={(e) => setField(e.target.value)}
            value={field}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleAdd(name, field)}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
