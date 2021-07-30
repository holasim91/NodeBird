import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from './actions';

export const initialState = {
  loginLoading: false,
  loginDone: false,
  loginError: null,
  logoutLoading: false,
  logoutDone: false,
  logoutError: null,
  signupLoading: false,
  signupDone: false,
  signupError: null,
  me: null,
  signUpData: {},
  loginData: {},
};

const dummyUser = (data) => ({
  ...data,
  nickname: '숑이',
  id: 1,
  Posts: [],
  Followings: [],
  Followers: [],
});

/*
export const loginAction = (data) =>{
  return(dispatch, getState) =>{
    const state = getState()
    dispatch(loginRequestAction())
    axios.post(`/api/login`)
    .then((res) =>{
      dispatch(loginSuccessAction(res.data))
    })
    .catch((e) =>{
      dispatch(loginFailureAction(e))
    })
  }
}
썽크는 이것만 가능한데, 딜레이라던가 쓰로틀 디바운스 같은 것을 JS통해 직접 처리해야한다.
클릭을 여러번해도 여러번 요청이 간다.
그러나 사가는 이런 것들을 제공해준다!
*/

export const loginRequestAction = (data) => {
  console.log(data);
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};
export const logoutRequestAction = () => {
  console.log();
  return {
    type: LOG_OUT_REQUEST,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        loginDone: false,
        loginLoading: true,
        loginError: null,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        me: dummyUser(),
        loginLoading: false,
        loginDone: true,
        loginError: null,
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        loginLoading: false,
        loginDone: false,
        loginError: action.error,
      };
    case LOG_OUT_REQUEST:
      return {
        ...state,
        logoutLoading: true,
        logoutDone: false,
        logoutError: null,
      };
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        me: null,
        logoutLoading: false,
        logoutDone: true,
        logoutError: null,
      };
    case LOG_OUT_FAILURE:
      return {
        ...state,
        logoutLoading: true,
        logoutDone: false,
        logoutError: action.error,
      };
    case SIGN_UP_REQUEST:
      return {
        ...state,
        signupLoading: true,
        signupDone: false,
        signupError: null,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signupLoading: false,
        signupDone: true,
        signupError: null,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        signupLoading: true,
        signupDone: false,
        signupError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
