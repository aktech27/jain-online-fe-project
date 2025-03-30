import { DEFAULT_AUTH_STATE } from '..';
import { AuthContextAction, AuthContextState, AuthContextTypes } from '../../types';

export default function AuthReducer(state: AuthContextState, action: AuthContextAction) {
  switch (action.type) {
    case AuthContextTypes.LOGIN:
      console.log(action.payload);
      return {
        ...state,
        user: action.payload?.user,
        isLoggedIn: true,
      };
    case AuthContextTypes.REGISTER:
      return state;
    case AuthContextTypes.LOGOUT:
      return {
        ...state,
        ...DEFAULT_AUTH_STATE,
      };
    default:
      return state;
  }
}
