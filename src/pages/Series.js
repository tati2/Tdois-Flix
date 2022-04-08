import React from "react"
import axios from "axios"
import * as S from "./Style"

const apiSeries = axios.create({
    baseURL: "https://api.themoviedb.org/3/tv/popular?api_key=f5e33b7872870b499cdef685aff18b48&language=pt-BR"
})

export default class Series extends React.Component {

    state = {
        listSeries: [],
        buscaSeries: []
    }

    componentDidMount() {
        this.getSeries()
    }

    getSeries = async () => {
        const responseTv = await apiSeries.get()
        //console.log(response.data.results)

        const series = responseTv.data.results.map((item) => {
            return {
                ...item,
                poster_path: `https://image.tmdb.org/t/p/w300/${item.poster_path}`
            }
        })

        this.setState({
            listSeries: series,
            buscaSeries: series
        })
    }

    filtroBusca = (event) => {
        let { listSeries } = this.state

        const filtroSeries = listSeries.filter((item) => {
            if (item.name.toLowerCase().includes(event.target.value.toLowerCase())) {
                return true;
            }
        })

        this.setState({
            buscaSeries: filtroSeries
        })
    }

    render() {
        return (
            <div>
                <S.Busca>
                <h1>Series</h1>
                <S.CampoBusca onChange={this.filtroBusca} />
                </S.Busca>
                <S.BoxMap>
                    {this.state.buscaSeries.map((item) => (
                        <div>
                            <h2>{item.name}</h2>
                            <S.Img src={item.poster_path} alt={item.name} />
                        </div>
                    ))}
                </S.BoxMap>
            </div>
        )
    }
}
