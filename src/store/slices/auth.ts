import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Admin } from "../../entities/admin";
import { Auth } from "../../entities/auth";
import { RootState } from "..";

export interface AuthState {
  auth: Auth | null;
  admin: Admin | null;
}

const getAuthFromLocalStorage = (): Auth | null => {
  const auth = localStorage.getItem("auth");

  if (!auth) {
    return null;
  }

  return JSON.parse(auth);
};

const getAdminFromLocalStorage = (): Admin | null => {
  const admin = localStorage.getItem("admin");

  if (!admin) {
    return null;
  }

  return JSON.parse(admin);
};

const initialState: AuthState = {
  auth: getAuthFromLocalStorage(),
  admin: getAdminFromLocalStorage(),
};

const setAuthIntoLocalStorage = (auth: Auth) => {
  localStorage.setItem("auth", JSON.stringify(auth));
};

const setAdminIntoLocalStorage = (admin: Admin) => {
  localStorage.setItem("admin", JSON.stringify(admin));
};

const removeAuthFromLocalStorage = () => {
  localStorage.removeItem("auth");
};

const removeAdminFromLocalStorage = () => {
  localStorage.removeItem("admin");
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<Auth>) => {
      state.auth = action.payload;

      setAuthIntoLocalStorage(action.payload);
    },
    setAdmin: (state, action: PayloadAction<Admin>) => {
      state.admin = action.payload;

      setAdminIntoLocalStorage(action.payload);
    },
    unsetAuth: (state) => {
      state.auth = null;

      removeAuthFromLocalStorage();
    },
    unsetAdmin: (state) => {
      state.admin = null;

      removeAdminFromLocalStorage();
    },
  },
});

export const { setAuth, setAdmin, unsetAuth, unsetAdmin } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth.auth;
export const selectAdmin = (state: RootState) => state.auth.admin;

export default authSlice.reducer;
