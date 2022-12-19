import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Sort from './Components/Sort/Sort';

function App() {
    const [auth, setAuth] = useState(true);

  return (
    <div className= "App">
        <BrowserRouter>
            {/* <Sort /> */}
            <Routes>
                <Route path= "/*" element= {<Home auth= {auth} setAuth= {setAuth} />} />
                <Route path= "/dashboard/*" element= {<Dashboard auth= {auth} setAuth= {setAuth} />} />
            </Routes>
                {/* {auth && <Navigate to= "/dashboard" replace />} */}
        </BrowserRouter>
    </div>
  );
}

export default App;