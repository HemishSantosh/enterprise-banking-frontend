import {
  Drawer,
  Toolbar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Button,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PeopleIcon from "@mui/icons-material/People";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import LogoutIcon from "@mui/icons-material/Logout";

import { useNavigate, useLocation } from "react-router-dom";

const drawerWidth = 250;

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { text: "Accounts", icon: <AccountBalanceIcon />, path: "/accounts" },
    { text: "Transactions", icon: <ReceiptLongIcon />, path: "/transactions" },
    { text: "Beneficiaries", icon: <PeopleIcon />, path: "/beneficiaries" },
    { text: "Loans", icon: <CurrencyRupeeIcon />, path: "/loans" },
    { text: "Cards", icon: <CreditCardIcon />, path: "/cards" },
    { text: "Analytics", icon: <AnalyticsIcon />, path: "/analytics" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("jwtToken"); // Change if your token key is different
    navigate("/login");
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar>
        <Typography variant="h6" fontWeight="bold">
          Banking App
        </Typography>
      </Toolbar>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        {/* Menu Items */}
        <Box sx={{ flexGrow: 1, overflow: "auto" }}>
          <List>
            {menuItems.map((item) => (
              <ListItemButton
                key={item.text}
                selected={location.pathname === item.path}
                onClick={() => navigate(item.path)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>

                <ListItemText primary={item.text} />
              </ListItemButton>
            ))}
          </List>
        </Box>

        {/* Logout Button */}
        <Box
          sx={{
            p: 2,
            borderTop: "1px solid #E0E0E0",
          }}
        >
          <Button
            fullWidth
            variant="contained"
            color="error"
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
            sx={{
              borderRadius: 2,
              py: 1.2,
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}