import { authAPI } from "../api/api";
const SET_USER_AUTH_DATA = "setUserAuthData";
const SET_AUTH_IN_PROGRESS = "setAuthInProgress";

//===================== INITIAL STATE ============================

const initialState = {
  id: null,
  login: null,
  email: null,
  authorized: false,
  inProgress: false,
};

//===================== REDUCER ============================

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    //======================================
    case SET_USER_AUTH_DATA:
      return { ...state, ...action.authData };

    case SET_AUTH_IN_PROGRESS:
      return { ...state, inProgress: action.inProgress };

    default:
      return state;
  }
}
//===================== ACTION CREATORS ============================

export function setUserAuthData(id, login, email, authorized) {
  return {
    type: SET_USER_AUTH_DATA,
    authData: { id, login, email, authorized },
  };
}

export function setAuthInProgress(inProgress) {
  return {
    type: SET_AUTH_IN_PROGRESS,
    inProgress,
  };
}

export function authMeThunkCreator() {
  return (dispatch) => {
    authAPI.authMe().then((response) => {
      if (response.status === 200) {
        if (response.data.resultCode === 0) {
          let { id, login, email } = response.data.data;
          let authorized = true;
          dispatch(setUserAuthData(id, login, email, authorized));
        }
      } else {
        console.log("Ошибка сервера:", response.status);
      }
    });
  };
}

export function loginThunk(credentials) {
  return (dispatch) => {
    authAPI.login(credentials).then((response) => {
      if (response.data.resultCode === 0) {
        console.log("Логин прошел удачно");
      } else {
        console.log(response.data.messages);
      }
    });
  };
}
