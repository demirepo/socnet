import MyPosts from "./MyPosts/MyPosts";
import UserInfo from "./UserInfo/UserInfo";
import NewPostReduxForm from "./NewPost/NewPost";

import s from "./Profile.module.css";
import Status from "./Status";

export default function Profile({
  profileData,
  onSubmit,
  posts,
  updateStatusOnServer,
  statusText,
  authorizedUserId,
  updateAvatarHandler,
}) {
  return (
    <section className={s.content}>
      <Status
        updateStatusOnServer={updateStatusOnServer}
        statusText={statusText}
      />
      <UserInfo
        data={profileData}
        authorizedUserId={authorizedUserId}
        updateAvatarHandler={updateAvatarHandler}
      />
      <NewPostReduxForm onSubmit={onSubmit} />
      <MyPosts posts={posts} />
    </section>
  );
}
