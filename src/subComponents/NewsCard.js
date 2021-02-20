import React from 'react'
import '../styles/Newscard.css'

function NewsCard ({data}) {
    return (
        <div className="news-card">
            <div className="whole-info">
            <div className="author-info">
                <p className="author">{data.author}</p>
                <p className="date">{data.publishedAt}</p>
            </div>
            <p className="text">{data.title}</p>
            </div>
            
            <img src={data.urlToImage} alt={data.author} className="image"/>
        </div>
    )
}

export default NewsCard