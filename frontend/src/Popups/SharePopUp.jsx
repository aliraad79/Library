import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from "react-router-dom";

export default function SharePopUp({ open, setOpen, shareUrl }) {
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Shared</DialogTitle>
      <DialogContent>
        <DialogContentText>
          This library is now shared! here is the url:
          <br />
          <Link to={shareUrl}>{shareUrl}</Link>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
