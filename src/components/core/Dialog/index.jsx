import * as React from "react";
import PropTypes from "prop-types";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Box, Button, Typography } from "@mui/material";

export default function SimpleDialogComp({ content, triggerTitle, title }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button
        disableRipple
        onClick={handleClickOpen}
        sx={{
          all: "unset",
          fontWeight: 300,
          fontSize: "14px",
          color: "#4943da",
          cursor: "pointer",
          ":hover": { background: "none" },
        }}
      >
        {triggerTitle}
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle align="center">{title}</DialogTitle>
        <Box sx={{ p: "1em", maxHeight: "500px", overflow: "auto" }}>
          <Typography fontWeight="200">{content} </Typography>
        </Box>
      </Dialog>
    </Box>
  );
}
SimpleDialogComp.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  triggerTitle: PropTypes.string.isRequired,
};
