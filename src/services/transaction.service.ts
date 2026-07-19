import api from "./api";
import type {
  Transaction,
  DepositRequest,
  WithdrawRequest,
  TransferRequest,
} from "../types/transaction";

/**
 * Deposit Money
 */
export const deposit = async (
  data: DepositRequest
): Promise<Transaction> => {
  const response = await api.post("/transactions/deposit", data);
  return response.data;
};

/**
 * Withdraw Money
 */
export const withdraw = async (
  data: WithdrawRequest
): Promise<Transaction> => {
  const response = await api.post("/transactions/withdraw", data);
  return response.data;
};

/**
 * Transfer Money
 */
export const transferMoney = async (
  data: TransferRequest
): Promise<Transaction> => {
  const response = await api.post("/transactions/transfer", data);
  return response.data;
};

/**
 * Transaction History
 */
export const getTransactionHistory = async (
  accountNumber: string
): Promise<Transaction[]> => {
  const response = await api.get(
    `/transactions/history/${accountNumber}`
  );
  return response.data;
};