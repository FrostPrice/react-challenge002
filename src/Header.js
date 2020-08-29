import React from "react";
import ImageLogo from "./Images/hapu_green_logo.png";
import "./Header.css";

const HeaderLinks = [
  {
    textLeft: "Create Your Nanny Share",
    link: "https://www.jungle.rocks/login",
  },
  { textLeft: "Browse Nanny Shares", link: "https://www.jungle.rocks/login" },
  { textLeft: "Our Story", link: "https://www.jungle.rocks/login" },
  { textRight: "Sign In", link: "https://www.jungle.rocks/login" },
];

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="navBar">
          <div className="navBarLeft">
            <img src={ImageLogo} alt="Hapu Green Logo" className="hapuGreen" />
            {HeaderLinks.map((headerLink) => (
              <a href={headerLink.link} key={HeaderLinks}>
                {headerLink.textLeft}
              </a>
            ))}
          </div>
          <div className="navBarRight">
            <a href="https://www.jungle.rocks/login">
              <button className="shareHostButton">
                Become A Nanny Share Host
              </button>
            </a>
            {HeaderLinks.map((headerLink) => (
              <a href={headerLink.link} key={HeaderLinks}>
                {headerLink.textRight}
              </a>
            ))}
          </div>
        </nav>
        <div className="menuContent">
          <h1>Become a nanny share host</h1>
          <p>Reduce costs, increase incomes and change childcare forever</p>
        </div>
      </header>
    );
  }
}

export default Header;
