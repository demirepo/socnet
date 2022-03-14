const POST_MESSAGE = "my-react/dialog/postMessage";

//===================== INITIAL STATE ============================

export type Dialog = {
  id: number;
  name: string;
  avatarPath: string;
};

export type Message = {
  id: number;
  authorId: number;
  time: Date | string;
  text: string;
};

const initialState = {
  dialogs: [
    { id: 1, name: "Маяковский", avatarPath: "img/1.jpg" },
    { id: 2, name: "Пушкин", avatarPath: "img/2.jpg" },
    { id: 3, name: "Есенин", avatarPath: "img/3.jpg" },
  ] as Dialog[],
  messages: [
    {
      id: 1,
      authorId: 0, // authorId = 0 stand for "me", 1+ for opponent
      time: "16:49:20",
      text: "Выбегу, в улицу тело брошу я",
    },
    {
      id: 2,
      authorId: 1,
      time: "17:49:20",
      text: "Дикий, обезумлюсь, отчаянием иссечась",
    },
    {
      id: 3,
      authorId: 0,
      time: "18:49:20",
      text: "Не надо этого, дорогая, хорошая!",
    },
    {
      id: 4,
      authorId: 1,
      time: "19:49:20",
      text: "Дай простимся сейчас!",
    },
  ] as Message[],
  dialogInputText: "",
};

type InitialState = typeof initialState;
type DialogAction = PostMessageActionType;
//===================== REDUCER ============================

export default function dialogReducer(
  state = initialState,
  action: DialogAction
): InitialState {
  switch (action.type) {
    //======================================
    case POST_MESSAGE:
      const mess = state.messages;

      const newMessage: Message = {
        id: mess[mess.length - 1].id + 1, // incrementing last post id and using it as new post id
        authorId: 0,
        text: action.payload,
        time: new Date().toLocaleTimeString(),
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        dialogInputText: "",
      };
    //======================================

    default:
      return state;
  }
}
//===================== ACTION CREATORS ============================
type PostMessageActionType = {
  type: typeof POST_MESSAGE;
  payload: string;
};

export function postMessage(dialogInput: string): PostMessageActionType {
  return { type: POST_MESSAGE, payload: dialogInput };
}
