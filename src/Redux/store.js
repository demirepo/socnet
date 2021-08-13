import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";

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
      messages: {
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

  //===================== REDUCERS ============================

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogReducer(this._state.messagesPage, action);
    this._callSubscriber(this._state); // calling renderAll function
  },
};

export default store;
