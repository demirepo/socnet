import { authMeThunkCreator } from "./authReducer";
const SET_INITIALIZED = "setInitialized";

//===================== INITIAL STATE ============================

const initialState = {
  initialized: false,
};

//===================== REDUCER ============================

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    //======================================
    case SET_INITIALIZED:
      return { ...state, initialized: true };

    default:
      return state;
  }
}
//===================== ACTION CREATORS ============================

export function setInitialized() {
  return {
    type: SET_INITIALIZED,
  };
}

//============================THUNKS=====================================

export function initializeApp() {
  return (dispatch) => {
    const promise = dispatch(authMeThunkCreator());
    promise.then(() => {
      dispatch(setInitialized());
    });
  };
}
