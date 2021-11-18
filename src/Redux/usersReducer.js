import { usersAPI } from "../api/api";

const TOGGLE_FOLLOW = "my-react/users/toggleFollow";
const SHOW_MORE = "my-react/users/showMore";
const SET_USERS = "my-react/users/setUsers";
const SET_CURRENT_PAGE = "my-react/users/setCurrentPage";
const SET_PAGE_SIZE = "my-react/users/setPageSize";
const SET_IN_PROGRESS = "my-react/users/setisFetching";
const TOGGLE_DISABLE_FOLLOW_BUTTON = "my-react/users/toggleDisableFollowButton";
//===================== INITIAL STATE ============================

const initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  pagesCount: 1,
  isFetching: false,
  disabledFollowButtonList: [],
};
//===================== REDUCER ============================

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: user.followed ? false : true };
          }
          return user;
        }),
      };

    case SET_USERS:
      const newUsers = action.data.items.map((user) => ({
        id: user.id,
        name: user.name,
        followed: user.followed,
        avatar: user.photos.large || "/img/ava.jpg",
        status: user.status,
      }));

      return {
        ...state,
        users: [...newUsers],
        totalUsersCount: action.data.totalCount,
      };

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: +action.currentPage };

    case SET_PAGE_SIZE:
      return { ...state, pageSize: +action.pageSize };

    case SET_IN_PROGRESS:
      return { ...state, isFetching: action.isFetching };

    case TOGGLE_DISABLE_FOLLOW_BUTTON:
      const newVal = state.disabledFollowButtonList.includes(action.userId)
        ? state.disabledFollowButtonList.filter((id) => id !== action.userId)
        : [...state.disabledFollowButtonList, action.userId];
      return {
        ...state,
        disabledFollowButtonList: newVal,
      };

    default:
      return state;
  }
}

//===================== ACTION CREATORS ============================

export function toggleFollow(userId) {
  return { type: TOGGLE_FOLLOW, userId };
}
export function showMore() {
  return { type: SHOW_MORE };
}
export function setUsers(data) {
  return { type: SET_USERS, data };
}
export function setCurrentPage(currentPage) {
  return { type: SET_CURRENT_PAGE, currentPage: currentPage };
}
export function setPageSize(pageSize) {
  return { type: SET_PAGE_SIZE, pageSize };
}
export function setIsFetching(isFetching) {
  return { type: SET_IN_PROGRESS, isFetching };
}
export function toggleDisableFollowButton(userId) {
  return {
    type: TOGGLE_DISABLE_FOLLOW_BUTTON,
    userId,
  };
}
//===================== THUNK CREATORS ============================
export function getUsersThunkCreator(currentPage, pageSize) {
  return (dispatch) => {
    dispatch(setIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then((response) => {
      dispatch(setUsers(response));
      dispatch(setIsFetching(false));
    });
  };
}

export function toggleFollowThunkCreator(userId) {
  return async (dispatch, getState) => {
    const {
      usersPage: { users },
    } = getState();
    let isUserFollowed = users.filter((u) => u.id === userId)[0].followed;
    dispatch(toggleDisableFollowButton(userId)); // disabling button during query

    async function manageSubscription(subscriptionAction) {
      const response = await subscriptionAction;
      if (response.data.resultCode === 0) {
        dispatch(toggleFollow(userId));
        dispatch(toggleDisableFollowButton(userId));
      }
    }
    isUserFollowed
      ? manageSubscription(usersAPI.unfollowUser(userId))
      : manageSubscription(usersAPI.followUser(userId));
  };
}
