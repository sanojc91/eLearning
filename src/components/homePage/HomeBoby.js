import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Card,
} from "@material-ui/core";
import grey from "@material-ui/core/colors/grey"
import CardImage from "../resources/features/feature1.jpg"
import Footer from "./Footer"


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  body: {
    backgroundColor: grey[800],
  },

});

function HomeBody() {
  const classes = useStyles();

  return (
    <Grid
      container
      align="center"
      justify="center"
      className={classes.body}
      spacing={3}
    >
      <Grid item className={classes.cardArea}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={CardImage}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Best Teachers in the Island
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" variant="contained" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item className={classes.cardArea}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={CardImage}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Best Content
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" variant="contained" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item className={classes.cardArea}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={CardImage}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Interactive Learning
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" variant="contained" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} alignItems="right">
        <Footer />
      </Grid>
    </Grid>
  );
}
export default HomeBody
