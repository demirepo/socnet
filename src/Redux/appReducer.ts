// @ts-check
import { ThunkAction } from "redux-thunk";
import { authMeThunkCreator } from "./authReducer";
import { AppDispatch, RootState } from "./redux-store";
const SET_IS_INITIALIZED = "my-react/app/setIsInitialized";

//===================== INITIAL STATE ============================

const initialState = {
  isInitialized: false,
};
type InitialState = typeof initialState;

//===================== REDUCER ============================
type AppAction = SetIsInitializedType;



export default function appReducer(
  state: InitialState = initialState,
  action: AppAction
) {
  switch (action.type) {
    //======================================
    case SET_IS_INITIALIZED:
      return { ...state, isInitialized: true };

    default:
      return state;
  }
}
//===================== ACTION CREATORS ============================

type SetIsInitializedType = { type: typeof SET_IS_INITIALIZED };

export function setIsInitialized(): SetIsInitializedType {
  return {
    type: SET_IS_INITIALIZED,
  };
}

//============================THUNKS=====================================

export function initializeApp(): ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  AppAction
> {
  return async (dispatch: AppDispatch) => {
    dispatch(authMeThunkCreator());
    dispatch(setIsInitialized());
  };
}
