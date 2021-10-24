import { usersAPI } from "../api/api";

const TOGGLE_FOLLOW = "toggleFollow";
const SHOW_MORE = "showMore";
const SET_USERS = "setUsers";
const SET_CURRENT_PAGE = "setCurrentPage";
const SET_PAGE_SIZE = "setPageSize";
const SET_IN_PROGRESS = "setInProgress";
const TOGGLE_DISABLE_FOLLOW_BUTTON = "toggleDisableFollowButton";
//===================== INITIAL STATE ============================

const initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  pagesCount: 1,
  inProgress: false,
  followButtonIsDisabled: [],
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
      return { ...state, inProgress: action.inProgress };

    case TOGGLE_DISABLE_FOLLOW_BUTTON:
      const newVal = state.followButtonIsDisabled.includes(action.userId)
        ? state.followButtonIsDisabled.filter((id) => id !== action.userId)
        : [...state.followButtonIsDisabled, action.userId];
      return {
        ...state,
        followButtonIsDisabled: newVal,
      };

    default:
      return state;
  }
}

//===================== ACTION CREATORS ============================

export function toggleFollow(userId) {
  return { type: TOGGLE_FOLLOW, userId }; // значение userId присваивается автоматически называемому ключу userId
}
export function showMore() {
  return { type: SHOW_MORE };
}
export function setUsers(data) {
  return { type: SET_USERS, data: data };
}
export function setCurrentPage(currentPage) {
  return { type: SET_CURRENT_PAGE, currentPage: currentPage };
}
export function setPageSize(pageSize) {
  return { type: SET_PAGE_SIZE, pageSize: pageSize };
}
export function setInProgress(inProgress) {
  return { type: SET_IN_PROGRESS, inProgress: inProgress };
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
    dispatch(setInProgress(true));
    usersAPI.getUsers(currentPage, pageSize).then((response) => {
      dispatch(setUsers(response));
      dispatch(setInProgress(false));
    });
  };
}

export function toggleFollowThunkCreator(userId) {
  return (dispatch, getState) => {
    const {
      usersPage: { users },
    } = getState();
    let isUserFollowed = users.filter((u) => u.id === userId)[0].followed;
    dispatch(toggleDisableFollowButton(userId)); // disabling button during query
    if (isUserFollowed) {
      usersAPI.unfollowUser(userId).then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(toggleFollow(userId));
          dispatch(toggleDisableFollowButton(userId));
        }
      });
    } else {
      usersAPI.followUser(userId).then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(toggleFollow(userId));
          dispatch(toggleDisableFollowButton(userId));
        }
      });
    }
  };
}
