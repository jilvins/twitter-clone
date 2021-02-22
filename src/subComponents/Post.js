import React, {forwardRef, useState} from 'react'
import '../styles/Post.css'
import {Avatar} from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat } from '@material-ui/icons'
import FavoriteIcon from '@material-ui/icons/Favorite';



const  Post = forwardRef(

    ({
        displayName,
        username,
        verified, 
        text, 
        image, 
        avatar
}, ref) => {

    const [isSelected, setIsSelected] = useState("false")

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
                <ChatBubbleOutline className="post-icon"/>
                <Repeat className="post-icon"/>
                {isSelected ? <FavoriteBorder onClick={() => setIsSelected(!isSelected)} className="post-icon"/> :
                <FavoriteIcon onClick={() => setIsSelected(!isSelected)} className="post-icon"/>}
                <Publish className="post-icon"/>
            </div>
        </div>
    )
})

export default Post