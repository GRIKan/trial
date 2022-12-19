import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Experiments from './Experiments';
import Settings from './Settings';
import Createdit from '../CreateSort/Createdit';

const Container = ( {user, setUser, exps, setTheexp, setSure, setPop} ) => {
    var location= useLocation();

    const renderContent = () => {
        if (location.pathname === '/dashboard') {
            return (
                <Experiments exps= {exps} setTheexp= {setTheexp} setSure= {setSure} setPop= {setPop} />
            )
        }
        else if (location.pathname === '/dashboard/settings') {
            return (
                <Settings user= {user} setUser= {setUser} setPop= {setPop} />
            )
        }
        else if (location.pathname === '/dashboard/create') {
            return (
                <Createdit exps= {exps} setTheexp= {setTheexp} setPop= {setPop} />
            )
        }
        else {
            return (
                <Createdit exps= {exps} setTheexp= {setTheexp} setPop= {setPop} />
            )
        };
    };

    return (
        <div className= "containerd" id= "containerdscrollbar">
            {renderContent()}
        </div>
    )
};

export default Container;