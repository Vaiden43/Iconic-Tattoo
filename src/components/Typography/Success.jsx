import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import typographyStyle from "../../assets/jss/material-kit-react/components/typographyStyle.jsx";

function Success({ ...props }) {
  const { classes, children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.successText}>
      {children}
    </div>
  );
}

Success.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node
};

export default withStyles(typographyStyle)(Success);
