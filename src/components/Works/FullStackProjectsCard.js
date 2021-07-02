// import { Button } from "@material-ui/core";
import React from "react";
import Fade from "react-reveal/Fade";
import "./FullStackProjectsCard.css";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { a, Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 300,
    margin: 10,
  },
  media: {
    height: 140,
  },
});

const FullStackProjectsCard = (props) => {
  const classes = useStyles();
  // console.log(props);
  const { name, image, liveSiteLink, gitLink, clientSiteLink } = props.project;
  const anchorStyle = {
    color: "#2efac8",
    textDecoration: "none",
    padding: "3%",
    backgroundColor: "black",
  };
  return (
    <Card
      className={classes.root}
      style={{
        backgroundColor: "black",
      }}
    >
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={name} />
        <CardContent>
          <Typography
            style={{
              color: "#2efac8",
            }}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {name}
          </Typography>
          {/* <link to={liveSiteLink}>Hello</link> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button>
          <a target="_black" href={clientSiteLink} style={anchorStyle}>
            client()
          </a>
        </Button>
        <Button>
          <a target="_black" href={gitLink} style={anchorStyle}>
            server()
          </a>
        </Button>
        <Button>
          <a target="_black" href={liveSiteLink} style={anchorStyle}>
            visit()
          </a>
        </Button>
      </CardActions>
    </Card>
  );
};

export default FullStackProjectsCard;
