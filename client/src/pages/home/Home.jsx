import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]); // empty array for new posts
  const { search } = useLocation(); // to find all posts by user

  // 
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search); // to find all posts by user
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]); // to find all posts by user
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
