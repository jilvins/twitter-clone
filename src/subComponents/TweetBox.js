import React, {useState} from 'react'
import '../styles/TweetBox.css'
import {Avatar, Button} from '@material-ui/core'
import db from '../firebase.js'
import firebase from 'firebase'

function TweetBox () {

        const [tweetMessage, setTweetMessage] = useState("");
        const [tweetImage, setTweetImage] = useState("");

        const sendTweet = (e) => {
            e.preventDefault()

            db.collection('posts').add({
                displayName: "TwitterExplorer",
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                username: "jilvins",
                verified: true,
                text: tweetMessage,
                image: tweetImage,
                avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/768px-User_icon_2.svg.png" 
            })
            setTweetMessage("")
            setTweetImage("")
        }
    return (
        <div className="tweet-box">
            <form>
                <div className="input">
                    <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/768px-User_icon_2.svg.png"/>
                    <input
                    onChange = {(e) => setTweetMessage(e.target.value)}
                    value = {tweetMessage}
                    type="text"
                    placeholder="your message"/>
                </div>
                <div className="input">
                <Avatar src="https://www.pngfind.com/pngs/m/257-2576804_icon-maker-pro-4-gallery-icon-png-transparent.png"/>
                <input
                onChange = {(e) => setTweetImage(e.target.value)}
                value = {tweetImage}
                className = "tweetbox-imgInput"
                placeholder="your image src" 
                type = "text"/>
                </div>
                <Button 
                    onClick = {sendTweet}
                    className="tweetbox-btn">Tweet</Button>
                
            </form>
        </div>
    )
}

export default TweetBox