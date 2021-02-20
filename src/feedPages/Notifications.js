import React from 'react'
import './styles/Notifications.css'
import CakeIcon from '@material-ui/icons/Cake';

function Notifications () {
    return (
        <div className="notifications">
            <div className="header">
                <h2>Notifications</h2>
                <button>All</button>
            </div>
            <div className="notication-list">
                <div className="notification">
                    <CakeIcon className="icon" />
                    <h4>Lets celebrate your user anniversary!</h4>
                </div>

            </div>
        </div>
    )
}

export default Notifications