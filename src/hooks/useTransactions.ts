import { useEffect, useState } from "react";
import { getTransactionHistory } from "../services/transaction.service";
import type { Transaction } from "../types/transaction";

export default function useTransactions(accountNumber?: string) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTransactions = async () => {
    if (!accountNumber) {
      setTransactions([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);

      const data = await getTransactionHistory(accountNumber);

      setTransactions(data);
    } catch (error) {
      console.error("Failed to load transactions", error);
      setTransactions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchTransactions();
  }, [accountNumber]);

  return {
    transactions,
    loading,
    refresh: fetchTransactions,
  };
}