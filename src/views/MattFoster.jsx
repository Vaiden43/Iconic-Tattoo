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

import ar1 from "../assets/img/Tattoo/ar1.jpg";
import ar2 from "../assets/img/Tattoo/ar2.jpg";
import ar3 from "../assets/img/Tattoo/ar3.jpg";
import ar4 from "../assets/img/Tattoo/ar4.jpg";
import ar5 from "../assets/img/Tattoo/ar5.jpg";
import ar6 from "../assets/img/Tattoo/ar6.jpg";

class Tattoo extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div>
        <Header
          color="transparent"
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
              <GridItem xs={6} sm={6} md={6} className={classes.navWrapper}>
                <img src={ar1} alt="..." className={imageClasses} />
                </GridItem>
                <GridItem xs={6} sm={6} md={6} className={classes.navWrapper}>
                <img src={ar2} alt="..." className={imageClasses} />
                </GridItem>
                <GridItem xs={6} sm={6} md={6} className={classes.navWrapper}>
                <img src={ar3} alt="..." className={imageClasses} />
                </GridItem>
                <GridItem xs={6} sm={6} md={6} className={classes.navWrapper}>
                <img src={ar4} alt="..." className={imageClasses} />
                </GridItem>
                <GridItem xs={6} sm={6} md={6} className={classes.navWrapper}>
                <img src={ar5} alt="..." className={imageClasses} />
                </GridItem>
                <GridItem xs={6} sm={6} md={6} className={classes.navWrapper}>
                <img src={ar6} alt="..." className={imageClasses} />
                </GridItem>
              </GridContainer>
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