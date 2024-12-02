import React, { createContext, useContext, useState, ReactNode } from 'react';
// import * as SecureStore from 'expo-secure-store';
import { loginUser } from '../services/user';


interface User {
    id: string,
    username: string,
    nickName: string,
    email: string,
    avatar: string,
  }
// Define context type
interface AuthContextType {
  isAuthenticated: boolean;
  currentUser: User | null;
  login: (token: string, userData: any) => void;
  logout: () => void;
}




// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// AuthProvider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Login function
  const login = async (token: string, userData: any) => {
    
    // await SecureStore.setItemAsync('jwt_token', token);
    setIsAuthenticated(true);
    setCurrentUser(userData);
  };

  // Logout function
  const logout = async () => {
    // await SecureStore.deleteItemAsync('jwt_token');
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
