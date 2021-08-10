export const UPDATE_DIALOG_STATE = "updateDialogState";
export const POST_MESSAGE = "postMessage";

export function updateDialogStateActionCreator(text) {
  return { type: UPDATE_DIALOG_STATE, dialogInputText: text };
}

export function postMessageActionCreator() {
  return { type: POST_MESSAGE };
}

export default function dialogReducer(state, action) {
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
