export interface Transaction {
  referenceNumber: string;
  transactionType: string;

  fromAccount?: string;
  toAccount?: string;

  amount: number;

  balanceAfterTransaction: number;

  transactionDate: string;

  remarks: string;

  message?: string;
}

export interface DepositRequest {
  accountNumber: string;
  amount: number;
  remarks: string;
}

export interface WithdrawRequest {
  accountNumber: string;
  amount: number;
  remarks: string;
}

export interface TransferRequest {
  fromAccount: string;
  toAccount: string;
  amount: number;
  remarks: string;
}