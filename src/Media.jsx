import { useEffect, useState } from "react"
import SideBar from "./components/SideBar"
import style from './Media.module.css'


export const Media = () => {
    const [n1, setN1] = useState()
    const [n2, setN2] = useState()
    const [n3, setN3] = useState()
    const [n4, setN4] = useState()
    const [n5, setN5] = useState()
    const [media, setMedia] = useState()

    useEffect(() => {
        if (n1 !== undefined && n2 !== undefined && n3 !== undefined && n4 !== undefined && n5 !== undefined) {
            setMedia((parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4) + parseFloat(n5)) / 5)
        }
    }), [n1, n2, n3, n4, n5]


    return (
        <>

            <SideBar />
            <main className={style.wrapMedia}>
                <div>
                    <h1>Média</h1>
                    <div className={style.inputContainer}>
                        <div className={style.number}>
                            <label htmlFor="n1">Numero 1</label>
                            <input id="n1" placeholder="Digite o numero 1" onChange={e => setN1(e.target.value)}></input>
                        </div>
                        <div className={style.number}>
                            <label htmlFor="n2">Numero 2</label>
                            <input id="n2" placeholder="Digite o numero 2" onChange={e => setN2(e.target.value)}></input>
                        </div>
                        <div className={style.number}>
                            <label htmlFor="n3">Numero 3</label>
                            <input id="n3" placeholder="Digite o numero 3" onChange={e => setN3(e.target.value)}></input>
                        </div>
                        <div className={style.number}>
                            <label htmlFor="n4">Numero 4</label>
                            <input id="n4" placeholder="Digite o numero 4" onChange={e => setN4(e.target.value)}></input>
                        </div>
                        <div className={style.number}>
                            <label htmlFor="n5">Numero 5</label>
                            <input id="n5" placeholder="Digite o numero 5" onChange={e => setN5(e.target.value)}></input>
                        </div>

                    </div>
                </div>
                <div className={style.media}>
                    <h2>Resultado</h2>
                    {!isNaN(media) && <p>{media}</p>}
                </div>
            </main>

        </>
    )
}