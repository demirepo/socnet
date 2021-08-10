const store = {
  _state: {
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
  },

  _callSubscriber() {
    console.log("заглушка, подменяемая на функцию-колбек observer");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer; // substituting mock function by callback
  },

  dispatch(action) {
    switch (action.type) {
      case "addPost":
        const posts = this._state.profilePage.posts;

        const newPost = {
          id: posts[posts.length - 1].id + 1, // incrementing last post id and using it as new post id
          text: this._state.profilePage.input,
          likes: 0,
        };
        posts.push(newPost);
        this._state.profilePage.input = "";
        this._callSubscriber(this._state); // calling renderAll function
        break;

      case "updateState":
        this._state.profilePage.input = action.input;
        this._callSubscriber(this._state);
        break;

      default:
        break;
    }
  },
};

export default store;
