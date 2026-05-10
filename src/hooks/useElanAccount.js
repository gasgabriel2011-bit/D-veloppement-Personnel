import { useCallback, useState } from "react";

const ACCOUNTS_KEY = "elan.accounts";
const CURRENT_KEY = "elan.currentAccountId";

const canUseStorage = () => typeof window !== "undefined" && window.localStorage;

const normalizeEmail = (email) => email.trim().toLowerCase();

const toPublicAccount = ({ accessCode, ...account }) => account;

function readAccounts() {
  if (!canUseStorage()) return [];

  try {
    const raw = window.localStorage.getItem(ACCOUNTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeAccounts(accounts) {
  if (!canUseStorage()) return;
  window.localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
}

function getInitialAccount() {
  if (!canUseStorage()) return null;

  const id = window.localStorage.getItem(CURRENT_KEY);
  const account = readAccounts().find((item) => item.id === id);
  return account ? toPublicAccount(account) : null;
}

function createId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return `elan_${Date.now()}`;
}

export function useElanAccount() {
  const [account, setAccount] = useState(getInitialAccount);

  const createAccount = useCallback(({ name, email, accessCode }) => {
    const cleanName = name.trim();
    const cleanEmail = normalizeEmail(email);
    const cleanCode = accessCode.trim();

    if (!cleanName || !cleanEmail || cleanCode.length < 4) {
      throw new Error("Ajoute ton prénom, ton email et un code d'au moins 4 caractères.");
    }

    const accounts = readAccounts();
    if (accounts.some((item) => item.email === cleanEmail)) {
      throw new Error("Un compte Élan existe déjà avec cet email.");
    }

    const nextAccount = {
      id: createId(),
      name: cleanName,
      email: cleanEmail,
      accessCode: cleanCode,
      createdAt: new Date().toISOString(),
    };

    writeAccounts([...accounts, nextAccount]);
    window.localStorage.setItem(CURRENT_KEY, nextAccount.id);
    setAccount(toPublicAccount(nextAccount));
  }, []);

  const login = useCallback(({ email, accessCode }) => {
    const cleanEmail = normalizeEmail(email);
    const cleanCode = accessCode.trim();
    const found = readAccounts().find(
      (item) => item.email === cleanEmail && item.accessCode === cleanCode
    );

    if (!found) {
      throw new Error("Compte introuvable ou code incorrect.");
    }

    window.localStorage.setItem(CURRENT_KEY, found.id);
    setAccount(toPublicAccount(found));
  }, []);

  const logout = useCallback(() => {
    if (canUseStorage()) {
      window.localStorage.removeItem(CURRENT_KEY);
    }
    setAccount(null);
  }, []);

  return {
    account,
    isAuthenticated: Boolean(account),
    createAccount,
    login,
    logout,
  };
}
