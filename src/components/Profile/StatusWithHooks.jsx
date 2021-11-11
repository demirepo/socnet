import React, { useState } from "react";
import s from "./Profile.module.css";

export function Status(props) {
  const [showInput, setShowInput] = useState(false);
  const [statusText, setStatusText] = useState(props.statusText);

  const showStatusInput = () => {
    setShowInput(true);
    setStatusText(props.statusText);
  };

  const hideStatusInput = () => {
    setShowInput(true);
    props.updateStatusOnServer(statusText);
  };

  const onStatusChange = (e) => {
    setStatusText(e.target.value);
  };

  return (
    <div className={s.statusBox}>
      {showInput ? (
        <input
          onChange={onStatusChange}
          className={s.statusInput}
          autoFocus={true}
          type="text"
          value={statusText}
          onBlur={hideStatusInput}
        />
      ) : (
        <span onDoubleClick={showStatusInput}>{statusText || ""}</span>
      )}
    </div>
  );
}

export default Status;
