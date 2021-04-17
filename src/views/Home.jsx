import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import GridContainer from "../components/Grid/GridContainer.jsx";
import GridItem from "../components/Grid/GridItem.jsx";
import Parallax from "../components/Parallax/Parallax.jsx";
import HeaderLinks from "../components/Header/HeaderLinks.jsx";
import componentsStyle from "../assets/jss/material-kit-react/views/components.jsx";
import { Link } from "react-router-dom";

import Award1 from "../assets/img/Tattoo/Award1.jpg";
import Award2 from "../assets/img/Tattoo/Award2.jpg";
import Award3 from "../assets/img/Tattoo/Award3.jpg";
import Award4 from "../assets/img/Tattoo/Award4.jpg";

import Hollis from "../assets/img/FamilyMembers/hollis.jpg";
import Matt from "../assets/img/Familymembers/matt.jpg";

class Components extends React.Component {
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
          brand=""
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={require("../assets/img/ShopInterior.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <h1 className={classes.title}>Iconic Tattoo</h1>
                  {/* <h3 className={classes.subtitle}>
                    Glendale Arizona's Premiere Tattoo Artist <br />
                    of Iconic Tattoo
                  </h3> */}
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <GridContainer>
            <GridItem md={12} className={classes.textCenter}>
              {/* { */}
              <br />
              <h1>The Premiere Tattoo Artist of Iconic Tattoo </h1>{" "}
              </GridItem>
              <GridItem md={1} className={classes.textCenter}></GridItem>
              <GridItem md={10} className={classes.textCenter}>
              <h4>
                <br />
                <br />
                <br />
                Iconic Tattoo & Piercing is located in Glendale AZ.<br /> Color, Black
                & Gray, Realism, Polynesian, Traditional, and Watercolor
                tattoos, are just some of the styles the Cantrells specialize
                in.
              </h4>
            </GridItem>
          <GridItem md={1} className={classes.textCenter}></GridItem>
          </GridContainer>
          <br />
          <GridContainer>
          <GridItem md={2} className={classes.textCenter}>
            </GridItem>
            <Link to="/MattFoster">
            <GridItem md={4} className={classes.textCenter}>
            <img src={Hollis} alt="..." className={imageClasses} width="270" />
            </GridItem>
            </Link>
            <br/><br/>
            <GridItem md={4} className={classes.textCenter}>
              {" "}
              An artist of considerable range, Hollis is a
              2 time Guinness world record holder and an Award-winning tattoo
              artist. Life's a garden, dig it.
              {/* } */}
            </GridItem>
            </GridContainer>
            <br/><br/><br/>
            <GridContainer>
            <GridItem md={2} className={classes.textCenter}>
            </GridItem>
            <Link to="/MattFoster">
            <GridItem md={4} className={classes.textCenter}>
            <img src={Matt} alt="..." className={imageClasses} width="270" />
            </GridItem>
            </Link>
            <br/><br/>
            <GridItem md={4} className={classes.textCenter}>
              {" "}
              A black and grey specialist, Matt is a
              master when it comes to those beautiful grey black tones.
              Stay humble hustle hard!<br />
              {/* } */}
            </GridItem>
          </GridContainer>
          <br />
          <br />
          <br />
          <GridContainer>
            <GridItem md={2} className={classes.textCenter}>
            </GridItem>
            <GridItem md={4} className={classes.textCenter}>
            <img src={Award1} alt="..." className={imageClasses} width="270" />
            </GridItem>
            <GridItem md={4} className={classes.textCenter}>
            <img src={Award2} alt="..." className={imageClasses} width="270" />
            </GridItem>
            </GridContainer>
            <GridContainer>
            <GridItem md={2} className={classes.textCenter}>
            </GridItem>
            <GridItem md={4} className={classes.textCenter}>
            <img src={Award3} alt="..." className={imageClasses} width="270" />
            </GridItem>
            <GridItem md={4} className={classes.textCenter}>
            <img src={Award4} alt="..." className={imageClasses} width="270" />
            </GridItem>
            </GridContainer>
            <br />
            <br />
            <GridContainer>
            <GridItem md={12} className={classes.textCenter}>
            <a href="https://tattooawards.com/artists/hollis-cantrell"  target="_blank"> Even More Awards, Rankings, and Achievments at my Tattoo Awards Page</a>
            </GridItem>
          </GridContainer>
          <br />
          <br />
        </div>
        <Footer />
      </div>
    );
  }
}

Components.propTypes = {
  classes: PropTypes.object
};

export default withStyles(componentsStyle)(Components);
