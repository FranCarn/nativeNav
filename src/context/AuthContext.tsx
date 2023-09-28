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
  changeFavIcon: (icon: string) => void;
}
export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider: FC<Props> = ({children}) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };
  const changeFavIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        changeFavIcon,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
