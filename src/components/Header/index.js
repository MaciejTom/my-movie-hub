import React from "react";

//Routing
import { Link } from "react-router-dom";
//Images
import TMDBLogo from "../../images/tmdb_logo.svg";
import MMHLogo from "../../images/mymoviehub.jpg";
//Styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={MMHLogo} alt="rmdb-logo" />
        </Link>
        <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
      </Content>
    </Wrapper>
  );
};

export default Header;
