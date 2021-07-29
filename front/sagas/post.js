import axios from "axios";
import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";

function addPostAPI(data) {
  return axios.post("/api/post", data);
}

function* addPost(action) {
  try {
    yield delay(1000);
    yield put({
      type: "ADD_POST_SUCCESS",
    });
  } catch (error) {
    yield put({
      type: "ADD_POST_FAILURE",
      data: error.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeLatest("ADD_POST_REQUEST", addPost);
}
export default function* postSaga() {
  yield all([fork(watchAddPost)]);
}
