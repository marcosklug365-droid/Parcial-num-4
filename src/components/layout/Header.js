import "../../styles/components/layout/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-holder">
        <img
          src="/imges/logo.png"
          alt="Logo The Red Beat"
          className="header-logo"
        />
        <div className="header-text">
          <h1>The Red Beat</h1>
          <p>Transformá tu cuerpo.</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
