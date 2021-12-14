import { postMessage } from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import { change } from "redux-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const DialogsContainer = () => {
  const dispatch = useDispatch();
  const dialogs = useSelector((state) => state.messagesPage.dialogs);
  const messages = useSelector((state) => state.messagesPage.messages);

  const onSubmit = (e) => {
    dispatch(postMessage(e.dialogInput));
    dispatch(change("dialogInput", "dialogInput", ""));
  };

  return <Dialogs messages={messages} dialogs={dialogs} onSubmit={onSubmit} />;
};

export default DialogsContainer;
