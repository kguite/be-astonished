import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Be</span>
        <span className="headerTitleLg">Astonished</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1596045571419-664297d8f502"
        alt=""
      />
    </div>
  );
}
