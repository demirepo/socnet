export const UPDATE_PROFILE_STATE = "updateProfileState";
export const ADD_POST = "addPost";

//===================== INITIAL STATE ============================

const initialState = {
  posts: [
    { id: 1, text: "какой-то текст поста №1", likes: 10 },
    { id: 2, text: "какой-то текст поста №2", likes: 44 },
    { id: 3, text: "какой-то текст поста №3", likes: 5 },
  ],
  profileInputText: "",
};
//===================== REDUCER ============================

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      const posts = state.posts;

      const newPost = {
        id: posts[posts.length - 1].id + 1, // incrementing last post id and using it as new post id
        text: state.profileInputText,
        likes: 0,
      };
      posts.push(newPost);
      state.profileInputText = "";
      break;

    case UPDATE_PROFILE_STATE:
      state.profileInputText = action.profileInputText;
      break;

    default:
      break;
  }
  return state;
}

//===================== ACTION CREATORS ============================

export function updateProfileStateActionCreator(text) {
  return { type: UPDATE_PROFILE_STATE, profileInputText: text };
}

export function addPostActionCreator() {
  return { type: ADD_POST };
}
