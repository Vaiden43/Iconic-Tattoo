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

import bebop from "../assets/img/Tattoo/bebop.jpg";
import crow from "../assets/img/Tattoo/crow.jpg";
import deadpool from "../assets/img/Tattoo/deadpool.jpg";
import Rick from "../assets/img/Tattoo/Rick.jpg";
import joker from "../assets/img/Tattoo/joker.jpg";
import odin from "../assets/img/Tattoo/odin.jpg";
import Back from "../assets/img/Tattoo/Back.jpg";
import Vader from "../assets/img/Tattoo/Vader.jpg";
import Maul from "../assets/img/Tattoo/Maul.jpg";
import Iron from "../assets/img/Tattoo/Iron.jpg";
import Abe from "../assets/img/Tattoo/Abe.jpg";
import Flower from "../assets/img/Tattoo/Flower.jpg";


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
                <img src={Back} alt="..." className={imageClasses} />
                </GridItem>
                <GridItem xs={6} sm={6} md={6} className={classes.navWrapper}>
                <img src={crow} alt="..." className={imageClasses} />
                </GridItem>
                <GridItem xs={6} sm={6} md={6} className={classes.navWrapper}>
                <img src={Iron} alt="..." className={imageClasses} />
                </GridItem>
                <GridItem xs={6} sm={6} md={6} className={classes.navWrapper}>
                <img src={bebop} alt="..." className={imageClasses} />
                </GridItem>
                <GridItem xs={6} sm={6} md={6} className={classes.navWrapper}>
                <img src={Maul} alt="..." className={imageClasses} />
                </GridItem>
                <GridItem xs={6} sm={6} md={6} className={classes.navWrapper}>
                <img src={Vader} alt="..." className={imageClasses} />
                </GridItem>
                <GridItem xs={6} sm={6} md={6} className={classes.navWrapper}>
                <img src={joker} alt="..." className={imageClasses} />
                </GridItem>
                <GridItem xs={6} sm={6} md={6} className={classes.navWrapper}>
                <img src={deadpool} alt="..." className={imageClasses} />
                </GridItem>
                <GridItem xs={6} sm={6} md={6} className={classes.navWrapper}>
                <img src={Rick} alt="..." className={imageClasses} />
                </GridItem>
                <GridItem xs={6} sm={6} md={6} className={classes.navWrapper}>
                <img src={Abe} alt="..." className={imageClasses} />
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
