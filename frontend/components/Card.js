import React from 'react'
import aLogo from './logo.png'

export default function Card({ article }) {
    return (
        <div key={article.title} className='card'>
            <img src={aLogo} />
            <div>{article.imageCredit}</div>
            <div>{article.title}</div>
            <div>{article.subtitle}</div>
            <div>{article.author}</div>
        </div>
    )
}
