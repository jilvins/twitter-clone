import React, { useContext} from 'react'
import {Switch, Route} from 'react-router-dom' 
import './App.css';
import Sidebar from './components/Sidebar.js'
import Feed from './components/Feed.js'
import Widget from './components/Widget.js';
import Explore from './feedPages/Explore.js';
import Notifications from './feedPages/Notifications';
import Messages from './feedPages/Messages.js'
import Notyet from './feedPages/Notyet.js'
import Settings from './feedPages/Settings.js'
import styled, {ThemeProvider} from 'styled-components'
import {lighTheme, darkTheme, GlobalStyles} from './Themes.js'
import {Context} from './ContextProvider.js'

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
  
`;

function App() {
const { theme} = useContext(Context);

  return (
    <ThemeProvider theme={theme === "light" ? lighTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
      
    <div className="app">
    
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Feed />
        </Route>
        <Route path="/explore">
          <Explore />
        </Route>
        <Route path="/notifications">
          <Notifications />
        </Route>
        <Route path="/messages">
          <Messages />
        </Route>
        <Route path="/notyet">
          <Notyet />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </Switch>
      <Widget />
    </div>
    </StyledApp>
    </ThemeProvider>
  
  );
}

export default App;
