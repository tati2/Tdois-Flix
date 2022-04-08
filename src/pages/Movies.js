import React from "react"
import apiFilmes from "../services/MoviesApi"

import styled from "styled-components"

const Card = styled.div`
width: 100%;
display:flex;
flex-wrap:wrap;
`
const Img = styled.img`
width: 30%;
`

const Busca = styled.div`
display:flex;
justify-content: space-around;
align-items: center;
height: 20vh;
`

const CampoBusca = styled.input`
width: 40%;
height: 5vh;
border-radius: 10px;
text-align: center;

`


export default class Movies extends React.Component {

    state = {
        listFilmes: [],
        pesquisaDeFilmes: []
    }

    componentDidMount() {
        this.getFilmes()
    }

    getFilmes = async () => {
        const response = await apiFilmes.get()
        //console.log(response.data.results)

        const filmes = response.data.results.map((item) => {
            return {
                ...item,
                poster_path: `https://image.tmdb.org/t/p/w300/${item.poster_path}`
            }
        })

        this.setState({
            listFilmes: filmes,
            pesquisaDeFilmes: filmes
        })
    }

    filtro = (event) => {
        const { listFilmes } = this.state

        const filmesfiltrados = listFilmes.filter((item) => {
            if (item.title.toLowerCase().includes(event.target.value.toLowerCase())) {
                return true
            }
        });

        this.setState({
            pesquisaDeFilmes: filmesfiltrados
        })
    }


    render() {
        return (
            <div>
                <Busca>
                    <h1>Filmes</h1>
                    <CampoBusca
                        type="text"
                        placeholder="buscar..."
                        onChange={this.filtro}
                    />
                </Busca>
                <Card>
                    {this.state.pesquisaDeFilmes.map((item) => (
                        <div>
                            {/* <h2>{item.title}</h2> */}
                            <Img src={item.poster_path} alt={item.title} />
                            {/* <p>{item.overview}</p> */}
                        </div>
                    ))}
                </Card>
            </div>
        )
    }
}
