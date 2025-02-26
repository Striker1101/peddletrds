import React from "react";
import { Modal, Backdrop, Fade, Box, Typography } from "@mui/material";

export default function NotificationModel({ modalOpen, handleModalClose }) {
  return (
    <Modal
      open={modalOpen === "notifications"}
      onClose={handleModalClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={modalOpen === "notifications"}>
        <Box
          sx={{
            position: "absolute",
            top: 60,
            right: 20,
            width: 300,
            bgcolor: "background.paper",
            p: 2,
            borderRadius: 2,
            boxShadow: 5,
          }}
        >
          <Typography variant="h6">Notifications</Typography>
          <Typography>No new notifications</Typography>
        </Box>
      </Fade>
    </Modal>
  );
}
