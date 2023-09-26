import React, {FC, createContext, useReducer} from 'react';
import {authReducer} from './authReducer';
interface Props {
  children: JSX.Element | JSX.Element[];
}

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

export const authInitialState: AuthState = {
  isLoggedIn: false,
};

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
}
export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider: FC<Props> = ({children}) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);
  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn: () => {},
      }}>
      {children}
    </AuthContext.Provider>
  );
};
