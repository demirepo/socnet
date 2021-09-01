export default function FollowButton(props) {
  //   const dis = props.followButtonIsDisabled.includes(props.user.id);
  //   console.log(dis);
  return props.user.followed ? (
    <button
      disabled={props.followButtonIsDisabled.includes(props.user.id)}
      onClick={() => props.toggleFollow(props.user.id)}
    >
      Отписаться
    </button>
  ) : (
    <button
      disabled={props.followButtonIsDisabled.includes(props.user.id)}
      onClick={() => props.toggleFollow(props.user.id)}
    >
      Подписаться
    </button>
  );
}
