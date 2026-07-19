import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Stack,
} from "@mui/material";

import {
  deposit,
  withdraw,
  transferMoney,
} from "../../services/transaction.service";

interface Props {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function CreateTransactionDialog({
  open,
  onClose,
  onSuccess,
}: Props) {
  const [transactionType, setTransactionType] =
    useState("DEPOSIT");

  const [fromAccount, setFromAccount] = useState("");
  const [toAccount, setToAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [remarks, setRemarks] = useState("");

  const resetForm = () => {
    setTransactionType("DEPOSIT");
    setFromAccount("");
    setToAccount("");
    setAmount("");
    setRemarks("");
  };

  const handleSubmit = async () => {
    try {
      switch (transactionType) {
        case "DEPOSIT":
          await deposit({
            accountNumber: toAccount,
            amount: Number(amount),
            remarks,
          });
          break;

        case "WITHDRAW":
          await withdraw({
            accountNumber: fromAccount,
            amount: Number(amount),
            remarks,
          });
          break;

        case "TRANSFER":
          await transferMoney({
            fromAccount,
            toAccount,
            amount: Number(amount),
            remarks,
          });
          break;

        default:
          return;
      }

      onSuccess();
      onClose();
      resetForm();
    } catch (error) {
      console.error(error);
      alert("Transaction Failed");
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>
        New Transaction
      </DialogTitle>

      <DialogContent>
        <Stack spacing={2} mt={2}>
          <TextField
            select
            label="Transaction Type"
            value={transactionType}
            onChange={(e) =>
              setTransactionType(e.target.value)
            }
          >
            <MenuItem value="DEPOSIT">
              Deposit
            </MenuItem>

            <MenuItem value="WITHDRAW">
              Withdraw
            </MenuItem>

            <MenuItem value="TRANSFER">
              Transfer
            </MenuItem>
          </TextField>

          {(transactionType === "WITHDRAW" ||
            transactionType === "TRANSFER") && (
            <TextField
              label="From Account Number"
              value={fromAccount}
              onChange={(e) =>
                setFromAccount(e.target.value)
              }
            />
          )}

          {(transactionType === "DEPOSIT" ||
            transactionType === "TRANSFER") && (
            <TextField
              label="To Account Number"
              value={toAccount}
              onChange={(e) =>
                setToAccount(e.target.value)
              }
            />
          )}

          <TextField
            label="Amount"
            type="number"
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value)
            }
          />

          <TextField
            label="Remarks"
            multiline
            rows={3}
            value={remarks}
            onChange={(e) =>
              setRemarks(e.target.value)
            }
          />
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}