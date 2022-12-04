import React from 'react';
import Header from './Header';
import Board from './Board';
import Footer from './Footer';
import './Home.css';

const Home = () => {
    return (
        <div className= "home">
            <Header />
            <Board />
        </div>
    )
}

export default Home;