export const initialState = {
  isLoggedIn: false,
  isLoggingIn: false,
  isLoggingOut: false,
  me: null,
  signUpData: {},
  loginData: {},
};

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
    type: "LOG_IN_REQUEST",
    data,
  };
};
export const logoutRequestAction = () => {
  console.log();
  return {
    type: "LOG_OUT_REQUEST",
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN_REQUEST":
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: true,
      };
    case "LOG_IN_SUCCESS":
      return {
        ...state,
        me: { ...action.data, nickname: "숑이" },
        isLoggedIn: true,
        isLoggingIn: false,
      };
    case "LOG_IN_FAILURE":
      return {
        ...state,
        isLogging: false,
        isLoggingIn: false,
      };
    case "LOG_OUT_REQUEST":
      return {
        ...state,
        ...state.user,
        me: null,
        isLoggedIn: true,
        isLoggingOut: false,
      };
    case "LOG_OUT_SUCCESS":
      return {
        ...state,
        ...state.user,
        me: null,
        isLoggedIn: false,
        isLoggingOut: false,
      };
    case "LOG_OUT_FAILURE":
      return {
        ...state,
        ...state.user,
        me: null,
        isLoggedIn: false,
        isLoggingOut: true,
      };
    default:
      return state;
  }
};

export default reducer;
