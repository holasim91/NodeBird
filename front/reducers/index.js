import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import user from "./user";
import post from "./post";

//리듀서는 함수라 함수들 끼리 합치는건 어려우므로 combieReducers의 도움을 받자.
const rootReducer = combineReducers({
  //SSR을 위해
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return {
          ...state,
          ...action.payload,
        };

      default:
        return state;
    }
  },
  user, //initalState도 알아서 합쳐준다
  post,
});

export default rootReducer;
