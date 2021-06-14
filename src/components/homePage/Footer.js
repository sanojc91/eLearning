import React from "react";
import { AppBar, Container, Toolbar, Typography, makeStyles } from "@material-ui/core"
import grey from "@material-ui/core/colors/grey";

const myStyles = makeStyles({
    rootStyles: {
        color: grey[900]
    }
});

function Footer(){

    const classes = myStyles()
    return (
      <AppBar position="center" className={classes.rootStyles}>
        <Container maxWidth="xs" justify="center">
          <Toolbar>
            <Typography variant="body1">
              © 2021 Strudy With Panda
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    );


}
export default Footer;