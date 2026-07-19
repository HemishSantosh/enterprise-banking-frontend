import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";

import Login from "../pages/auth/Login/Login";
import Register from "../pages/auth/Register/Register";

import Dashboard from "../pages/dashboard/Dashboard";
import Accounts from "../pages/accounts/Accounts";
import Transactions from "../pages/transactions/Transactions";
import Beneficiaries from "../pages/beneficiaries/Beneficiaries";
import Loans from "../pages/loans/Loans";
import Analytics from "../pages/analytics/Analytics";
import Settings from "../pages/settings/Settings";
import Cards from "../pages/cards/Cards";
import ProfilePage from "../pages/profile/Profile";
import TransactionDetails from "../pages/TransactionDetails";
import ActivityLogs from "../pages/ActivityLogs";
import AdminDashboard from "../pages/admin/AdminDashboard";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
       {/* Dashboard (No MainLayout) */}
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

{/* Other Modules */}
<Route
  element={
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
  }
>
  <Route
  path="/transactions/:id"
  element={<TransactionDetails />}
/>
  <Route path="/accounts" element={<Accounts />} />
  <Route path="/transactions" element={<Transactions />} />
  <Route path="/beneficiaries" element={<Beneficiaries />} />
  <Route path="/loans" element={<Loans />} />
  <Route path="/cards" element={<Cards />} />
  <Route path="/analytics" element={<Analytics />} />
  <Route path="/profile" element={<ProfilePage />} />
  <Route path="/settings" element={<Settings />} />
  <Route path="/activity" element={<ActivityLogs />} />
  <Route path="/admin" element={<MainLayout />}>
  <Route index element={<AdminDashboard />} />
 
</Route>
</Route>
      </Routes>
    </BrowserRouter>
  );
}