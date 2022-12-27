import React from 'react';
import { useLocation } from 'react-router-dom';
import Experiments from './Experiments';
import Settings from './Settings';
import Createdit from '../CreateSort/Createdit';

const Container = ( {user, setUser, exps, setExps, setTheexp, setSure, setPop} ) => {
    var location= useLocation();

    const renderContent = () => {
        if (location.pathname === '/dashboard') {
            return (
                <Experiments user= {user} exps= {exps} setExps= {setExps} setTheexp= {setTheexp} setSure= {setSure}     
                    setPop= {setPop} />
            )
        }
        else if (location.pathname === '/dashboard/settings') {
            return (
                <Settings user= {user} setUser= {setUser} setPop= {setPop} />
            )
        }
        else if (location.pathname === '/dashboard/create') {
            return (
                <Createdit key= "create" user= {user} exps= {exps} setExps= {setExps} setPop= {setPop} />
            )
        }
        else {
            return (
                <Createdit key= "edit" user= {user} exps= {exps} setExps= {setExps} setPop= {setPop} />
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