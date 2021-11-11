import { createSelector } from "reselect";

export const getPosts = (state) => {
  return state.profilePage.posts;
};
export const getPostsReselector = createSelector([getPosts], (posts) => {
  return posts.filter((el) => true); // здесь идет некая обработка массива
});

export const getProfileData = (state) => {
  return state.profilePage.profileData;
};

export const getIsAuthed = (state) => {
  return state.auth.authorized;
};

export const getStatusText = (state) => {
  return state.profilePage.statusText; //?
};

export const getAuthorizedUserId = (state) => {
  return state.auth.id;
};
