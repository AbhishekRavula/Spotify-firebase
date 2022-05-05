export enum AuthAuctionTypes {
  login = "login",
  setCurrentUser = "setCurrentUser",
  setIsAuthorized = "setIsAuthorized"
}

const login = () => ({ type: AuthAuctionTypes.login });
const setCurrentUser = (user: any) => ({ type: AuthAuctionTypes.setCurrentUser, payload: { user } });
const setIsAuthorized = (authorized: boolean) => ({ type: AuthAuctionTypes.setIsAuthorized, payload: { authorized } });

export const AuthActions = {
  login,
  setIsAuthorized,
  setCurrentUser
};
