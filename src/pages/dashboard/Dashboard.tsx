import { Box, Toolbar } from "@mui/material";

 import Sidebar from "../../components/dashboard/Sidebar";
import Topbar from "../../components/dashboard/Topbar";
import DashboardCards from "../../components/dashboard/DashboardCards";
import RecentTransactions from "../../components/dashboard/RecentTransactions";
import TransactionChart from "../../components/dashboard/TransactionChart";
import QuickTransfer from "../../components/dashboard/QuickTransfer";
import AccountCards from "../../components/dashboard/AccountCards";
import AnalyticsChart from "../../components/dashboard/AnalyticsChart";
import BalanceTrend from "../../components/dashboard/BalanceTrend";
import SpendingChart from "../../components/dashboard/SpendingChart";
import CashFlowChart from "../../components/dashboard/CashFlowChart";
export default function Dashboard() {
  return (
    <Box sx={{ display: "flex" }}>

      <Sidebar />

      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "#0F172A",
          minHeight: "100vh",
        }}
      >

        <Topbar />

        <Toolbar />

        <Box p={4}>

          <DashboardCards />
<Box mt={4}>
    <RecentTransactions />
</Box>
<Box mt={4}>
    <TransactionChart />
</Box>
<Box mt={4}>
    <QuickTransfer />
</Box>
<Box mt={4}>
    <AccountCards />
</Box>
<Box mt={4}>
  <AnalyticsChart />
</Box>
<Box mt={4}>
  <BalanceTrend />
</Box>
<Box mt={4}>
  <SpendingChart />
</Box>
<Box mt={4}>
  <CashFlowChart />
</Box>
        </Box>

      </Box>

    </Box>
  );
}