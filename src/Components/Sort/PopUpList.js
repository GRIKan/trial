import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const popupVariants= {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: { delay: 0.1 }
    },
    exit: {
        opacity: 0,
    }
}

const PopUp = ( {pop, setPop, thepops, setThepops} ) => {
    const renderPop = (pops) => {
        switch(pops) {
            default: return;
            case 1: return "Progress Saved!";
            case 2: return "Comments Saved!";
            case 3: return "Added to Category!";
            case 4: return "Category Added!";
            case 5: return "Category Renamed!";
            case 6: return "Category Deleted!";
            case 7: return "Cards Deleted!";
        };
    };

    // const [thepops, setThepops] = useState([]);
    // var counter= 0;

    // useEffect(() => {
    //     setTimeout(function() {
    //         thepops.splice(0, 1);
    //         setThepops(thepops);
    //     }, 1500);
    // }, [setPop]);

    // useEffect(() => {
    //     setTimeout(function() {
    //         setPop(false);
    //     }, 1500);
    // }, [setPop]);
    

    {/* <PopUp key= {pops} pop= {pop} setPop= {setPop} /> */}

    return (
        <motion.div className= "popuplist">
            {thepops.map( pops => {
                return (
                    <motion.div key= {Math.random() * 1000} className= "popup">
                        {renderPop(pops)}
                    </motion.div>
                )
            }) }
        </motion.div>
    );
}

export default PopUp;