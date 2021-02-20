import React, {useContext} from 'react'
import {Context} from '../ContextProvider.js'
import NewsCard from '../subComponents/NewsCard.js'
import './styles/Explorer.css'

function Explore () {
    const { data } = useContext(Context);
    return (
        <div className="explore">
            <h2>What’s happening</h2>
            <div>
            {data? data.articles.map((news) => (
              <NewsCard data={news} key={news.url} />
            )): "Loading"}
            </div>
        </div>
    )
}

export default Explore