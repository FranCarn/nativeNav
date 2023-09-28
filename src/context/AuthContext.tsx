import React, {FC, createContext, useReducer} from 'react';
import {authReducer} from './authReducer';
interface Props {
  children: JSX.Element | JSX.Element[];
}

export interface AuthState {
  favoriteIcon?: string;
  isLoggedIn: boolean;
  username?: string;
}

export const authInitialState: AuthState = {
  isLoggedIn: false,
};

export interface AuthContextProps {
  authState: AuthState;
  changeFavIcon: (icon: string) => void;
  logout: () => void;
  signIn: () => void;
}
export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider: FC<Props> = ({children}) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };
  const logout = () => {
    dispatch({type: 'logout'});
  };
  const changeFavIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        changeFavIcon,
        logout,
        signIn,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
