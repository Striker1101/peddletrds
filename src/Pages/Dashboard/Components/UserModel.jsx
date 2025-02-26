import React from "react";
import { Modal, Backdrop, Fade, Box, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const UserModal = ({ modalOpen, handleModalClose }) => {
  return (
    <Modal
      open={modalOpen === "user"}
      onClose={handleModalClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={modalOpen === "user"}>
        <Box
          sx={{
            position: "absolute",
            top: 60,
            right: 20,
            width: 250,
            bgcolor: "background.paper",
            p: 2,
            borderRadius: 2,
            boxShadow: 5,
          }}
        >
          <Typography
            variant="h6"
            sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}
          >
            User Menu
          </Typography>

          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mt: 1,
              cursor: "pointer",
            }}
          >
            <AccountCircleIcon /> Profile
          </Typography>

          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mt: 1,
              cursor: "pointer",
            }}
          >
            <AttachMoneyIcon /> Deposit
          </Typography>

          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
              mt: 1,
            }}
          >
            <ExitToAppIcon /> Logout
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
};

export default UserModal;
