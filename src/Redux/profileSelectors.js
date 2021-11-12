import { createSelector } from "reselect";

export const getPosts = (state) => {
  return state.profilePage.posts;
};
export const getPostsReselector = createSelector([getPosts], (posts) => {
  return posts.filter((el) => true); // here goes some heavyweight processing
});

export const getProfileData = (state) => {
  return state.profilePage.profileData;
};

export const getStatusText = (state) => {
  return state.profilePage.statusText; //?
};
