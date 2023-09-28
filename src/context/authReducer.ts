import {AuthState} from './';
type AuthAction =
  | {
      type: 'signIn';
    }
  | {type: 'changeFavIcon'; payload: string}
  | {type: 'logout'}
  | {type: 'changeUsername'; payload: string};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-username',
      };
    case 'changeFavIcon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };
    case 'logout':
      return {
        ...state,
        favoriteIcon: undefined,
        isLoggedIn: false,
        username: undefined,
      };
    case 'changeUsername':
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};
