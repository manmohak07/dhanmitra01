import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../api';

interface User {
  _id: string;
  email: string;
  name?: string;
  profileCompleted: boolean;
}

interface UserContextType {
  user: User | null;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem('token');
    
    if (token) {
      // Fetch user data
      const fetchUser = async () => {
        try {
          const response = await authAPI.getMe();
          setUser(response.data);
        } catch (error) {
          console.error('Error fetching user:', error);
          localStorage.removeItem('token');
        } finally {
          setLoading(false);
        }
      };
      
      fetchUser();
    } else {
      setLoading(false);
    }
  }, []);

  const signUp = async (email: string, password: string) => {
    try {
      const response = await authAPI.register(email, password);
      localStorage.setItem('token', response.token);
      
      // Fetch user data after registration
      const userData = await authAPI.getMe();
      setUser(userData.data);
    } catch (error) {
      throw error;
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const response = await authAPI.login(email, password);
      localStorage.setItem('token', response.token);
      
      // Fetch user data after login
      const userData = await authAPI.getMe();
      setUser(userData.data);
    } catch (error) {
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await authAPI.logout();
      setUser(null);
    } catch (error) {
      throw error;
    }
  };

  return (
    <UserContext.Provider value={{ user, signUp, signIn, signOut, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};