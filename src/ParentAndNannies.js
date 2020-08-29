import React from "react";
import "./ParentAndNannies.css";
import ParentsProfilePicture from "./Images/parents_profile_picture.png";
import NanniesProfilePicture from "./Images/nannies_profile_picture.png";
import LocalFamiliesPicture from "./Images/local_families_image.png";
import MobileLocalFamiliesPicture from "./Images/local_families_image_mobile.png";

const Button = (props) => {
  return (
    <div className="createNannyButton">
      <a href={props.link}>
        <button className="purpleButtonContent">
          <div>Create Your Nanny Share Today</div>
          <div>Takes less than 5 minutes</div>
        </button>
      </a>
    </div>
  );
};

const GridContent = (props) => {
  return (
    <div>
      <div className="gridHeader">
        <img
          src={props.profileImage}
          className="profilePictures"
          alt="The Profile Pictures"
        />
        <h3 className="title">{props.profileTitle}</h3>
      </div>
      <div>
        <p className="subtitles">{props.subtitles}</p>
        <p className="text">{props.text}</p>
        <Button link="https://www.jungle.rocks/" />
        <div className="profileList">{props.list}</div>
      </div>
    </div>
  );
};

class MainGrid extends React.Component {
  render() {
    return (
      <article>
        <div className="contentGrid">
          <GridContent
            profileImage={ParentsProfilePicture}
            profileTitle="Parents"
            subtitles="“I have a fantastic home, a fantastic nanny and I want to reduce my costs!”"
            text="Your home and a great relationship with your nanny is an asset you can leverage to significantly 
                            reduce your childcare costs. All the while increasing your nannies pay."
            list={
              <ul className="listContent">
                <li>Set the rates in partnership with your nanny</li>
                <li>Be found by local families on the Hapu map</li>
                <li>Easily connect and chat with new sharers</li>
                <li>
                  Protect your incomings with 2 weeks notice for cancellations
                </li>
                <li>Process late fees at the click of a button</li>
              </ul>
            }
          />
          <GridContent
            profileImage={NanniesProfilePicture}
            profileTitle="Nannies"
            subtitles="“I work for a great family in a great home and I want to increase my income and control!”"
            text="Now you can partner with your existing family and employer to reduce their costs and increase your pay. 
                            All the while gaining a new level of control that ensures any share arrangement is as beneficial to you 
                            as to the families involved. You start the share, you run the share."
            list={
              <ul className="listContent">
                <li>
                  You set up and manage the nanny share on behalf of your host
                  family
                </li>
                <li>You set the rates</li>
                <li>Protect your income with 2 weeks notice for shares</li>
                <li>Process late fees at the click of a button</li>
              </ul>
            }
          />
        </div>
        <hr className="horizontalLine" />
        <div className="flexLocalFamilies">
          <h3 className="title">Local families need you!</h3>
          <p className="text">
            Families in your area need childcare. There simply is not enough to
            go around. They need it locally and at a rate they can afford. In
            short, they need you. And you need to reduce costs or if a nanny,
            increase your pay. It’s a win, win, win! But first families need to
            find you. Go on, reach out to your neighbourhood today with a Hapu
            nanny share.
          </p>
          <a href="https://www.jungle.rocks/" className="purpleLink">
            Create your nanny share today
          </a>
          <img
            src={LocalFamiliesPicture}
            alt="Map including people nearby"
            className="localFamiliesPicture"
          />
          <img
            src={MobileLocalFamiliesPicture}
            alt="Map including people nearby"
            className="mobileLocalFamiliesPicture"
          />
        </div>
        <hr className="horizontalLine" />
      </article>
    );
  }
}

export default MainGrid;
