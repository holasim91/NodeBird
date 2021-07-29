import { all, fork } from "redux-saga/effects";
import postSaga from "./post";
import userSaga from "./user";

export default function* rootSaga() {
  yield all([fork(userSaga), fork(postSaga)]);
}

//제너레이터 함수를 쓰면 yield를 사용해서 함수를 중간에 멈출 수 있다.
//이벤트 리스너처럼 특정 이벤트를 실행하고 .next()로 콜백함수를 실행할 수 있다..
//takeEvery는 비동기적으로 사용된다
//takeLatest 마지막으로 일어난 실행한거 -> 프론트만 그렇게 생각함 서버에는 계속 요청이 간다(응답만 취소한다) => 요땐 쓰로틀을 사용
//takeLeading 맨 처음
// 코드가 쥰내 길어짐
