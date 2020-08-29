import React, { Fragment } from "react";
import "./Footer.css";
import CalendarIcon from "./Images/calendar_icon.svg";
import HapuGrayLogo from "./Images/hapu_gray_logo.svg";
import FacebookLogo from "./Images/facebook_icon.svg";
import TwitterLogo from "./Images/twitter_icon.svg";
import InstagramLogo from "./Images/instagram_icon.svg";

const Footer = () => {
  const iconSocialMedia = [
    { icon: FacebookLogo, alt: "Facebook logo" },
    { icon: TwitterLogo, alt: "Twitter logo" },
    { icon: InstagramLogo, alt: "Instagram logo" },
  ];

  const linkFooter = [
    {
      text: (
        <Fragment>
          <span>Create</span> Your Nanny Share
        </Fragment>
      ),
      link: "https://www.jungle.rocks/",
    },
    {
      text: (
        <Fragment>
          Browse <span>Nanny</span> Shares
        </Fragment>
      ),
      link: "https://www.jungle.rocks/",
    },
    { text: "Become A Nanny Share Host", link: "https://www.jungle.rocks/" },
    { text: "Terms & Privacy", link: "https://www.jungle.rocks/" },
  ];

  return (
    <footer>
      <div className="footerWhiteRectangle">
        <div className="footerBecome">
          <div>
            <h3 className="title footerTitle">
              Become a nanny share host <span>today!</span>
            </h3>
            <p className="text">Takes less than 5 minutes to get started</p>
          </div>
          <a href="https://www.jungle.rocks/" className="purpleButtonLink">
            <img
              src={CalendarIcon}
              className="calendarIcon"
              alt="Icon of a calendar"
            />
            <div className="purpleText">
              <p className="purpleTextBig">Create Your Nanny Share</p>
              <p className="purpleTextSmall">Takes less than 5 minutes</p>
            </div>
          </a>
          <a
            href="https://www.jungle.rocks/"
            className="purpleLink footerPurpleLink"
          >
            Or browse local nanny-shares
          </a>
        </div>
        <div className="footerCopyright">
          <img
            src={HapuGrayLogo}
            className="hapuGrayLogo"
            alt="Hapu's gray logo"
          />
          <div className="sectionLinks">
            {linkFooter.map((link) => (
              <a href={link.link} key={linkFooter}>
                {link.text}
              </a>
            ))}
          </div>
          <div className="logos">
            {iconSocialMedia.map((icon) => (
              <img src={icon.icon} alt={icon.alt} />
            ))}
          </div>
        </div>
        <hr className="footerLine" />
        <p className="copyright">
          Copyright © 2017 Hapu PTY Limited All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
