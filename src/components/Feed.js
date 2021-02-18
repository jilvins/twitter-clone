import React from 'react'
import TweetBox from '../subComponents/TweetBox.js'
import Post from '../subComponents/Post.js'
import '../styles/Feed.css'

function Feed () {
    return (
        <div className="feed">
            <div className="header">
                <h2>Home</h2>
            </div>
            <TweetBox />
            <Post />
        </div>
    )
}

export default Feed