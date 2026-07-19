import { Navigate } from "react-router-dom";
import { getToken } from "../utils/token";

import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export default function ProtectedRoute({
  children,
}: Props) {
  const token = getToken();

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
}