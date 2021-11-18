import { postMessage } from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { change } from "redux-form";
import { getDialogs, getMessages } from "../../redux/dialogSelectors";

const DialogsContainer = ({ dialogs, messages, postTextArea, clearInput }) => {
  const onSubmit = (input) => {
    postTextArea(input.dialogInput);
    clearInput();
  };

  return <Dialogs messages={messages} dialogs={dialogs} onSubmit={onSubmit} />;
};

const mapStateToProps = (state) => {
  return {
    dialogs: getDialogs(state),
    messages: getMessages(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postTextArea: (dialogInput) => dispatch(postMessage(dialogInput)),
    clearInput: () => dispatch(change("dialogInput", "dialogInput", "")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer);
