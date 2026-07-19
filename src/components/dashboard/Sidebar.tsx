import {
  Drawer,
  Toolbar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import {
  Dashboard,
  AccountBalanceWallet,
  ReceiptLong,
  People,
  CreditScore,
  Analytics,
  
  Logout,
} from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router-dom";
import { removeToken } from "../../utils/token";
import HistoryIcon from "@mui/icons-material/History";
const drawerWidth = 260;

const menuItems = [
  {
    text: "Dashboard",
    icon: <Dashboard />,
    path: "/dashboard",
  },
  {
    text: "Accounts",
    icon: <AccountBalanceWallet />,
    path: "/accounts",
  },
  {
    text: "Transactions",
    icon: <ReceiptLong />,
    path: "/transactions",
  },
  {
    text: "Beneficiaries",
    icon: <People />,
    path: "/beneficiaries",
  },
  {
    text: "Loans",
    icon: <CreditScore />,
    path: "/loans",
  },
  {
    text: "Analytics",
    icon: <Analytics />,
    path: "/analytics",
  },
  {
  text: "Cards",
  icon: <CreditCardIcon />,
  path: "/cards",
},{
  text: "Activity Logs",
  icon: <HistoryIcon />,
  path: "/activity",
},


];

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate("/", { replace: true });
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          bgcolor: "#0F172A",
          color: "white",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Toolbar />

      {/* Navigation */}
      <List sx={{ flexGrow: 1 }}>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            component={NavLink}
            to={item.path}
            sx={{
              color: "white",
              "&.active": {
                bgcolor: "#2563EB",
              },
            }}
          >
            <ListItemIcon sx={{ color: "white" }}>
              {item.icon}
            </ListItemIcon>

            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>

      {/* Logout */}
      <Box sx={{ mb: 2 }}>
        <List>
          <ListItemButton
            onClick={handleLogout}
            sx={{
              color: "#EF4444",
              "&:hover": {
                bgcolor: "#1E293B",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#EF4444" }}>
              <Logout />
            </ListItemIcon>

            <ListItemText primary="Logout" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
}