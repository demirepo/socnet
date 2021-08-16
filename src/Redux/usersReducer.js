const TOGGLE_FOLLOWED = "toggleFollowed";
const SHOW_MORE = "showMore";
const SET_USERS = "setUsers";
const SET_CURRENT_PAGE = "setCurrentPage";
const SET_PAGE_SIZE = "setPageSize";
//===================== INITIAL STATE ============================

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 5,
  currentPage: 1,
  pagesCount: 1,
};
//===================== REDUCER ============================

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FOLLOWED:
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
      const newUsers = action.users.map((user) => ({
        id: user.cell,
        name: user.name.first + " " + user.name.last,
        location: { city: user.location.city, country: user.location.country },
        followed: false,
        avatar: user.picture.large,
        age: user.dob.age,
        status: user.email,
      }));

      return {
        ...state,
        users: newUsers && [...newUsers],
        totalUsersCount: newUsers && newUsers.length,
      };

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: +action.currentPage };

    case SET_PAGE_SIZE:
      return { ...state, pageSize: +action.pageSize };

    default:
      return state;
  }
}

//===================== ACTION CREATORS ============================

export function toggleFollowAC(userId) {
  return { type: TOGGLE_FOLLOWED, userId }; // значение userId присваивается автоматически называемому ключу userId
}
export function showMoreAC() {
  return { type: SHOW_MORE };
}
export function setUsersAC(users) {
  return { type: SET_USERS, users: users };
}
export function setCurrentPageAC(currentPage) {
  return { type: SET_CURRENT_PAGE, currentPage: currentPage };
}
export function setPageSizeAC(pageSize) {
  return { type: SET_PAGE_SIZE, pageSize: pageSize };
}
