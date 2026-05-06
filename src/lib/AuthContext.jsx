import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(false);
  const [authError, setAuthError] = useState(null);
  const [appPublicSettings] = useState({ public_settings: {} });

  const clearStoredAuth = () => {
    if (typeof window === 'undefined') return;

    window.localStorage.removeItem('access_token');
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('app_access_token');
  };

  const checkUserAuth = async () => {
    setIsLoadingAuth(false);
    setIsAuthenticated(false);
    setUser(null);
    return null;
  };

  const checkAppState = async () => {
    setIsLoadingPublicSettings(false);
    setIsLoadingAuth(false);
    setAuthError(null);
    return appPublicSettings;
  };

  const logout = () => {
    clearStoredAuth();
    setUser(null);
    setIsAuthenticated(false);
  };

  const navigateToLogin = () => {
    setAuthError({
      type: 'standalone',
      message: 'Authentication is disabled in this standalone app.'
    });
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      isLoadingAuth,
      isLoadingPublicSettings,
      authError,
      appPublicSettings,
      logout,
      navigateToLogin,
      checkAppState,
      checkUserAuth
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
