import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">
          {" "}
          Exploring Books, Art, and Technology
        </span>
        <span className="headerTitleLg">Ink & Innovation</span>
      </div>
      <img
        className="headerImg"
        src={`${process.env.PUBLIC_URL}/backgroundImg.jpg`}
        alt="not working"
      />
    </div>
  );
}
