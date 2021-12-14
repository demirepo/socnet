import { authAPI } from "../api/api";
const SET_USER_AUTH_DATA = "my-react/auth/setUserAuthData";
const SET_AUTH_IN_PROGRESS = "my-react/auth/setAuthInProgress";

//===================== INITIAL STATE ============================

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuthorized: false,
  isFetching: false,
};

//===================== REDUCER ============================

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    //======================================
    case SET_USER_AUTH_DATA:
      return { ...state, ...action.authData };

    case SET_AUTH_IN_PROGRESS:
      return { ...state, isFetching: action.isFetching };

    default:
      return state;
  }
}
//===================== ACTION CREATORS ============================

export function setUserAuthData(id, login, email, isAuthorized) {
  return {
    type: SET_USER_AUTH_DATA,
    authData: { id, login, email, isAuthorized },
  };
}

export function setAuthisFetching(isFetching) {
  return {
    type: SET_AUTH_IN_PROGRESS,
    isFetching,
  };
}

//============================THUNKS=====================================

export function authMeThunkCreator() {
  return (dispatch) => {
    return authAPI.authMe().then((response) => {
      if (response.status !== 200) console.log("Server error", response.status);
      if (response.data.resultCode === 0) {
        const { id, login, email } = response.data.data;
        const isAuthorized = true;
        dispatch(setUserAuthData(id, login, email, isAuthorized));
      }
    });
  };
}

export function loginThunk(credentials) {
  return async (dispatch) => {
    let response = await authAPI.login(credentials);
    if (response.data.resultCode === 0) {
      await dispatch(authMeThunkCreator());
      console.log("Login successful");
    } else {
      console.log(response.data.messages);
    }
  };
}

export function logoutThunk() {
  return async (dispatch) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
      dispatch(setUserAuthData(null, null, null, false));
      console.log("You have logged out");
    } else {
      console.log(response.data.messages);
    }
  };
}
