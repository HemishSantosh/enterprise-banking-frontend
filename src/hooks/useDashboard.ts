import { useEffect, useState } from "react";
import { getDashboard } from "../services/dashboard.service";
import type { DashboardResponse } from "../types/dashboard";

export default function useDashboard() {
  const [dashboard, setDashboard] =
    useState<DashboardResponse | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function loadDashboard() {
      try {
        const data = await getDashboard();

        if (!ignore) {
          setDashboard(data);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    void loadDashboard();

    return () => {
      ignore = true;
    };
  }, []);

  return {
    dashboard,
    loading,
  };
}