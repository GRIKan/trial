import React from 'react';
import { NavLink } from 'react-router-dom';

const Explore = () => {
    return (
        <div className= "explore">
            <NavLink>
                <div className= "explorebuttons" >
                    Γενικά
                </div>
            </NavLink>
            <NavLink>
                <div className= "explorebuttons" >
                    Κάρτες
                </div>
            </NavLink>
            <NavLink>
                <div className= "explorebuttons" >
                    Κατηγορίες
                </div>
            </NavLink>
        </div>
    )
}

export default Explore;