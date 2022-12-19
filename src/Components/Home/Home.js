import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './HeaderH';
import Board from './Board';
import Notes from './Notes';
import Forgot from './Forgot';
import PopUp from './PopUpH';
import './Home.css';

const Home = ( {auth, setAuth} ) => {
    const [pop, setPop] = useState(0);

    if (auth) {
        return <Navigate to="/dashboard" replace />;
    };

    return (
        <div className= "home">
            <Header />
            <Routes>
                <Route path= "/" element= {<Board />} />
                <Route path= "/about" element= {<Notes />} />
                <Route path= "/features" element= {<Notes />} />
                <Route path= "/login" element= {<Notes setAuth= {setAuth} />} />
                <Route path= "/signup" element= {<Notes setPop= {setPop} />} />
                <Route path= "/forgotpassword" element= {<Forgot setPop= {setPop} />} />
                <Route path="*" element= {<Navigate to="/" />} />
            </Routes>
            <AnimatePresence>
                {pop && <PopUp pop= {pop} setPop= {setPop} />}
            </AnimatePresence>
        </div>
    )
}

export default Home;