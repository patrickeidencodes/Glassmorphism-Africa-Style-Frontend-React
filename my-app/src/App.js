import React from 'react'
import GlobalStyles from "./Global.jsx";
import { ThemeProvider } from 'styled-components'
import Aos from "aos";
import "aos/dist/aos.css"
import { Inhalt } from './components/Inhalt.jsx';

function App (){
  return (
    <>
        <GlobalStyles></GlobalStyles>
        <Inhalt />
    </>
  )
};

export default App;