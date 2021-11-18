import React, { useState } from "react";
import s from "./Profile.module.css";

export default function Status({
  updateStatusOnServer,
  statusText: propsStatusText,
}) {
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

  const onInputChange = (e) => {
    setStatusText(e.target.value);
  };

  const onEnter = (e) => {
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
}
