import { renderAll } from "./../render";

//============ state ============

export const state = {
  profilePage: {
    posts: [
      { id: 1, text: "какой-то текст поста №1", likes: 10 },
      { id: 2, text: "какой-то текст поста №2", likes: 44 },
      { id: 3, text: "какой-то текст поста №3", likes: 5 },
    ],
    input: "",
  },
  messagesPage: {
    dialogs: [
      { id: 1, name: "Маяковский", avatarPath: "/img/1.jpg" },
      { id: 2, name: "Пушкин", avatarPath: "/img/2.jpg" },
      { id: 3, name: "Есенин", avatarPath: "/img/3.jpg" },
    ],
    messages: [
      { id: 2, text: "Каг дела?" },
      {
        id: 1,
        text: "Дым табачный воздух выел, комната - глава в крученыховском аде. Вспомни - за этим окном впервые руки твои, исступленный, гладил",
      },
      { id: 3, text: "Ой все!" },
    ],
    dialogHistory: {
      userId1: [
        {
          id: 1,
          author: "me",
          time: 1000,
          text: "Выбегу, в улицу тело брошу я",
        },
        {
          id: 2,
          author: "opponent",
          time: 1001,
          text: "Дикий, обезумлюсь, отчаянием иссечась",
        },
        {
          id: 3,
          author: "me",
          time: 1002,
          text: "Не надо этого, дорогая, хорошая!",
        },
        {
          id: 4,
          author: "opponent",
          time: 1003,
          text: "Дай простимся сейчас!",
        },
      ],
    },
  },
};

//============ addPost ============
export function addPost() {
  const posts = state.profilePage.posts;

  const newPost = {
    id: posts[posts.length - 1].id + 1, // incrementing last post id and using it as new post id
    text: state.profilePage.input,
    likes: 0,
  };

  posts.push(newPost);
  state.profilePage.input = "";
  renderAll(state);
}

//============ updateState ============

export function updateState(input) {
  state.profilePage.input = input;
  renderAll(state);
}
