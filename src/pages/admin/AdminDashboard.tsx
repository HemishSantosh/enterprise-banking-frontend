import { useEffect, useState } from "react";
import {
  Box,
  Stack,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Button,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

import { getDashboard } from "../../services/adminService";
import type { AdminDashboard as AdminDashboardType } from "../../types/admin";

export default function AdminDashboard() {
  const [dashboard, setDashboard] = useState<AdminDashboardType | null>(null);
  const [loading, setLoading] = useState(true);

  

  const loadDashboard = async () => {
    try {
      setLoading(true);
      const data = await getDashboard();
      setDashboard(data);
    } catch (error) {
      console.error("Failed to load dashboard:", error);
    } finally {
      setLoading(false);
    }
  };
useEffect(() => {
    loadDashboard();
  }, []);
  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="70vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box p={3}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h4" fontWeight="bold">
          Admin Dashboard
        </Typography>

        <Button
          variant="contained"
          startIcon={<RefreshIcon />}
          onClick={loadDashboard}
        >
          Refresh
        </Button>
      </Box>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
      >
        <Card sx={{ flex: 1 }}>
          <CardContent>
            <Typography color="text.secondary">
              Total Customers
            </Typography>

            <Typography variant="h4" fontWeight="bold">
              {dashboard?.totalCustomers ?? 0}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ flex: 1 }}>
          <CardContent>
            <Typography color="text.secondary">
              Total Accounts
            </Typography>

            <Typography variant="h4" fontWeight="bold">
              {dashboard?.totalAccounts ?? 0}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ flex: 1 }}>
          <CardContent>
            <Typography color="text.secondary">
              Today's Transactions
            </Typography>

            <Typography variant="h4" fontWeight="bold">
              {dashboard?.todayTransactions ?? 0}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ flex: 1 }}>
          <CardContent>
            <Typography color="text.secondary">
              Total Balance
            </Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
              color="success.main"
            >
              ₹{dashboard?.totalBalance?.toLocaleString("en-IN") ?? "0"}
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
}