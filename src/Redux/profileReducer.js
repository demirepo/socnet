import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = "addPost";
const SET_PROFILE_DATA = "setProfileData";
const SET_STATUS = "setStatus";

//===================== INITIAL STATE ============================

const initialState = {
  posts: [
    { id: 1, text: "какой-то текст поста №1", likes: 10 },
    { id: 2, text: "какой-то текст поста №2", likes: 44 },
    { id: 3, text: "какой-то текст поста №3", likes: 5 },
  ],
  profileInputText: "",
  profileData: {},
  statusText: "some status",
};
//===================== REDUCER ============================

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: state.posts[state.posts.length - 1].id + 1, // incrementing last post id and using it as new post id
        text: action.message,
        likes: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        profileInputText: "",
      };

    case SET_PROFILE_DATA:
      return { ...state, profileData: action.profileData };

    case SET_STATUS:
      return { ...state, statusText: action.statusText };

    default:
      return state;
  }
}

//===================== ACTION CREATORS ============================

export function addPost(message) {
  return { type: ADD_POST, message };
}

export function setProfileData(profileData) {
  return { type: SET_PROFILE_DATA, profileData };
}

export function setStatus(statusText) {
  return { type: SET_STATUS, statusText };
}

export function setProfileThunkCreator(userId) {
  return (dispatch) => {
    usersAPI.getProfile(userId).then((response) => {
      dispatch(setProfileData(response.data));
    });
  };
}

export function getStatusFromServer(userId) {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
      dispatch(setStatus(response.data));
    });
  };
}

export function updateStatusOnServer(statusText) {
  return (dispatch) => {
    profileAPI.updateStatus(statusText).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(statusText));
      }
    });
  };
}
