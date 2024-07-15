import React, { useEffect, useState } from 'react';
import '../Style/main.css'
import Nav from './Nav';
import Header from './Header';
import Know from './Know';
import Projects from './Project';
import Skills from './Skills';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Contact';
import Loader from './Loader';
import Total from './Total';
import Not from './Not';
import Links from './Links';


const App = () => {
    let [apper,setapeer]=useState(false);
    let [laoding,setloading]=useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setapeer(true);
        },3000)

        setTimeout(()=>{
            setloading(false)
        },4500)
        
    },[])
    return ( 
        <BrowserRouter>
        {laoding&&<Loader/>}
        {apper&&<Nav/>}
        <Routes>
            <Route path='/' element={apper&& <Total/>}/>
            <Route path='/know' element={ apper&& <Know/> }/>
            <Route path='/header' element={apper&& <Header/>}/>
            <Route path='/projects' element={apper&& <Projects/>}/>
            <Route path='/Skills' element={ apper&&<Skills/>}/>
            <Route path='/Contact' element={apper&&<Contact/>}/>
            <Route path='*' element={apper&&<Not/>}/>
        </Routes>

        </BrowserRouter>
     );
}
 
export default App;