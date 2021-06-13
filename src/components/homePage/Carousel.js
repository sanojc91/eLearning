import React, { setState } from "react";
import { AutoRotatingCarousel } from "material-auto-rotating-carousel";
import { Button } from "@material-ui/core/";

import { red, blue, green } from "@material-ui/core/colors";
import Slide from "@material-ui/core/Slide";

const Carousel = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: 500 }}>
      <Button onClick={() => setState({ open: true })}>Open carousel</Button>
      <AutoRotatingCarousel
        label="Get started"
        open="ture"
        onClose={() => setState({ open: false })}
        onStart={() => setState({ open: false })}
        style={{ position: "absolute" }}
      >
        <Slide
          media={
            <div>
              <img src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png" />
            </div>
          }
          mediaBackgroundStyle={{ backgroundColor: red[400] }}
          style={{ backgroundColor: red[600] }}
          title="This is a very cool feature"
          subtitle="Just using this will blow your mind."
        />
        <Slide
          media={
            <div>
              <img src="http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png" />
            </div>
          }
          mediaBackgroundStyle={{ backgroundColor: blue[400] }}
          style={{ backgroundColor: blue[600] }}
          title="Ever wanted to be popular?"
          subtitle="Well just mix two colors and your are good to go!"
        />
      </AutoRotatingCarousel>
    </div>
  );
};

export default Carousel;
