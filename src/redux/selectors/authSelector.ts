import { createSelector } from "reselect";
import { StateType } from "../reducers/rootReducer";

const _getIsAuthorized = (state: StateType) => state.auth.isAuthorized;

export const getIsAuthorized = createSelector([_getIsAuthorized], isAuthorized => isAuthorized);
