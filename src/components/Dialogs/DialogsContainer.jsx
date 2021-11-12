import { postMessageActionCreator } from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { change } from "redux-form";
import { getDialogs, getMessages } from "../../redux/dialogSelectors";

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
    dialogs: getDialogs(state),
    messages: getMessages(state),
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
