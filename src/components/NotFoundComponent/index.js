import React from "react";

//Routing
import { Link } from "react-router-dom";
//Components
import Button from "../Button";
//Styles
import { Wrapper, Content } from "./NotFoundComponent.styles";

const NotFoundComponent = () => {
  return (
    <Wrapper>
      <Content>
        <h1>Page not found :(</h1>

    
          <Link to="/"><Button text="Home"/></Link>
      
      </Content>
    </Wrapper>
  );
};

export default NotFoundComponent;
