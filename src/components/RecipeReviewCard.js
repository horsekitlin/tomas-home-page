import React from "react";
import isEmpty from 'lodash/isEmpty';
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = (theme) => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 300,
    width: 300,
    paddingTop: "56.25%", // 16:9
  },
  actions: {
    display: "flex",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    "&:hover": {
      color: red[800],
    },
  },
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState((state) => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, content } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader title={content.header} />
        <CardMedia
          className={classes.media}
          image={content.image}
          title="Paella dish"
        />
        <CardContent>
          {content.description.map((text, index) => (
            <Typography component="p" key={`content-text-${index}`}>
              {text}
            </Typography>
          ))}
        </CardContent>
        <CardActions className={classes.actions}>
          {isEmpty(content.github) ? null : (
            <IconButton
              aria-label="Go To Github Repo"
              as="a"
              target="_blank"
              href={content.github}
            >
              <Icon className={classNames(classes.icon, "fa fa-github")} />
            </IconButton>
          )}
          <IconButton
            aria-label="Go To Page"
            as="a"
            target="_blank"
            href={content.demo}
          >
            <Icon className={classNames(classes.icon, "fa fa-eye")} />
          </IconButton>
          <IconButton
            disabled={!Array.isArray(content.collapseDesc)}
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        {Array.isArray(content.collapseDesc) ? (
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>{content.collapseDesc}</Typography>
            </CardContent>
          </Collapse>
        ) : (
          <React.Fragment />
        )}
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
