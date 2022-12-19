import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import About from './About';
import Features from './Features';
import Login from './LogIn';
import SignUp from './SignUp';

const Notes = ( {setPop, setAuth} ) => {
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
                <Login setAuth= {setAuth} />
            )
        }
        else if (location.pathname === '/signup') {
            return (
                <SignUp setPop= {setPop} />
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