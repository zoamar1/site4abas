import { useState } from "react"
import SideBar from "./components/SideBar"
import Card from "./components/Card"

import style from './Tech.module.css'



export const Tech = () => {
    const [lang, setLang] = useState('all')

    const reactSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
    const viteSrc = 'https://vitejs.dev/logo.svg'
    const axiosSrc = 'https://assets-global.website-files.com/5e19ea5aa7d3a217492e372b/624de949df5a11680ab170b9_Axios%20logo%20-%20RGB%20-%20minimum%20space.png'
    const rrdSrc = 'https://static-00.iconduck.com/assets.00/react-router-icon-2048x1116-jfeevj0l.png'
    const npmSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png'
    const nodeSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png'

    return (
            <>

            <SideBar />

            <main>
                <div className={style.titleDiv}>
                    <h1>Technologies</h1>
                </div>
                
                <div className={style.buttonContainer}>
                    <button onClick={() => setLang('all')}>Todas</button>
                    <button onClick={() => setLang('react')}>React</button>
                    <button onClick={() => setLang('vite')}>Vite</button>
                    <button onClick={() => setLang('axios')}>Axios</button>
                    <button onClick={() => setLang('rrd')}>React Router Dom</button>
                    <button onClick={() => setLang('npm')}>Node Package Manager</button>
                    <button onClick={() => setLang('node')}>Node.js</button>
                </div>

                <div className={style.cardsContainer}>
                    {lang === 'react' && <Card title='React' height={140} width={160} source={reactSrc} desc='O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.' />}
                    {lang === 'vite' && <Card title='Vite' height={150} width={150} source={viteSrc} desc='O Vite é um bundler e um dev-server que você consegue usar compiladores e frameworks direto da caixa, com zero configuração.' />}
                    {lang === 'axios' && <Card title='Axios' height={110} width={160} source={axiosSrc} desc='O Axios é um biblioteca que permite uma integração do seu projeto React para qualquer serviço de API disponível.' />}
                    {lang === 'rrd' && <Card title='React Router Dom' height={100} width={150} source={rrdSrc} desc='O React Router é um excelente gerenciador de rotas em projetos React, tornando o desenvolvimento muito mais simples e escalável.' />}
                    {lang === 'npm' && <Card title='Node Package Manager' height={70} width={150} source={npmSrc} desc='O NPM é uma ferramenta do Node.js para o gerenciamento de pacotes, que permite instalar, desinstalar e atualizar dependências em uma aplicação' />}
                    {lang === 'node' && <Card title='Node.js' height={100} width={150} source={nodeSrc} desc='Node.js é um ambiente de execução JavaScript que permite executar aplicações desenvolvidas com a linguagem de forma autônoma, sem depender de um navegador.' />}
                    {lang === 'all' &&
                        <>
                            <Card title='React' height={140} width={160} source={reactSrc} desc='O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.' />
                            <Card title='Vite' height={150} width={150} source={viteSrc} desc='O Vite é um bundler e um dev-server que você consegue usar compiladores e frameworks direto da caixa, com zero configuração.' />
                            <Card title='Axios' height={110} width={160} source={axiosSrc} desc='O Axios é um biblioteca que permite uma integração do seu projeto React para qualquer serviço de API disponível.' />
                            <Card title='React Router Dom' height={100} width={150} source={rrdSrc} desc='O React Router é um excelente gerenciador de rotas em projetos React, tornando o desenvolvimento muito mais simples e escalável.' />
                            <Card title='Node Package Manager' height={70} width={150} source={npmSrc} desc='O NPM é uma ferramenta do Node.js para o gerenciamento de pacotes, que permite instalar, desinstalar e atualizar dependências em uma aplicação' />
                            <Card title='Node.js' height={100} width={150} source={nodeSrc} desc='Node.js é um ambiente de execução JavaScript que permite executar aplicações desenvolvidas com a linguagem de forma autônoma, sem depender de um navegador.' />
                        </>
                    }
                </div>

            </main>

            </>
    )
}