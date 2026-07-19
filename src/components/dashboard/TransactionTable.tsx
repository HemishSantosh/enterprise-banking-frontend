import { useMemo, useState } from "react";

import {
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  TextField,
  TablePagination,
  CircularProgress,
  Box,
} from "@mui/material";

import useAccounts from "../../hooks/useAccounts";
import useTransactions from "../../hooks/useTransactions";

export default function TransactionTable() {

  const { accounts } = useAccounts();

  const accountNumber =
    accounts.length > 0
      ? accounts[0].accountNumber
      : undefined;

  const {
    transactions,
    loading,
  } = useTransactions(accountNumber);

  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] =
    useState(5);

  const [search, setSearch] =
    useState("");

  const filteredTransactions = useMemo(() => {

    return transactions.filter((txn) =>

      txn.transactionId
        .toLowerCase()
        .includes(search.toLowerCase())

    );

  }, [transactions, search]);

  if (loading) {

    return (

      <Box
        display="flex"
        justifyContent="center"
        mt={5}
      >

        <CircularProgress />

      </Box>

    );

  }

  return (

    <Paper
      elevation={4}
      sx={{
        mt: 4,
        p: 3,
        borderRadius: 4,
      }}
    >

      <Typography
        variant="h6"
        fontWeight="bold"
        mb={3}
      >
        Recent Transactions
      </Typography>

      <TextField
        fullWidth
        placeholder="Search Transaction ID..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        sx={{ mb: 3 }}
      />

      <Table>

        <TableHead>

          <TableRow>

            <TableCell>
              Transaction ID
            </TableCell>

            <TableCell>
              Date
            </TableCell>

            <TableCell>
              Type
            </TableCell>

            <TableCell>
              Amount
            </TableCell>

            <TableCell>
              Status
            </TableCell>

            <TableCell>
              Remarks
            </TableCell>

          </TableRow>

        </TableHead>

        <TableBody>

          {filteredTransactions
            .slice(
              page * rowsPerPage,
              page * rowsPerPage + rowsPerPage
            )
            .map((txn) => (

              <TableRow
                hover
                key={txn.transactionId}
              >

                <TableCell>
                  {txn.transactionId}
                </TableCell>

                <TableCell>
                  {new Date(
                    txn.transactionDate
                  ).toLocaleString()}
                </TableCell>

                <TableCell>
                  {txn.transactionType}
                </TableCell>

                <TableCell>

                  ₹{" "}

                  {txn.amount.toLocaleString(
                    "en-IN"
                  )}

                </TableCell>

                <TableCell>

                  <Chip
                    label={txn.status}
                    color={
                      txn.status === "SUCCESS"
                        ? "success"
                        : txn.status === "FAILED"
                        ? "error"
                        : "warning"
                    }
                  />

                </TableCell>

                <TableCell>

                  {txn.remarks}

                </TableCell>

              </TableRow>

            ))}

        </TableBody>

      </Table>

      <TablePagination
        component="div"
        count={filteredTransactions.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={(_, value) =>
          setPage(value)
        }
        onRowsPerPageChange={(e) => {

          setRowsPerPage(
            parseInt(e.target.value)
          );

          setPage(0);

        }}
      />

    </Paper>

  );

}