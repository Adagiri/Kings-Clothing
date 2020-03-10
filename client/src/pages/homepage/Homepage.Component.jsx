import React, {Profiler} from "react";
import "./homepage.styles.scss";
import Directory from "../../components/homepage-menu-directory/directory.component";
import { HomePageContainer } from "./homepage.styles";
const Homepage = () => {
  return (
    <HomePageContainer>
    <Profiler id="Directory" onRender={(id, phase, actualDuration) => {
      console.log({
         id,
       phase,
         actualDuration
      })
    }}>
    <Directory />
    </Profiler>
    </HomePageContainer>
  );
};

export default Homepage;
