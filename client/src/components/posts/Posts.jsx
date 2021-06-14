import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts"> 
      {posts.map((p) => ( // looping through the posts. pull Post component
        <Post post={p} />
      ))}
    </div>
  );
}
