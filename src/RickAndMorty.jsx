import SideBar from "./components/SideBar"
import { useState, useEffect } from "react"
import style from './RickAndMorty.module.css'

import { apiURL } from "./api/apiRickAndMorty.js"
import CardRM from "./components/CardRM.jsx"
export const RickAndMorty = () => {

    const [data, setData] = useState([])
    const [page, setPage] = useState("")
    const [searchName, setSearchName] = useState("")

    useEffect(() => {
        apiURL.get(`/character/?page=${page}&name=${searchName}`).then((response) => {
            if (!response.data.results) {
                console.log("Vazio")
            }
            setData(response.data.results)
        }).catch((error) => {
            if (error.response.status === 404) {
                console.log("Não encontramos este personagem")
            }
            console.error(error)
        })
    }, [page, searchName])
    
    return (
        <>
            <SideBar />
            <main className={style.main}>
                <h1>Rick and Morty API</h1>
                <div className={style.containerInputs}>

                <input type="text" placeholder="Digite uma pagina" value={page} onChange={(event) => setPage(event.target.value)} />

                <input type="text" placeholder="Digite um nome" value={searchName} onChange={(event) => setSearchName(event.target.value)} />

                </div>
                <section className={style.cardContainer}>

                    {data.map((item) => {
                        return (
                            <div>
                                <CardRM name={item.name} desc={item.species} value={item.gender} image={item.image} state={item.status}/>
        
                            </div>

                        )
                    })}

                </section>
            </main>
        </>
    )
}