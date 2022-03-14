import { authAPI, ResultCodes } from "../api/api";
import { AppDispatch } from "./redux-store";
const SET_USER_AUTH_DATA = "my-react/auth/setUserAuthData";
const SET_AUTH_IN_PROGRESS = "my-react/auth/setAuthInProgress";
const SET_CAPTCHA = "my-react/auth/setCaptcha";

//===================== INITIAL STATE ============================

type InitialStateType = {
  id: number | null;
  login: string | null;
  email: string | null;
  isAuthorized: boolean;
  isFetching: boolean;
  captureUrl: string | null;
};

type AuthAction = SetUserAuthDataType | SetAuthInProgressType | SetCaptchaType;

const initialState: InitialStateType = {
  id: null,
  login: null,
  email: null,
  isAuthorized: false,
  isFetching: false,
  captureUrl: null,
};

//===================== REDUCER ============================

export default function authReducer(
  state = initialState,
  action: AuthAction
): InitialStateType {
  switch (action.type) {
    //======================================
    case SET_USER_AUTH_DATA:
      return { ...state, ...action.payload };

    case SET_AUTH_IN_PROGRESS:
      return { ...state, isFetching: action.payload };

    case SET_CAPTCHA:
      return { ...state, captureUrl: action.payload };

    default:
      return state;
  }
}
//===================== ACTION CREATORS ============================

type SetUserAuthDataPayloadType = {
  id: number | null;
  login: string | null;
  email: string | null;
  isAuthorized: boolean;
};

type SetUserAuthDataType = {
  type: typeof SET_USER_AUTH_DATA;
  payload: SetUserAuthDataPayloadType;
};

export function setUserAuthData(
  id: number | null,
  login: string | null,
  email: string | null,
  isAuthorized: boolean
): SetUserAuthDataType {
  return {
    type: SET_USER_AUTH_DATA,
    payload: { id, login, email, isAuthorized },
  };
}

type SetAuthInProgressType = {
  type: typeof SET_AUTH_IN_PROGRESS;
  payload: boolean;
};

export function setAuthInProgress(isFetching: boolean): SetAuthInProgressType {
  return {
    type: SET_AUTH_IN_PROGRESS,
    payload: isFetching,
  };
}

type SetCaptchaType = {
  type: typeof SET_CAPTCHA;
  payload: string;
};

export function setCaptcha(captcha: string): SetCaptchaType {
  return {
    type: SET_CAPTCHA,
    payload: captcha,
  };
}

// type AuthMeThunkCreatorType = ThunkAction<
//   Promise<any>,
//   RootState,
//   unknown,
//   AuthAction
// >;
//============================THUNKS=====================================

export function authMeThunkCreator(): any {
  return async (dispatch: AppDispatch) => {
    return await authAPI.authMe().then((response) => {
      if (response.status !== 200) console.log("Server error", response.status);
      if (response.data.resultCode === ResultCodes.Success) {
        const { id, login, email } = response.data.data;
        const isAuthorized = true;
        dispatch(setUserAuthData(id, login, email, isAuthorized));
      }
    });
  };
}

export type Credentials = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
};

export function loginThunk(credentials: Credentials) {
  return async (dispatch: AppDispatch) => {
    const response = await authAPI.login(credentials);
    if (response.data.resultCode === 0) {
      await dispatch(authMeThunkCreator());
      console.log("Login successful");
    } else {
      console.log(response.data.messages);
    }
  };
}

export function logoutThunk() {
  return async (dispatch: AppDispatch) => {
    const response = await authAPI.logout();
    if (response.data.resultCode === 0) {
      dispatch(setUserAuthData(null, null, null, false));
      console.log("You have logged out");
    } else {
      console.log(response.data.messages);
    }
  };
}

export function getCaptcha() {
  return async (dispatch: AppDispatch) => {
    const response = await authAPI.getCaptcha();
    dispatch(setCaptcha(response.data.url));
  };
}
