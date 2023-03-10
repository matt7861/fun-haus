import funhausLogoYellow from "../../assets/funhaus-logo-yellow.svg";
import discord from "../../assets/discord.svg";
import mail from "../../assets/mail.svg";
import reddit from "../../assets/reddit.svg";
import twitter from "../../assets/twitter.svg";

const Footer = () => {
  return (
    <footer className="footer padding-sides">
      <div className="container">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-5">
            <img
              className="footer__logo"
              src={funhausLogoYellow}
              alt="fun haus logo"
            />
          </div>
          <div className="col-span-12 lg:col-span-7 grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-4">
              <h3>Research</h3>
              <ul className="footer__list">
                <li>
                  <a href="#">Research</a>
                </li>
                <li>
                  <a href="#">Expertise</a>
                </li>
                <li>
                  <a href="#">Aviation</a>
                </li>
                <li>
                  <a href="#">Brand Design</a>
                </li>
                <li>
                  <a href="#">Urban Design</a>
                </li>
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <h3>Services</h3>
              <ul className="footer__list">
                <li>
                  <a href="#">Real Estate Services</a>
                </li>
                <li>
                  <a href="#">Consumer Goods</a>
                </li>
                <li>
                  <a href="#">Critical Facilities</a>
                </li>
                <li>
                  <a href="#">Culture & Museums</a>
                </li>
                <li>
                  <a href="#">Developer</a>
                </li>
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <h3>Legal</h3>
              <ul className="footer__list">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__socials">
          <a href="#">
            <img src={mail} alt="mail" />
          </a>
          <a href="#">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="#">
            <img src={discord} alt="discord" />
          </a>
          <a href="#">
            <img src={reddit} alt="reddit" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
