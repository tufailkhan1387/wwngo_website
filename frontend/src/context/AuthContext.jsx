import { createContext, useContext, useMemo, useState } from 'react';
import {
  clearSession,
  getStoredUser,
  isAuthenticated,
  login as apiLogin,
} from '../lib/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => getStoredUser());
  const [authenticated, setAuthenticated] = useState(() => isAuthenticated());

  const value = useMemo(
    () => ({
      user,
      authenticated,
      async login(email, password) {
        const nextUser = await apiLogin(email, password);
        setUser(nextUser);
        setAuthenticated(true);
        return nextUser;
      },
      logout() {
        clearSession();
        setUser(null);
        setAuthenticated(false);
      },
    }),
    [user, authenticated],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
