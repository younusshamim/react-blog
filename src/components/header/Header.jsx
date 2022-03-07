import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg"> Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt="Nature"
      />
    </div>
  );
};

export default Header;
