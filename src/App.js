import React from "react"
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Home from "./pages/Home";
import styled from "styled-components"
import {createGlobalStyle} from "styled-components"


const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
`
const Menu = styled.ul`
display:flex;
justify-content: space-evenly;
align-items: center;
list-style: none;
height: 10vh;
background-color: #696969;
`

const StyledLink = styled(Link)`
color: #fff;
text-decoration: none;
:hover{
  color: tomato;
}
`


export default class App extends React.Component {


  render() {
    return (
      <Router>
        <GlobalStyle/>
        <nav>
          <Menu>
          <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
            <li>
              <StyledLink to="/series">Series</StyledLink>
            </li>
          </Menu>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
        </Routes>
      </Router>
    )

  }
}
