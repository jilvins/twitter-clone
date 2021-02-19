import React, {forwardRef} from 'react'
import '../styles/Post.css'
import {Avatar} from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat } from '@material-ui/icons'

const  Post = forwardRef(
    ({
        displayName,
        username,
        verified, 
        text, 
        image, 
        avatar
}, ref) => {
    return (
        <div className="post" ref={ref}>
            <div className="avatar">
                <Avatar 
                src = {avatar}/>
            </div>
            <div className="post-body">
                <div className="post-header">
                    <div className="post-header-text">
                        <h3>{displayName}
                        <span className="post-header-special">
                            {verified &&<VerifiedUserIcon className="post-badge"/>}
                            @{username}
                        </span>
                        </h3>
                    </div>
                    <div className="post-header-description">
                        <p>{text}</p>
                    </div>
                </div>
            <img src={image} alt="" />
            <div className="post-footer"></div>
                <ChatBubbleOutline />
                <Repeat />
                <FavoriteBorder />
                <Publish />
            </div>
        </div>
    )
})

export default Post