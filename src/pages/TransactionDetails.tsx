import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  Button,
  Divider,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DownloadIcon from "@mui/icons-material/Download";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

import type { Transaction } from "../types/transaction";
import { getTransactionByReference } from "../services/transactionService";
import { generateReceipt } from "../utils/generateReceipt";

export default function TransactionDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [transaction, setTransaction] =
    useState<Transaction | null>(null);

  useEffect(() => {
    if (!id) return;

    getTransactionByReference(id)
      .then(setTransaction)
      .catch(console.error);
  }, [id]);

  return (
    <Box>

      {/* Back Button */}

      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate("/transactions")}
        sx={{ mb: 3 }}
      >
        Back to Transactions
      </Button>

      <Card elevation={4}>
        <CardContent>

          {/* Header */}

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            mb={3}
          >
            <Box>
              <Typography
                variant="h4"
                fontWeight={700}
              >
                Transaction Details
              </Typography>

              <Typography color="text.secondary">
                View complete transaction information
              </Typography>
            </Box>

            <Chip
              label={transaction?.message ?? "SUCCESS"}
              color="success"
              sx={{
                fontWeight: 700,
                px: 2,
                mt: { xs: 2, md: 0 },
              }}
            />
          </Box>

          <Divider sx={{ mb: 3 }} />

          {/* Information Cards */}

          <Grid container spacing={3}>

            <Grid size={{ xs: 12, md: 6 }}>
              <Card variant="outlined">
                <CardContent>
                  <Typography color="text.secondary">
                    Reference Number
                  </Typography>

                  <Typography
                    variant="h6"
                    fontWeight={600}
                  >
                    {transaction?.referenceNumber ?? "-"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Card variant="outlined">
                <CardContent>
                  <Typography color="text.secondary">
                    Transaction Type
                  </Typography>

                  <Typography
                    variant="h6"
                    fontWeight={600}
                  >
                    {transaction?.transactionType ?? "-"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Card variant="outlined">
                <CardContent>
                  <Typography color="text.secondary">
                    Amount
                  </Typography>

                  <Typography
                    variant="h4"
                    fontWeight={700}
                    color="success.main"
                  >
                    ₹
                    {transaction?.amount?.toLocaleString() ??
                      "0"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Card variant="outlined">
                <CardContent>
                  <Typography color="text.secondary">
                    Balance After Transaction
                  </Typography>

                  <Typography
                    variant="h5"
                    fontWeight={600}
                  >
                    ₹
                    {transaction?.balanceAfterTransaction?.toLocaleString() ??
                      "0"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Card variant="outlined">
                <CardContent>
                  <Typography color="text.secondary">
                    Transaction Date
                  </Typography>

                  <Typography variant="h6">
                    {transaction
                      ? dayjs(
                          transaction.transactionDate
                        ).format(
                          "DD MMM YYYY • hh:mm A"
                        )
                      : "-"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Card variant="outlined">
                <CardContent>
                  <Typography color="text.secondary">
                    Status
                  </Typography>

                  <Typography
                    variant="h6"
                    color="success.main"
                    fontWeight={700}
                  >
                    {transaction?.message ?? "Success"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Card variant="outlined">
                <CardContent>
                  <Typography color="text.secondary">
                    Remarks
                  </Typography>

                  <Typography mt={1}>
                    {transaction?.remarks ||
                      "No remarks available"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

          </Grid>

          {/* Action Buttons */}

          <Box
            mt={4}
            display="flex"
            gap={2}
            flexWrap="wrap"
          >
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              onClick={() => {
                if (transaction) {
                  generateReceipt(transaction);
                }
              }}
            >
              Download Receipt
            </Button>

            <Button
              variant="outlined"
              onClick={() => window.print()}
            >
              Print Receipt
            </Button>
          </Box>

        </CardContent>
      </Card>

    </Box>
  );
}