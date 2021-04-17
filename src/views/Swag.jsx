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

class Swag extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
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
                <h3 className={classes.title}>Iconic Merchandise</h3>
                </GridItem>
                </GridContainer>
              <div className={classes.description}>
                <p>
                  Swag Swag Swag Swag Swag Swag Swag Swag Swag Swag Swag Swag {" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Swag.propTypes = {
  classes: PropTypes.object
};

export default withStyles(profilePageStyle)(Swag);
