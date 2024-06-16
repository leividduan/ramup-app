import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useCallback, useState } from 'react';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [signedIn, setSignedIn] = useState(async () => {
    const storedAccessToken = await AsyncStorage.getItem('ramup-token');

    return !!storedAccessToken;
  });

  const signin = useCallback(async (accessToken) => {
    await AsyncStorage.setItem('ramup-token', accessToken);
    setSignedIn(true);
    }, []);
    
    const signout = useCallback(async () => {
    await AsyncStorage.removeItem('ramup-token');
    setSignedIn(false);
  }, []);

  return (
    <AuthContext.Provider value={{
      signedIn: signedIn,
      signin,
      signout
    }}>
      {children}
    </AuthContext.Provider>
  );
}
