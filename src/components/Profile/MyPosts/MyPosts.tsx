import { PostType } from "../../../redux/profileReducer";
import Post from "../Post/Post";

type PropsType = {
  posts: Array<PostType>;
};

const MyPosts: React.FC<PropsType> = ({ posts }) => {
  let postsList = posts.map((post: PostType) => (
    <Post key={post.id} text={post.text} likes={post.likes} />
  ));

  return <div>{postsList}</div>;
};

export default MyPosts;
