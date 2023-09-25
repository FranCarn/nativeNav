import React, {FC, createContext} from 'react';
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
  return (
    <AuthContext.Provider
      value={{
        authState: authInitialState,
        signIn: () => {},
      }}>
      {children}
    </AuthContext.Provider>
  );
};
