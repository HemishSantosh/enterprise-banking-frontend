import { useEffect, useState } from "react";
import {
  Paper,
  Typography,
  TextField,
  Button,
  MenuItem,
  Stack,
  CircularProgress,
} from "@mui/material";
import toast from "react-hot-toast";
import axios from "axios";
import accountService from "../../services/account.service";
import { getBeneficiaries } from "../../services/beneficiary.service";
import { transferMoney } from "../../services/transaction.service";

interface Account {
  accountNumber: string;
}

interface Beneficiary {
  id: number;
  beneficiaryName?: string;
  name?: string;
  accountNumber: string;
}

export default function QuickTransfer() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [beneficiaries, setBeneficiaries] = useState<Beneficiary[]>([]);

  const [fromAccountId, setFromAccountId] = useState("");
  const [toAccountId, setToAccountId] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let ignore = false;

    async function loadData() {
      try {
        const [accountsResponse, beneficiariesData] =
          await Promise.all([
            accountService.getAccounts(),
            getBeneficiaries(),
          ]);

       console.log("Accounts Response:", accountsResponse.data);
console.log("Beneficiaries Response:", beneficiariesData);

if (!ignore) {
  setAccounts(accountsResponse.data);
  setBeneficiaries(beneficiariesData);
}
      } catch (error) {
        console.error(error);
        toast.error("Failed to load accounts");
      }
    }

    loadData();

    return () => {
      ignore = true;
    };
  }, []);

  const handleTransfer = async () => {
  if (!fromAccountId) {
    toast.error("Select From Account");
    return;
  }

  if (!toAccountId) {
    toast.error("Select Beneficiary");
    return;
  }

  if (!amount || Number(amount) <= 0) {
    toast.error("Enter a valid amount");
    return;
  }

  if (!description.trim()) {
    toast.error("Enter Remarks");
    return;
  }

  try {
    setLoading(true);

    const transferData = {
      fromAccount: fromAccountId,
      toAccount: toAccountId,
      amount: Number(amount),
      remarks: description,
    };

    console.log("Transfer Request:", transferData);

    const response = await transferMoney(transferData);

    console.log("Transfer Response:", response);

    toast.success("Transfer Successful");

    setToAccountId("");
    setAmount("");
    setDescription("");

  } catch (error: unknown) {
  console.error("Transfer Error:", error);

  if (axios.isAxiosError(error)) {
    console.log("Backend Error:", error.response?.data);

    toast.error(
      error.response?.data?.message ??
      "Transfer Failed"
    );
  } else {
    toast.error("Transfer Failed");
  }
}
};

  return (
    <Paper
      elevation={4}
      sx={{
        mt: 4,
        p: 4,
        borderRadius: 4,
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        mb={3}
      >
        Quick Money Transfer
      </Typography>

      <Stack spacing={3}>
        <TextField
          select
          label="From Account"
          fullWidth
          value={fromAccountId}
          onChange={(e) =>
            setFromAccountId(e.target.value)
          }
        >
          {accounts.map((account) => (
            <MenuItem
              key={account.accountNumber}
              value={account.accountNumber}
            >
              {account.accountNumber}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="Beneficiary"
          fullWidth
          value={toAccountId}
          onChange={(e) =>
            setToAccountId(e.target.value)
          }
        >
          {beneficiaries.map((beneficiary) => (
            <MenuItem
              key={beneficiary.id}
              value={beneficiary.accountNumber}
            >
              {(beneficiary.beneficiaryName ??
                beneficiary.name ??
                "Beneficiary")}
              {" - "}
              {beneficiary.accountNumber}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Amount"
          type="number"
          fullWidth
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
        />

        <TextField
          label="Description"
          multiline
          rows={3}
          fullWidth
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <Button
          variant="contained"
          size="large"
          disabled={loading}
          onClick={handleTransfer}
        >
          {loading ? (
            <CircularProgress
              size={24}
              color="inherit"
            />
          ) : (
            "Transfer Money"
          )}
        </Button>
      </Stack>
    </Paper>
  );
}