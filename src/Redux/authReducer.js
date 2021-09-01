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
