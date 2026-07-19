import axios from "axios";
import type { Transaction } from "../types/transaction";

const API = "http://localhost:8080/api/transactions";

export const getTransactionByReference = async (
  referenceNumber: string
): Promise<Transaction> => {

  const token = localStorage.getItem("jwtToken");

  const response = await axios.get(
    `${API}/${referenceNumber}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};