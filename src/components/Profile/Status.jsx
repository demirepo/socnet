import React, { useState } from "react";
import s from "./Profile.module.css";

export default function Status(props) {
  const [showInput, setShowInput] = useState(false);
  const [statusText, setStatusText] = useState(props.statusText);

  // useEffect(() => {
  //   getStatusFromServer(props.authorizedUserId);
  // }, [props.authorizedUserId]);

  const showStatusInput = () => {
    setShowInput(true);
    setStatusText(props.statusText);
  };

  const hideStatusInput = () => {
    setShowInput(false);
    props.updateStatusOnServer(statusText);
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
        <span onDoubleClick={showStatusInput}>{props.statusText || ""}</span>
      )}
    </div>
  );
}
