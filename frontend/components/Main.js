import React from 'react'
import Card from './card'

export default function Main({
    mainArticles,
    secondaryArticles,
    asideArticles,
}) {
    console.log(mainArticles, secondaryArticles, asideArticles)
    return (
        <div className='main'>
            <div className='main-up'>
                <div className='main-up-left'></div>
                <div className='main-up-center'></div>
                <div className='main-up-right'></div>
            </div>

            <div className='main-down'>
                {secondaryArticles.map(article => { 
                    return (<Card key={article.title} article={article} />) 
                })}
            </div>
        </div>
    )
}
