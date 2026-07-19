import {
  Grid,
  Paper,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import SavingsIcon from "@mui/icons-material/Savings";

import useDashboard from "../../hooks/useDashboard";

export default function DashboardCards() {
  const { dashboard, loading } = useDashboard();

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={250}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!dashboard) {
    return (
      <Typography
        color="error"
        textAlign="center"
        mt={5}
      >
        Unable to load dashboard.
      </Typography>
    );
  }

  const cards = [
    {
      title: "Total Balance",
      value: `₹ ${dashboard.totalBalance.toLocaleString("en-IN")}`,
      icon: <SavingsIcon />,
      color: "#2563EB",
    },
    {
      title: "Accounts",
      value: dashboard.totalAccounts,
      icon: <AccountBalanceWalletIcon />,
      color: "#059669",
    },
    {
      title: "Transactions",
      value: dashboard.totalTransactions,
      icon: <ReceiptLongIcon />,
      color: "#EA580C",
    },
    {
      title: "Active Loans",
      value: dashboard.activeLoans,
      icon: <CreditScoreIcon />,
      color: "#7C3AED",
    },
  ];

  return (
    <Grid container spacing={3}>
      {cards.map((card) => (
        <Grid
          key={card.title}
          size={{ xs: 12, sm: 6, lg: 3 }}
        >
          <Paper
            elevation={4}
            sx={{
              p: 3,
              borderRadius: 4,
              transition: "all 0.3s ease",
              cursor: "pointer",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: 8,
              },
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  {card.title}
                </Typography>

                <Typography
                  variant="h4"
                  fontWeight="bold"
                  mt={1}
                >
                  {card.value}
                </Typography>
              </Box>

              <Box
                sx={{
                  width: 65,
                  height: 65,
                  bgcolor: card.color,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                }}
              >
                {card.icon}
              </Box>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}