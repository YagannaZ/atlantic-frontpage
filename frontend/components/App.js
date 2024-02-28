import React, {useState, useEffect} from 'react'
// import data from './data.json'
import Header from './Header'
import Main from './Main'
import axios from 'axios'

export default function App() {
    const [data, setData] = useState(null)
    
    useEffect(() => {
        console.log('comp en DOM')
        axios.get('/api/frontpage').then(futureData => {
            const frontpage = futureData.data
            setData(frontpage)
        })
        console.log('No espera a DATA para funcionar')
    }, [])
    
    if (!data) return <h1>Cargando datos...</h1>
    return (
        <div>
            <Header contenido={data.header} />
            <Main
                    mainArticles={data.mainArticles}
                secondaryArticles={data.secondaryArticles}
                asideArticles={data.asideArticles} />
        </div>
    )
}
