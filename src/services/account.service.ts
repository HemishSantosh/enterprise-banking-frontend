import api from "./api";
import type { CreateAccountRequest } from "../types/createAccount";

const ACCOUNT_URL = "/account";

const accountService = {
  getAccounts: () => api.get(`${ACCOUNT_URL}/my-accounts`),

  createAccount: (data: CreateAccountRequest) =>
    api.post(`${ACCOUNT_URL}/create`, data),
};

export default accountService;