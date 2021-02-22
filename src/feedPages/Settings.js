import React, { useContext} from 'react'
import './styles/Settings.css'
import {Context} from '../ContextProvider.js'



function Settings () {
  const { themeToggler } = useContext(Context);

    return (
        <div className="settings">
        <div className="header">
        <h2>This is setting page</h2>
        </div>
        <div className="btn-container">
        <button onClick={() => themeToggler()}>Change Theme</button>
        </div>
        </div>
    )
}

export default Settings