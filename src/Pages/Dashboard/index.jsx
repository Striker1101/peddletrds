import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import WithdrawIcon from "@mui/icons-material/CurrencyExchange";
import PersonIcon from "@mui/icons-material/Person";
import EditNotificationsIcon from "@mui/icons-material/EditNotifications";
import HomeIcon from "@mui/icons-material/Home";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AdminRouter from "./AdminRouter";
import DepositIcon from "@mui/icons-material/Savings";
import { Link } from "react-router-dom";
import UserModal from "./Components/UserModel";
import NotificationModel from "./Components/NotificationModel";
import TopHeader from "./Components/Widget/TopHeader";
import { apiGet } from "../../Utils/service";
import { getUser } from "../../Utils/transform";
import { useMediaQuery } from "@mui/material";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function DashboardIndex() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(null);
  const isMdBelow = useMediaQuery(theme.breakpoints.down("md"));

  const closedMixin = (theme) => ({
    width: isMdBelow ? "0px" : "56px", // Fully hide on mobile
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  });

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open
      ? {
          ...openedMixin(theme),
          "& .MuiDrawer-paper": openedMixin(theme),
        }
      : {
          ...closedMixin(theme),
          "& .MuiDrawer-paper": closedMixin(theme),
        }),
  }));

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleModalOpen = (modal) => setModalOpen(modal);
  const handleModalClose = () => setModalOpen(null);

  React.useEffect(() => {
    const user = getUser();
    if (user) {
      apiGet(`/user/${user?.id}`).then((res) => {
        localStorage.setItem("user", JSON.stringify(res?.data));
      });
    } else {
      window.location.href = "/login";
    }
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        style={{ backgroundColor: "#5949d6" }}
      >
        <Toolbar>
          <IconButton color="inherit" onClick={handleDrawerOpen} edge="start">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <IconButton
            color="inherit"
            onClick={() =>
              handleModalOpen(
                modalOpen === "notifications" ? null : "notifications"
              )
            }
          >
            <EditNotificationsIcon />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() =>
              handleModalOpen(modalOpen === "user" ? null : "user")
            }
          >
            <PersonIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Notification Modal */}
      <NotificationModel
        modalOpen={modalOpen}
        handleModalClose={handleModalClose}
      />

      {/* User Modal */}
      <UserModal modalOpen={modalOpen} handleModalClose={handleModalClose} />

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            { text: "Home", link: "home", icon: <HomeIcon /> },
            { text: "Deposit", link: "deposit", icon: <DepositIcon /> },
            { text: "Withdraw", link: "withdraw", icon: <WithdrawIcon /> },
          ].map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
              <Link to={`/dashboard?page=${item.link}`}>
                <ListItemButton sx={{ minHeight: 48, px: 2.5 }}>
                  <ListItemIcon sx={{ minWidth: 0, justifyContent: "center" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[
            {
              text: "Trading Bot",
              link: "trading_bot",
              icon: <SmartToyIcon />,
            },
            { text: "profile", link: "profile", icon: <ManageAccountsIcon /> },
          ].map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
              <Link to={`/dashboard?page=${item.link}`}>
                <ListItemButton sx={{ minHeight: 48, px: 2.5 }}>
                  <ListItemIcon sx={{ minWidth: 0, justifyContent: "center" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <TopHeader />
        <AdminRouter />
      </Box>
    </Box>
  );
}
