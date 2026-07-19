import { useEffect, useState } from "react";
import accountService from "../services/account.service";
import type { Account } from "../types/account";

export default function useAccounts() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchAccounts = async () => {
    try {
      setLoading(true);

      const response = await accountService.getAccounts();

      setAccounts(response.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  return {
    accounts,
    loading,
    fetchAccounts,
  };
}