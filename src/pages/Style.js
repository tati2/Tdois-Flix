import styled from "styled-components"

export const Container = styled.div`
    width:100%;
    min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* background-color: green; */
`

export const BoxMap = styled.div`
  display: flex;
  width: 90vw;
  /* height: 70vh; */
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  color:#fff;
  /* background: tomato; */
`

export const TitleRef = styled.h2`
font-size: 0.5em;
`

export const Card = styled.div`
display:flex;
height: 65vh;
flex-direction:column;
/* background-color:blue; */
justify-content: space-around;
margin: 5px;
text-align:center;
`

export const Img = styled.img`
width: 20vw;
margin: 5px;
`

export const Busca = styled.div`
width:100%;
display:flex;
justify-content: space-around;
align-items: center;
height: 20vh;
color:#fff;
/* background-color:red; */
`

export const CampoBusca = styled.input`
width: 40%;
height: 6vh;
border-radius: 10px;
text-align: center;
`