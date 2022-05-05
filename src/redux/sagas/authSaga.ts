import { call, put, takeLatest, fork } from "@redux-saga/core/effects";
import { AuthActions, AuthAuctionTypes } from "../actions";
import { login } from "../../service/auth";
import { getAuth } from "@firebase/auth";

function* loginSaga() {
  console.log("saga called");
  try {
    const auth = getAuth();
    console.log("auth", auth);
    // yield call(login);
  } catch (error) {
    console.log("login Saga error", error);
  }
}

function* loginListener() {
  yield takeLatest(AuthAuctionTypes.login, loginSaga);
}

export default function* authSaga() {
  yield fork(loginListener);
}
