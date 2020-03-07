import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/homepage-menu-directory/directory.component";
import { HomePageContainer } from "./homepage.styles";
const Homepage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default Homepage;