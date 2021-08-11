export const UPDATE_DIALOG_STATE = "updateDialogState";
export const POST_MESSAGE = "postMessage";

//===================== INITIAL STATE ============================

const initialState = {
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
};

//===================== REDUCER ============================

export default function dialogReducer(state = initialState, action) {
  switch (action.type) {
    case POST_MESSAGE:
      const messages = state.dialogHistory.userId1;

      const newMessage = {
        id: messages[messages.length - 1].id + 1, // incrementing last post id and using it as new post id
        author: "me",
        text: state.dialogInputText,
        time: new Date().toLocaleTimeString(),
      };
      messages.push(newMessage);
      state.dialogInputText = "";
      break;

    case UPDATE_DIALOG_STATE:
      state.dialogInputText = action.dialogInputText;
      break;

    default:
      break;
  }
  return state;
}
//===================== ACTION CREATORS ============================

export function updateDialogStateActionCreator(text) {
  return { type: UPDATE_DIALOG_STATE, dialogInputText: text };
}

export function postMessageActionCreator() {
  return { type: POST_MESSAGE };
}
