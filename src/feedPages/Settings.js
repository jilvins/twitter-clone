import React, { useContext} from 'react'
import './styles/Settings.css'
import {Context} from '../ContextProvider.js'



function Settings () {
  const { themeToggler } = useContext(Context);

    return (
        <div className="settings">
        <p>This is setting page</p>
        <button onClick={() => themeToggler()}>Change Theme</button>
        </div>
    )
}

export default Settings