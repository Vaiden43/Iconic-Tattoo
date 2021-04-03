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

class Events extends React.Component {
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
          <GridContainer>
          <GridItem md={1} className={classes.textCenter}>
          </GridItem>
          <GridItem md={2} className={classes.textCenter}>
              <br />
              <br />
          <strong>Deposits:</strong>
            </GridItem>
            <GridItem md={8} className={classes.textCenter}>
                <h4>
                Half of the amount of the tattoo is required up front in order to schedule appointments.
                  The deposit is non-refundable to set an appointment time with
                 an artist. The deposit will be credited towards the actual price
                  of the tattoo. The deposit is not transferable to a different
                  artist or appointment time. Ultimately, each artist sets their
                  own pricing. Please check with your artist for more details.
                </h4>
            </GridItem>
          </GridContainer>
          <GridContainer>
          <GridItem md={1} className={classes.textCenter}>
          </GridItem>
          <GridItem md={2} className={classes.textCenter}>
              <br />
          <strong>Consultations:</strong>
            </GridItem>
            <GridItem md={8} className={classes.textCenter}>
                <h4>
                Coming in, meeting with an artist, and discussing your tattoo ideas is the best way.
Artists will begin working on your personalized tattoo artwork once an appointment and deposit is made.
                </h4>
            </GridItem>
          </GridContainer>
          <br />
          <GridContainer>
          <GridItem md={1} className={classes.textCenter}>
          </GridItem>
          <br/>
          <GridItem md={2} className={classes.textCenter}>
          <br/>
          <strong>After Care:</strong>
            </GridItem>
            <GridItem md={8} className={classes.textCenter}>
                <h4>
                In order to ensure premium tattoo quality; please adhere to the following instructions, using only the following products:
Dial Liquid Soap and Aquaphor.
During the first three days of healing; wash the tattooed area every hour for 10 minutes with a small amount of Dial Liquid Soap and water. After you have completely washed and dried the tattoo; apply a plastic wrap barrier over the tattooed area. It is extremely important during these next 3 days you change the plastic wrap and clean the area as recommended.
                </h4>
            </GridItem>
          </GridContainer>
          <br />
          <GridContainer>
          <GridItem md={3} className={classes.textCenter}>
            </GridItem>
            <GridItem md={8} className={classes.textCenter}>
            <strong>Plase be aware the tatoo is an open wound and should be treated as such.</strong> <br />
                <h4>
                After the first 3 days, continue to wash the tattooed area every hour for the next 2 weeks with a mixture of Liquid Dial soap and water. After the tattooed area is washed and dried, apply a thin coat of Aquaphor to the entire area making sure to not over apply as the tattoo needs to “breathe”. Monitor the tattoo between cleanings. If the tattoo becomes dry, rewash and apply a thin layer of Aquaphor to the entire area as needed.
                </h4>
            </GridItem>
          </GridContainer>

            </div>
          </div>
        <Footer />
      </div>
    );
  }
}

Events.propTypes = {
  classes: PropTypes.object
};

export default withStyles(profilePageStyle)(Events);
