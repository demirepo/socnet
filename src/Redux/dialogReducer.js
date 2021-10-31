const POST_MESSAGE = "postMessage";

//===================== INITIAL STATE ============================

const initialState = {
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
};

//===================== REDUCER ============================

export default function dialogReducer(state = initialState, action) {
  switch (action.type) {
    //======================================
    case POST_MESSAGE:
      const mess = state.messages.userId1;

      const newMessage = {
        id: mess[mess.length - 1].id + 1, // incrementing last post id and using it as new post id
        author: "me",
        text: action.dialogInput,
        time: new Date().toLocaleTimeString(),
      };
      return {
        ...state,
        messages: {
          ...state.messages,
          userId1: [...state.messages.userId1, newMessage],
        },
        dialogInputText: "",
      };
    //======================================

    default:
      return state;
  }
}
//===================== ACTION CREATORS ============================

export function postMessageActionCreator(dialogInput) {
  return { type: POST_MESSAGE, dialogInput };
}
