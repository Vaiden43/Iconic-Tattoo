/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
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
import tattooexpo from "../assets/img/Tattoo/GS.jpeg";


class Tattoo extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgFluid
    );
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
                  <div className={classes.profile}>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p></p>
              </div>
              <GridContainer justify="center">
              <GridItem xs={0} sm={1} md={1}>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
              <img src={tattooexpo} alt="..." width="410" />
              </GridItem>
              <GridItem xs={1} sm={1} md={1}>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <h4>
             <a href="https://www.goldenstatetattooexpo.com/"  target="_blank">Golden State Tattoo Expo 2020 </a> <br />
                January 24th, 25th, and 26th
                Pasadena Convention Center <br/>
                300 East Green Street,<br/>
                Pasadena, CA 91101<br/><br/>
                $30 per day or $60 for a weekend pass!
</h4>
<br /><br /><br /> 
              </GridItem>
              </GridContainer>
              <br />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Tattoo.propTypes = {
  classes: PropTypes.object
};

export default withStyles(profilePageStyle)(Tattoo);
