import produce from "immer";
import { AuthActions, AuthAuctionTypes } from "../actions";

export interface IAuthState {
  isAuthorized: boolean;
  currentUser: any;
}

const authInitialState: IAuthState = {
  isAuthorized: false,
  currentUser: undefined
};

export const authReducer = produce((draft: IAuthState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case AuthActions.setIsAuthorized: {
      draft.isAuthorized = payload.isAuthorized;
      break;
    }

    case AuthActions.setCurrentUser: {
      draft.currentUser = payload.user;
      break;
    }
    default:
      return draft;
  }
}, authInitialState);
