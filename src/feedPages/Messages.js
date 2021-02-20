import React from 'react'
import './styles/Messages.css'
import DraftsIcon from '@material-ui/icons/Drafts';

function Messages () {
    return (
        <div className="messages">
            <div className="header">
                <h2>Messages</h2>
            </div>
            <div className="message-list">
                <div className="message">
                    <DraftsIcon className="icon" />
                    <h4>Sorry, you don't have any messages</h4>
                </div>

            </div>
        </div>
    )
}

export default Messages