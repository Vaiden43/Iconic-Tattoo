import React from "react";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "../CustomButtons/Button.jsx";

import headerLinksStyle from "../../assets/jss/material-kit-react/components/headerLinksStyle";

function HeaderLinks({ ...props }) {
  // eslint-disable-next-line react/prop-types
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/Home">
          <Button variant="dark">Home</Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/Art">
          <Button variant="dark">Art</Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/Events">
          <Button variant="dark">Events</Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/Schedule">
          <Button variant="dark">Schedule</Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/FAQ">
          <Button variant="dark">FAQ</Button>
        </Link>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Link to="/Swag">
          <Button variant="dark">Swag</Button>
        </Link>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow me on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/holliscantrell?lang=en"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow me on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/cannibal6942"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow me on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/holliscantrell/?hl=en"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="youtube-tooltip"
          title="Subscribe to my youtube"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.youtube.com/channel/UCYSUI5TjVnCQxnj-1q0UBbw"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-youtube"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
