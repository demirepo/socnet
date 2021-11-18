import Post from "../Post/Post";

export default function MyPosts({ posts }) {
  let postsList = posts.map((post) => (
    <Post key={post.id} text={post.text} likes={post.likes} />
  ));

  return <div>{postsList}</div>;
}
