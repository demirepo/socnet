const UPDATE_PROFILE_STATE = "updateProfileState";
const UPDATE_DIALOG_STATE = "updateDialogState";
const ADD_POST = "addPost";
const POST_MESSAGE = "postMessage";

//===================== ACTIONS ============================
export function updateProfileStateActionCreator(text) {
  return { type: UPDATE_PROFILE_STATE, profileInputText: text };
}

export function updateDialogStateActionCreator(text) {
  return { type: UPDATE_DIALOG_STATE, dialogInputText: text };
}

export function addPostActionCreator() {
  return { type: ADD_POST };
}

export function postMessageActionCreator(message) {
  return { type: POST_MESSAGE, dialogInputText: message };
}

//===================== STORE ============================
const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, text: "какой-то текст поста №1", likes: 10 },
        { id: 2, text: "какой-то текст поста №2", likes: 44 },
        { id: 3, text: "какой-то текст поста №3", likes: 5 },
      ],
      profileInputText: "",
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
      dialogInputText: "",
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
          text: this._state.profilePage.profileInputText,
          likes: 0,
        };
        posts.push(newPost);
        this._state.profilePage.profileInputText = "";
        this._callSubscriber(this._state); // calling renderAll function
        break;

      case "postMessage":
        const messages = this._state.messagesPage.dialogHistory.userId1;

        const newMessage = {
          id: messages[messages.length - 1].id + 1, // incrementing last post id and using it as new post id
          author: "me",
          text: this._state.messagesPage.dialogInputText,
          time: new Date().toLocaleTimeString(),
        };
        messages.push(newMessage);
        this._state.messagesPage.dialogInputText = "";
        this._callSubscriber(this._state); // calling renderAll function
        break;

      case "updateProfileState":
        this._state.profilePage.profileInputText = action.profileInputText;
        this._callSubscriber(this._state);
        break;

      case "updateDialogState":
        this._state.messagesPage.dialogInputText = action.dialogInputText;
        this._callSubscriber(this._state);
        break;

      default:
        break;
    }
  },
};

export default store;
