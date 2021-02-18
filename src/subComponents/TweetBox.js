import React from 'react'
import '../styles/TweetBox.css'
import {Avatar, Button} from '@material-ui/core'

function TweetBox () {
    return (
        <div className="tweet-box">
            <form>
                <div className="input">
                    <Avatar src=""/>
                    <input
                    type="text"
                    placeholder="your message"/>
                </div>
                <input
                className = "tweetbox-imgInput"
                placeholder="your image" />
                <Button className="tweetbox-btn">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox