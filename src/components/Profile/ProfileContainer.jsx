import {
  addPostActionCreator,
  updateProfileStateActionCreator,
} from "../../redux/profileReducer";
import { connect } from "react-redux";
import Profile from "./Profile";

// export default function Profile(props) {
//   return (
//     <section className={s.content}>
//       <img
//         className={s.bigpic}
//         src="https://fartuk.ru/upload/resize_cache/iblock/f42/1920_533_1d2c0be91f8b91a0d3c91a9448f348e3c/skinali_nyu_york_195782.jpg"
//         alt="bigpic"
//       />
//       <UserInfo />
//       <NewPost inputState={props.profileInputText} dispatch={props.dispatch} />
//       <MyPosts state={props.state} />
//     </section>
//   );
// }
const mapStateToProps = (state) => {
  return {
    profileInputState: state.profilePage.profileInputText,
    posts: state.profilePage.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostActionCreator()),
    updateState: (text) => dispatch(updateProfileStateActionCreator(text)),
  };
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default ProfileContainer;
