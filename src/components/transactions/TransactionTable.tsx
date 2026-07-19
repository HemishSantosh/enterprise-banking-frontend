import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import type { Transaction } from "../../types/transaction";

interface Props {
  transactions: Transaction[];
}

export default function TransactionTable({
  transactions,
}: Props) {

  const navigate = useNavigate();

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {transactions.map((transaction) => (
            <TableRow
  key={transaction.referenceNumber}
  hover
  sx={{
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#F5F7FA",
    },
  }}
  onClick={() =>
    navigate(`/transactions/${transaction.referenceNumber}`)
  }
>
              <TableCell>{transaction.referenceNumber}</TableCell>

              <TableCell>
                {transaction.transactionDate}
              </TableCell>

              <TableCell>
                {transaction.transactionType}
              </TableCell>

              <TableCell>
                ₹ {transaction.amount.toLocaleString()}
              </TableCell>

              <TableCell>
                <Chip
  label={transaction.message ?? "Success"}
  color="success"
/>
              </TableCell>

              <TableCell>
                {transaction.remarks}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}