import {
  updateDialogStateActionCreator,
  postMessageActionCreator,
} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogs: state.messagesPage.dialogs,
    messages: state.messagesPage.messages,
    dialogInputText: state.messagesPage.dialogInputText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateState: (text) => dispatch(updateDialogStateActionCreator(text)),
    postTextArea: () => dispatch(postMessageActionCreator()),
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
