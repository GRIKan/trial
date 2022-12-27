import React from 'react';
import { useLocation } from 'react-router-dom';
import About from './About';
import Features from './Features';
import Login from './LogIn';
import SignUp from './SignUp';

const Notes = ( {users, setUsers, setUser, setPop} ) => {
    var location= useLocation();

    const renderContent = () => {
        if (location.pathname === '/about') {
            return (
                <About />
            )
        }
        else if (location.pathname === '/features') {
            return (
                <Features />
            )
        }
        else if (location.pathname === '/login') {
            return (
                <Login users= {users} setUser= {setUser} />
            )
        }
        else if (location.pathname === '/signup') {
            return (
                <SignUp users= {users} setUsers= {setUsers} setPop= {setPop} />
            )
        };
    };

    return (
        <div className= "notes">
            {renderContent()}
        </div>
    )
};

export default Notes;