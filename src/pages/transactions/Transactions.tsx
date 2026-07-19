import { useState } from "react";
import { Typography } from "@mui/material";

import TransactionCards from "../../components/transactions/TransactionCards";
import TransactionFilters from "../../components/transactions/TransactionFilters";
import TransactionTable from "../../components/transactions/TransactionTable";
import CreateTransactionDialog from "../../components/transactions/CreateTransactionDialog";

import useTransactions from "../../hooks/useTransactions";

export default function Transactions() {
  const { transactions, refresh } = useTransactions();

  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      transaction.remarks
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      transaction.transactionType
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      transaction.referenceNumber
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesType =
      type === "" ||
      transaction.transactionType === type;

    return matchesSearch && matchesType;
  });

  return (
    <>
      <Typography
        variant="h4"
        fontWeight={700}
        mb={3}
      >
        Transactions
      </Typography>

      <TransactionCards
  transactions={filteredTransactions}
/>

      <TransactionFilters
        search={search}
        setSearch={setSearch}
        type={type}
        setType={setType}
        onNewTransaction={() =>
          setOpenDialog(true)
        }
      />

      <TransactionTable
        transactions={filteredTransactions}
      />

      <CreateTransactionDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onSuccess={refresh}
      />
    </>
  );
}