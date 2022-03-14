import { ThunkAction } from "redux-thunk";
import { usersAPI } from "../api/api";
import { PhotosType } from "./profileReducer";
import { AppDispatch, RootState } from "./redux-store";

const TOGGLE_FOLLOW = "my-react/users/toggleFollow";
const SHOW_MORE = "my-react/users/showMore";
const SET_USERS = "my-react/users/setUsers";
const SET_CURRENT_PAGE = "my-react/users/setCurrentPage";
const SET_PAGE_SIZE = "my-react/users/setPageSize";
const TOGGLE_DISABLE_FOLLOW_BUTTON = "my-react/users/toggleDisableFollowButton";
const SET_IN_PROGRESS = "my-react/users/setUsersAreFetching";
//===================== INITIAL STATE ============================

export type UserType = {
  id: number;
  name: string;
  followed: boolean;
  avatar: string;
  status: string;
  photos: PhotosType;
};

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  pagesCount: 1,
  isFetching: false,
  disabledFollowButtonList: [] as Array<number>,
};

type InitialStateType = typeof initialState;
//===================== REDUCER ============================

type UserAction =
  | ToggleFollowType
  | ShowMoreType
  | SetUsersType
  | SetCurrentPageType
  | SetPageSizeACType
  | SetUsersAreFetchingType
  | ToggleFollowButtonType;

export default function usersReducer(
  state = initialState,
  action: UserAction
): InitialStateType {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload) {
            return { ...user, followed: user.followed ? false : true };
          }
          return user;
        }),
      };

    case SET_USERS:
      console.log(action.payload);

      const newUsers = action.payload.items.map((user: UserType) => ({
        id: user.id,
        name: user.name,
        followed: user.followed,
        avatar: user.photos.large || "img/ava.jpg",
        status: user.status,
        photos: { large: "", small: "" },
      }));
      return {
        ...state,
        users: [...newUsers],
        totalUsersCount: action.payload.totalCount,
      };

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: +action.payload };

    case SET_PAGE_SIZE:
      return { ...state, pageSize: +action.payload };

    case SET_IN_PROGRESS:
      return { ...state, isFetching: action.payload };

    case TOGGLE_DISABLE_FOLLOW_BUTTON:
      const newVal = state.disabledFollowButtonList.includes(action.payload)
        ? state.disabledFollowButtonList.filter((id) => id !== action.payload)
        : [...state.disabledFollowButtonList, action.payload];
      return {
        ...state,
        disabledFollowButtonList: newVal,
      };

    default:
      return state;
  }
}

//===================== ACTION CREATORS ============================

type ToggleFollowType = {
  type: typeof TOGGLE_FOLLOW;
  payload: number;
};
export function toggleFollow(userId: number): ToggleFollowType {
  return { type: TOGGLE_FOLLOW, payload: userId };
}

type ShowMoreType = { type: typeof SHOW_MORE };
export function showMore(): ShowMoreType {
  return { type: SHOW_MORE };
}

export type UsersResponseType = {
  error: null | number;
  items: Array<UserType>;
  totalCount: number;
};
type SetUsersType = {
  type: typeof SET_USERS;
  payload: UsersResponseType;
};
export function setUsers(data: UsersResponseType): SetUsersType {
  return { type: SET_USERS, payload: data };
}

type SetCurrentPageType = {
  type: typeof SET_CURRENT_PAGE;
  payload: number;
};
export function setCurrentPage(currentPage: number): SetCurrentPageType {
  return { type: SET_CURRENT_PAGE, payload: currentPage };
}

type SetPageSizeACType = {
  type: typeof SET_PAGE_SIZE;
  payload: number;
};
export function setPageSizeAC(pageSize: number): SetPageSizeACType {
  return { type: SET_PAGE_SIZE, payload: pageSize };
}

type SetUsersAreFetchingType = {
  type: typeof SET_IN_PROGRESS;
  payload: boolean;
};
export function setUsersAreFetching(
  isFetching: boolean
): SetUsersAreFetchingType {
  return { type: SET_IN_PROGRESS, payload: isFetching };
}

type ToggleFollowButtonType = {
  type: typeof TOGGLE_DISABLE_FOLLOW_BUTTON;
  payload: number;
};
export function toggleFollowButton(userId: number): ToggleFollowButtonType {
  return {
    type: TOGGLE_DISABLE_FOLLOW_BUTTON,
    payload: userId,
  };
}
//===================== THUNK CREATORS ============================
export function getUsersThunkCreator(currentPage: number, pageSize: number) {
  return (dispatch: AppDispatch) => {
    dispatch(setUsersAreFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then((response) => {
      console.log(response);

      dispatch(setUsers(response.data));
      dispatch(setUsersAreFetching(false));
    });
  };
}

export type SubscriptionActionResponse = {
  data: {
    data: Object;
    fieldErrors: Array<any>;
    messages: Array<string>;
    resultCode: number;
  };
};

export function toggleFollowThunkCreator(
  userId: number
): ThunkAction<Promise<void>, RootState, unknown, UserAction> {
  return async (dispatch, getState) => {
    // prettier-ignore
    const { usersPage: { users } } = getState();

    let isUserFollowed = users.filter((u: UserType) => u.id === userId)[0]
      .followed;
    dispatch(toggleFollowButton(userId));

    async function _manageSubscription(
      subscriptionAction: Promise<SubscriptionActionResponse>
    ) {
      const response = await subscriptionAction;
      if (response.data.resultCode === 0) {
        dispatch(toggleFollow(userId));
        dispatch(toggleFollowButton(userId));
      }
    }

    isUserFollowed
      ? _manageSubscription(usersAPI.unfollowUser(userId))
      : _manageSubscription(usersAPI.followUser(userId));
  };
}
