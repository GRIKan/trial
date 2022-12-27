import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './HeaderH';
import Board from './Board';
import Notes from './Notes';
import Forgot from './Forgot';
import PopUp from './PopUpH';
import './Home.css';

const Home = ( {users, setUsers, user, setUser} ) => {
    const [pop, setPop] = useState(0);

    // console.log(user);
    if (user !== '0') {
        return <Navigate to="/dashboard" replace />;
    };

    return (
        <div className= "home">
            <Header />
            <Routes>
                <Route path= "/" element= {<Board />} />
                <Route path= "/about" element= {<Notes />} />
                <Route path= "/features" element= {<Notes />} />
                <Route path= "/login" element= {<Notes users= {users} setUsers= {setUsers} setUser= {setUser} />} />
                <Route path= "/signup" element= {<Notes users= {users} setUsers= {setUsers} setPop= {setPop} />} />
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