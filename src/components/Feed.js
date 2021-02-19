import React, {useState, useEffect} from 'react'
import TweetBox from '../subComponents/TweetBox.js'
import Post from '../subComponents/Post.js'
import '../styles/Feed.css'
import db from '../firebase.js'
import FlipMove from 'react-flip-move'

function Feed () {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').orderBy("timestamp", "desc")
        .onSnapshot(snapshot =>{
            setPosts(snapshot.docs.map(doc=> doc.data()))
        })
    }, [])

    return (
        <div className="feed">
            <div className="header">
                <h2>Home</h2>
            </div>
            <TweetBox />
            <FlipMove>
            {posts.map(post => (
                <Post 
                key = {post.text}
                displayName = {post.displayName}
                username = {post.username}
                verified = {post.verified}
                text = {post.text}
                image = {post.image}
                avatar = {post.avatar}
            />))}
            </FlipMove>
        </div>
    )
}

export default Feed