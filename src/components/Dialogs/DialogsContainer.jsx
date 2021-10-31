import { postMessageActionCreator } from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { change } from "redux-form";

const DialogsContainer = (props) => {
  const onSubmit = (dialogInputObj) => {
    let { dialogInput } = dialogInputObj;
    props.postTextArea(dialogInput);
    props.clearInput();
  };

  return <Dialogs {...props} onSubmit={onSubmit} />;
};

const mapStateToProps = (state) => {
  return {
    dialogs: state.messagesPage.dialogs,
    messages: state.messagesPage.messages,
    // dialogInputText: state.messagesPage.dialogInputText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postTextArea: (dialogInput) =>
      dispatch(postMessageActionCreator(dialogInput)),
    clearInput: () => dispatch(change("dialogInput", "dialogInput", "")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer);
