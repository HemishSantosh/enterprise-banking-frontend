import { useEffect, useState } from "react";

import { getTransactionHistory } from "../services/transaction.service";
import type { Transaction } from "../types/transaction";

export default function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  // TODO:
  // Replace this with the logged-in user's selected account.
  // For now, use an existing account number from your database.
  const accountNumber = "100000000003";

  const fetchTransactions = async () => {
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
  const loadTransactions = async () => {
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

  loadTransactions();
}, [accountNumber]);
  return {
    transactions,
    loading,
    refresh: fetchTransactions,
  };
}