import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './HeaderD';
import Container from './Container';
import Results from '../Results/Results';
import Sure from './SureD';
import PopUp from './PopUpD';
import './Dashboard.css';
import users from '../Data/users.json';
import experiments from '../Data/experiments.json';

const Dashboard = ( {auth, setAuth} ) => {
    const [user, setUser] = useState(users.find(item => item.user_id === "1"));
    const [exps, setExps] = useState(experiments);

    const [sure, setSure] = useState();
    const [theexp, setTheexp] = useState();

    const [pop, setPop] = useState(0);

    useEffect(() => {
        window.addEventListener('load', function() {
            if (window.location.pathname === "/dashboard") {
                setPop(1);
            };
        });
        // window.localStorage.clear();
    }, []);

    if (!auth) {
        return <Navigate to="/" replace />;
    };

    // console.log(window.location.pathname);

    return (
        <div className= "dashboard">
            <Header setSure= {setSure} />
            <Routes>
                <Route path= "/" element= {<Container exps= {exps} setTheexp= {setTheexp}
                    setSure= {setSure} setPop= {setPop} />} />
                <Route path= "/settings" element= {<Container user= {user} setUser= {setUser} setPop= {setPop} />} />
                <Route path= "/create" element= {<Container />} />
                <Route path= "/:id" element= {<Container />} />
                <Route path= "/:id/results" element= {<Results />} />
                <Route path="*" element= {<Navigate to="/" replace />} />
            </Routes>
            <AnimatePresence>
                {sure && <Sure setAuth= {setAuth} exps= {exps} setExps= {setExps} 
                    theexp= {theexp} sure= {sure} setSure= {setSure} setPop= {setPop} />}
            </AnimatePresence>
            <AnimatePresence>
                {pop && <PopUp pop= {pop} setPop= {setPop} />}
            </AnimatePresence>
        </div>
    )
}

export default Dashboard;