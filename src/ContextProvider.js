import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Context = React.createContext()

function ContextProvider ({children}) {
    const [data, setData] = useState()
        
          useEffect(() => {
            axios
              .get("http://newsapi.org/v2/top-headlines?country=us&apiKey=711e23c5b76540f28de1f6d55db7bd4a")
              .then((response) => setData(response.data))
              .catch((error) => console.log(error));
          }, []);
          console.log(data)
    

    return (
        <Context.Provider value={{data}}>
            {children}
        </Context.Provider>
    )
}


export {ContextProvider, Context}