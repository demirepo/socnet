import { authMeThunkCreator } from "./authReducer";
const SET_IS_INITIALIZED = "my-react/app/setIsInitialized";

//===================== INITIAL STATE ============================

const initialState = {
  isInitialized: false,
};

//===================== REDUCER ============================

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    //======================================
    case SET_IS_INITIALIZED:
      return { ...state, isInitialized: true };

    default:
      return state;
  }
}
//===================== ACTION CREATORS ============================

export function setIsInitialized() {
  return {
    type: SET_IS_INITIALIZED,
  };
}

//============================THUNKS=====================================

export function initializeApp() {
  return async (dispatch) => {
    await dispatch(authMeThunkCreator());
    await dispatch(setIsInitialized());
  };
}
