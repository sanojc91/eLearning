import React from 'react';
import heroImage from '../resources/Hero_image1.jpg';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Typography } from "@material-ui/core";


const useStyles = makeStyles({
  heroText: {
    position: "absolute",
    color: "white",
    maxWidth: "100%"
  },
  header: {
    height: "80vh",
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundAttachment: "fixed",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
  },
});

function Hero(){
    const classes = useStyles();
    return (
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.header}
      >
        <Grid item className={classes.heroText}>
          <Typography variant="h4" gutterBottom>
            Learn A/L or O/L Subjetcts
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Become best in your stream
          </Typography>
          <Button variant="contained" color="secondary">
            Learn more about us
          </Button>
        </Grid>
      </Grid>
    );
}
export default Hero;