import "../css/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-section">
        <div className="logo"></div>
        <div>
          <div className="title">QUEZON CITY UNIVERSITY</div>
        </div>
      </div>
      <nav className="nav">
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">ADMISSIONS</a>
        <a href="#">ACADEMICS</a>
        <a href="#">JoyBOT</a>
      </nav>
    </header>
  );
};

export default Header;
