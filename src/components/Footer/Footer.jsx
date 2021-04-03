import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "../../assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
        </div>
        <div className={classes.right}>
        © 2019 Hollis Cantrell | Iconic Tattoo & Piercing
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
