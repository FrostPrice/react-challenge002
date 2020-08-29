import React from 'react';
import './Tab.css';
import classnames from 'classnames';

const ContentGrid = (props) => {
    return (
        <div  className="contentContainer">
            <div className="flexContainer">
                <h4 className="subtitles">{props.subtitle1}</h4>
                <p className="text">{props.content1}</p>
            </div>
            <div className="flexContainer">
                <h4 className="subtitles">{props.subtitle2}</h4>
                <p className="text">{props.content2}</p>
            </div>
        </div>
    )
}

        const Parents = (
            <div>
            <ContentGrid
                subtitle1="Setting up your nanny share"
                content1="Discuss with your nanny any increase in pay, your own
                            reduction in costs and the number of children you might take on.
                            Hapu makes it easy to add more than one child, though you and your
                            nanny may wish to limit to one. We give you the option of open places
                            beyond one as you may find the perfect family who have two little ones.
                            This means a greater reduction in costs for you and a higher increase in
                            pay for your nanny."
                subtitle2="Setting an hourly rate"
                content2="You set the rate you want. And this may be more than half.
                            It's up to you to determine the amount you and your nanny want to see
                            at the end of the week. You can take into account existing costs you've
                            already incurred in employing your nanny, your home as the location and
                            so on. Do what works for you and your nanny. Once set Hapu automatically
                            calculates the weekly cost to be paid. You can also use our automated shared
                            rates if you are open to taking on more than one additional child. Shared rates
                            makes it easy to split costs."
            />
            <ContentGrid
                subtitle1="Your weekly total and receiving funds "
                content1="Your days are set as the days you’re employing your nanny. Hapu doesn’t work off a 
                            calendar and we don’t want to complicate things as you’re not running a business. You simply 
                            set the days that you currently employ your nanny. Setting your days combines with your hourly 
                            rate(s) and the number of hours you set to calculate the total cost per week for sharers. You enter 
                            your bank account as the receiver of funds and pay your nanny at the end of the week as you currently 
                            do."
                subtitle2="Verification and qualifications"
                content2="Hapu is essentially a parent to parent app with our goal to connect families and 
                            provide tools to manage payments and attendance for nanny share. In doing so we allow parents 
                            to perform their own due diligence in verifying qualifications and references. You must present 
                            to any sharing parents your nanny’s Working With Children Check (WWCC) and you can select in your 
                            share to present any educational qualifications, first aid and references."
            />
            </div>
        );

        const Nannies = (
            <div>
            <ContentGrid
                subtitle1="Setting up your nanny share"
                content1="Discuss with your employer their reduction in costs and what you'd like
                            to charge sharers and the number of children you might take on, one might be ideal.
                            However, you can set more than one available place giving your share the option to
                            grow and increase your income further. There might just be the perfect family who have
                            two little ones. And it's always best to be open to possibilities. Hapu makes it easier
                            to take payments and manage families so you never know where your share may go and what
                            overall increase in income you might reach."
                subtitle2="Setting an hourly rate"
                content2="You set the rate you want. And this may be a higher rate than what you charge
                            your host family. It's up to you to determine the amount you want to see at the end of the
                            week. You can set an attractive low rate that ultimately balances out when combined with the
                            hours you set for a great day rate. You can also use our shared rate system that automatically
                            reduces costs and increases your income if your share grows beyond one additional child."
            />
            <ContentGrid
                subtitle1="Your weekly total and receiving funds "
                content1="Your days are set as the days you're employed by your family. Hapu doesn't work off a
                            calendar. You simply set the days that you're currently employed. Setting your days combines then
                            with your hourly rate(s) and the number of hours you set to calculate the total cost per week for
                            sharers. In creating and managing the nanny share you have the option of entering your bank account
                            or your employer's as the receiver of funds. If you enter your employer's account they will pay you
                            as they currently do."
                subtitle2="Verification and qualifications"
                content2="Hapu is essentially a parent to parent app with our goal to connect families and provide
                            tools to manage payments and attendance for nanny share. In doing so we allow parents to perform their
                            own due diligence in verifying qualifications and references. You must present to any sharing parents
                            your nanny's Working With Children Check (WWCC) and you can select in your share to present any educational
                            qualifications, first aid and references."
            />
            </div>
        );

class Tab extends React.Component {
    state = { text: Parents, }

    changeText = (event) => {
        const { text } = this.state;

        if ( text === Parents) {
            this.setState({
                text: Nannies,
            });
        }
        if ( text === Nannies) {
            this.setState({
                text: Parents,
            });
        }
    }
    
    render() {
        const { text } = this.state
      return (
        <article>
          <div className="tabContainer">
            <h3 className="title">How it works: Some tips and insights</h3>
            <div className="buttonContainer">
              <button
                disabled={text === Parents}
                className={classnames("tabButton", {
                    active: text === Parents,
                })}
                onClick={this.changeText}
              >
                Parents
              </button>
              <button
                disabled={text === Nannies}
                className={classnames("tabButton", {
                    active: text === Nannies,
                })}
                onClick={this.changeText}
              >
                Nannies
              </button>
            </div>
                <div>
                   {text === Parents ? Parents : Nannies} 
                </div>
          </div>
        </article>
      );
    }
  }
  
export default Tab;