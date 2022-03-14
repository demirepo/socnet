import { usersAPI, profileAPI } from "../api/api";
import { AppDispatch } from "./redux-store";

const ADD_POST = "my-react/profile/addPost";
const SET_PROFILE_DATA = "my-react/profile/setProfileData";
const SET_STATUS = "my-react/profile/setStatus";
const SET_AVATAR = "my-react/profile/setAvatar";

//===================== INITIAL STATE ============================
export type PhotosType = { small: null | string; large: null | string };
export interface ContactsType {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
}
export type ProfileDataType = {
  aboutMe: null | string;
  lookingForAJob: boolean;
  lookingForAJobDescription: null | string;
  fullName: string;
  userId: number;
  photos: PhotosType;
  contacts: ContactsType;
};
export type PostType = {
  id: number;
  text: string;
  likes: number;
};

const initialState = {
  posts: [
    { id: 1, text: "какой-то текст поста №1", likes: 10 },
    { id: 2, text: "какой-то текст поста №2", likes: 44 },
    { id: 3, text: "какой-то текст поста №3", likes: 5 },
  ] as Array<PostType>,
  profileData: {} as ProfileDataType,
  statusText: "some status",
  profileInputText: "",
};
type InitialStateType = typeof initialState;

//===================== REDUCER ============================

export default function profileReducer(
  state = initialState,
  action: ProfileActions
): InitialStateType {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: state.posts[state.posts.length - 1].id + 1, // incrementing last post id and using it as new post id
        text: action.payload,
        likes: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        profileInputText: "",
      };

    case SET_PROFILE_DATA:
      return { ...state, profileData: action.payload };

    case SET_STATUS:
      return { ...state, statusText: action.payload };

    case SET_AVATAR:
      return {
        ...state,
        profileData: { ...state.profileData, photos: action.payload },
      };

    default:
      return state;
  }
}

//===================== ACTION CREATORS ============================

type PropertyType<T extends { [key: string]: (...arg: any[]) => any }> =
  T extends { [key: string]: infer U } ? U : never;

type ProfileActions = ReturnType<PropertyType<typeof profileActions>>;

export const profileActions = {
  addPost: (message: string) => {
    return { type: ADD_POST, payload: message } as const;
  },

  setProfileData: (profileData: ProfileDataType) => {
    return { type: SET_PROFILE_DATA, payload: profileData } as const;
  },

  setStatus: (statusText: string) => {
    return { type: SET_STATUS, payload: statusText } as const;
  },

  setAvatar: (photos: PhotosType) => {
    return { type: SET_AVATAR, payload: photos } as const;
  },
};

//===================== THUNK CREATORS ============================

export function setProfileThunkCreator(userId: number) {
  return async (dispatch: AppDispatch) => {
    const response = await usersAPI.getProfile(userId);
    dispatch(profileActions.setProfileData(response.data));
  };
}

export function getStatusFromServer(userId: number) {
  return async (dispatch: AppDispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(profileActions.setStatus(response.data));
  };
}

export function updateStatusOnServer(statusText: string) {
  return async (dispatch: AppDispatch) => {
    let response = await profileAPI.updateStatus(statusText);
    response.data.resultCode === 0
      ? dispatch(profileActions.setStatus(statusText))
      : console.log(
          `Error during avatar update: "${response.data.messages[0]}"`
        );
  };
}

export function updateAvatar(file: any) {
  return async (dispatch: AppDispatch) => {
    console.log("thunk");
    let response = await profileAPI.updateAvatar(file);
    response.data.resultCode === 0
      ? dispatch(profileActions.setAvatar(response.data.data.photos))
      : console.log(
          `Error during avatar update: "${response.data.messages[0]}"`
        );
  };
}

export const { addPost } = profileActions;
