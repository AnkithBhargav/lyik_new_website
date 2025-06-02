import React from "react";
import { Snackbar, Alert } from "@mui/material";

const AlertBar = ({
  open,
  onClose,
  message,
  severity = "success",
  autoHideDuration = 3000,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      //   sx={{ mt: { xs: 8, sm: 10, md: 10 } }}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertBar;
