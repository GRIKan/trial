import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Explore from './Explore';
import './Createdit.css';

const Createdit = ( {exps, setExps, setPop} ) => {
    return (
        <div className= "createdit">
            <Explore />
            <Routes>
            </Routes>
        </div>
    )
}

export default Createdit;