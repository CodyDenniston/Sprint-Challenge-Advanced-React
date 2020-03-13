import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";

const MySection = styled.section`
display: flex;
justify-content: space-around;
font-size: 1.5rem;
margin-bottom: 20px;

`
const Myh1 = styled.h1`
background: slategrey;
border: 3px solid darkviolet
`
export default function Header() {
  return (
    <header className="ui centered">
      <Myh1 className="ui center">Womens World Cup</Myh1>
      <MySection>
      <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/SearchForm">SearchForm</Link>
        </div>
       
        </MySection>
    </header>
  );
}