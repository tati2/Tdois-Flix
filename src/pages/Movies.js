import React from "react"
import apiFilmes from "../services/MoviesApi"
import GlobalStyle from "./GlobalStyle"
import * as S from "./Style"


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
            <S.Container>
                <GlobalStyle/>
                <S.Busca>
                    <h1>Filmes</h1>
                    <S.CampoBusca
                        type="text"
                        placeholder="buscar..."
                        onChange={this.filtro}
                    />
                </S.Busca>
                <S.BoxMap>
                    {this.state.pesquisaDeFilmes.map((item) => (
                        <S.Card>
                            <S.TitleRef>{item.title}</S.TitleRef>
                            <S.Img src={item.poster_path} alt={item.title} />
                            {/* <p>{item.overview}</p> */}
                        </S.Card>
                    ))}
                </S.BoxMap>
            </S.Container>
        )
    }
}
