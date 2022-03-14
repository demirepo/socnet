import React, { useState } from "react";
import s from "./Profile.module.css";

type StatusProps = {
  updateStatusOnServer: (status: string) => void;
  statusText: string;
};

const Status: React.FC<StatusProps> = (props) => {
  const { updateStatusOnServer, statusText: propsStatusText } = props;
  const [showInput, setShowInput] = useState(false);
  const [statusText, setStatusText] = useState(propsStatusText);

  const showStatusInput = () => {
    setShowInput(true);
    setStatusText(propsStatusText);
  };

  const hideStatusInput = () => {
    setShowInput(false);
    updateStatusOnServer(statusText);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatusText(e.target.value);
  };

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.key === "Enter" && hideStatusInput();
  };

  return (
    <div className={s.statusBox}>
      {showInput ? (
        <input
          onChange={onInputChange}
          onKeyDown={onEnter}
          className={s.statusInput}
          autoFocus={true}
          type="text"
          value={statusText}
          onBlur={hideStatusInput}
        />
      ) : (
        <span onDoubleClick={showStatusInput}>{propsStatusText || " "}</span>
      )}
    </div>
  );
};

export default Status;
