import funhausLogo from "../../assets/funhaus-logo.svg";
import menu from "../../assets/menu.svg";

const Header = () => {
  return (
    <header className="header flex place-content-between items-center">
      <a href="#">
        <img className="header__logo" src={funhausLogo} alt="fun haus logo" />
      </a>
      <img className="header__menu" src={menu} alt="menu icon" />
    </header>
  );
};

export default Header;
