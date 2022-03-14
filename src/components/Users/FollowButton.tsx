import React from "react";

type PropsType = {
  user: any;
  disabledFollowButtonList: Array<number>;
  toggleFollow: (userId: number) => void;
};

const FollowButton: React.FC<PropsType> = ({
  user,
  disabledFollowButtonList,
  toggleFollow,
}) => {
  return user.followed ? (
    <button
      disabled={disabledFollowButtonList.includes(user.id)}
      onClick={() => toggleFollow(user.id)}
    >
      Отписаться
    </button>
  ) : (
    <button
      disabled={disabledFollowButtonList.includes(user.id)}
      onClick={() => toggleFollow(user.id)}
    >
      Подписаться
    </button>
  );
};

export default FollowButton;
