import React from "react";
import { Modal, Backdrop, Fade, Box, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import { apiPost } from "../../../Utils/service";
import { handleError, handleSuccess } from "../../../Components/ToastProvider";

const UserModal = ({ modalOpen, handleModalClose }) => {
  function handleLogOut(e) {
    e.stopPropagation(); // Prevent event bubbling
    apiPost("/logout", {})
      .then((res) => {
        console.log(res);
        localStorage.clear();
        handleSuccess("Logout was Successful");

        setTimeout(() => {
          window.location.href = "/login";
        }, 1000);
      })
      .catch((err) => {
        handleError("Please try again Later");
      });
  }

  return (
    <Modal
      open={modalOpen === "user"}
      onClose={handleModalClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
      style={{ zIndex: 1000 }}
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
          <Typography variant="h6" sx={{ mb: 2 }}>
            User Menu
          </Typography>

          <Link
            to="/dashboard?page=profile"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mt: 1,
                cursor: "pointer",
              }}
            >
              <AccountCircleIcon />
              <Typography>Profile</Typography>
            </Box>
          </Link>

          <Link
            to="/dashboard?page=deposit"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mt: 1,
                cursor: "pointer",
              }}
            >
              <AttachMoneyIcon />
              <Typography>Deposit</Typography>
            </Box>
          </Link>

          <Box
            onClick={handleLogOut}
            tabIndex={0}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mt: 1,
              cursor: "pointer",
            }}
          >
            <ExitToAppIcon />
            <Typography>Logout</Typography>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default UserModal;
