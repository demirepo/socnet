import { useDispatch } from "react-redux";
import { change } from "redux-form";
import { postMessage } from "../../redux/dialogReducer";
import { useAppSelector } from "../../redux/redux-store";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {
  const dispatch = useDispatch();
  const dialogs = useAppSelector((state) => state.messagesPage.dialogs);
  const messages = useAppSelector((state) => state.messagesPage.messages);

  const onSubmit = (e: any) => {
    dispatch(postMessage(e.dialogInput));
    dispatch(change("dialogInput", "dialogInput", ""));
  };

  return <Dialogs messages={messages} dialogs={dialogs} onSubmit={onSubmit} />;
};

export default DialogsContainer;
