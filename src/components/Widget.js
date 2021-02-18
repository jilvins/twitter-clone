import React from 'react'
import '../styles/Widget.css'
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from 'react-twitter-embed'
import { Search } from '@material-ui/icons'

function Widget () {
    return (
        <div className="widget">
            <div className="widget-input">
                <Search  className="widget-search-icon"/>
                <input placeholder="Searh Twitter"
                type = "text"/>
            </div>
            <div className="widget-container">
                <h2>What's happening</h2>
            
            <TwitterTweetEmbed 
                tweetId={"933354946111705097"}/>
            <TwitterTimelineEmbed 
                sourceType="profile"
                screenName="saurabhnemade"
                options={{height: 400}}/>
            <TwitterShareButton 
            url={"https://facebook.com/saurabhnemade"}
            options = { { text: '#reactjs is awesome', via: 'saurabhnemade' }}/>
            </div>
        </div>
    )
}

export default Widget