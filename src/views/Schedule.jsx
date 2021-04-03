/* eslint-disable react/no-unescaped-entities */
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import GridContainer from "../components/Grid/GridContainer.jsx";
import GridItem from "../components/Grid/GridItem.jsx";
import HeaderLinks from "../components/Header/HeaderLinks.jsx";
import Parallax from "../components/Parallax/Parallax.jsx";
import profilePageStyle from "../assets/jss/material-kit-react/views/profilePage.jsx";

class Schedule extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          brand="Hollis Cantrell"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("../assets/img/ShopInterior.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}></div>
                </GridItem>
                <br />
              </GridContainer>
              <div className={classes.description}>
                <h6>All day sessions for $1000, and half days for $750</h6>
                <br />
                <h7>
                  {" "}
                  Alternative hourly rate is $200 an hour, and Iconic Tattoo has a
                  shop minimum of $150
                </h7>
                <br />
                <br />
                <br />
                <a href="https://calendar.google.com/calendar/embed?src=hollis6942%40gmail.com&ctz=America%2FPhoenix"  target="_blank"> Click here to check my calander</a>
                <br /><br />
                <h6>
                  To Schedule contact us at <br /><br /> (602) 487-5078 <br /><br /> or<br /> <br /> hollis@iconictattoo.com{" "}
                </h6>
                <br />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Schedule.propTypes = {
  classes: PropTypes.object
};

export default withStyles(profilePageStyle)(Schedule);
