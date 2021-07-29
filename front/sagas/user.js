import axios from "axios";
import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";

// function loginAPI(data) {
//   return axios.post("/api/logout", data);
// }

function* login(action) {
  try {
    // const result = yield call(loginAPI)
    yield delay(1000);
    yield put({
      type: "LOG_IN_SUCCESS",
      data: action.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: "LOG_IN_FAILURE",
    });
  }
}

// function logoutAPI() {
//   return axios.post("/api/logout");
// }

function* logout() {
  try {
    yield delay(1000);
    yield put({
      type: "LOG_OUT_SUCCESS",
    });
  } catch (error) {
    yield put({
      type: "LOG_OUT_FAILURE",
    });
  }
}

function* watchLogin() {
  yield takeLatest("LOG_IN_REQUEST", login);
}
function* watchLogout() {
  yield takeLatest("LOG_OUT_REQUEST", logout);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchLogout)]);
}
