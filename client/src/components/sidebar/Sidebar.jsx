import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

// sidebar has title, profile image, categories, social icons

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">BE ASTONISHED</span>
        <img
          src="https://images.unsplash.com/photo-1591600843182-a5e1c8e48b2d"
          alt=""
        />
        <p>
        When it's over, I want to say: all my life I was a bride married to amazement. I was the bridegroom, taking the world into my arms.<br></br>
        -Mary Oliver
        </p>
      </div>

      
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>


      <div className="sidebarItem">
        <span className="sidebarTitle">DAILY INSPIRATION</span>
        <div className="sidebarSocial">
          <a href="https://www.nationalgeographic.com/photo-of-the-day/">   <i className="topIcon fa fa-tree"></i></a>
          <a href="https://apod.nasa.gov/apod/astropix.html">     <i className="topIcon fa fa-moon"></i></a>
          <a href="https://kexp.org/listen/"> <i className="topIcon fa fa-music"></i></a>
          <a href="https://poets.org/poem-a-day"> <i className="topIcon fa fa-book"></i></a>
        </div>
      </div>
    </div>
  );
}
