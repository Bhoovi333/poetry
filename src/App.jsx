import React from 'react'

import './App.css'
import BasicExample from './components/body';

import Header from './components/button'

import Newsletter from './components/footer';
import Lolo from './components/lolo';
function App() {
 
  return (
    <>
    <Header />
    <br></br>
   <BasicExample imgsrc="https://i.pinimg.com/236x/df/98/f5/df98f584d4976bd909dd877cc8239698.jpg" 
   title="Caminar Manana" author="-By Skila Brown"/>
    <BasicExample imgsrc="https://i.pinimg.com/236x/b7/75/35/b775359b4297ff3b8f27d2e4937e1f8e.jpg" 
   title="Dante Thelia" author="-By Clevis James"/>
    <BasicExample imgsrc="https://i.pinimg.com/236x/d9/93/a6/d993a64c2639de18a26a69d61d7cba89.jpg" 
   title="Beowulf Volomani" author="-By Charles.h"/>
    <BasicExample imgsrc="https://i.pinimg.com/236x/af/2b/81/af2b812b3b631f6eca2f522e9d52e6d4.jpg" 
   title="The Weight" author="-By Mariana Fritz"/>
   <BasicExample imgsrc="https://i.pinimg.com/236x/f6/1c/a7/f61ca78acc0a464f7065fd8e956b3e69.jpg" 
   title="The Last Skin" author="-By Barbara"/>
     <Lolo/>
<Newsletter/>
  
    </>
  )
}

export default App;
