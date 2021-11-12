export const getUsers = (state) => {
  return state.usersPage.users;
};

export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};

export const getPagesCount = (state) => {
  return state.usersPage.pagesCount;
};

export const getisFetching = (state) => {
  return state.usersPage.isFetching;
};

export const getdisabledFollowButtonList = (state) => {
  return state.usersPage.disabledFollowButtonList;
};
