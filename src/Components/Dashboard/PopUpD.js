import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const popupVariants= {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    exit: {
        opacity: 0,
    }
};

const PopUp = ( {pop, setPop} ) => {
    const renderPop = () => {
        switch(pop) {
            default: return;
            case 1: return "Συνδεθήκατε!";
            case 2: return "Άλλαξαν!";
            case 3: return "Άλλαξε!";
            case 4: return "Διαγράφηκε!";
        };
    };

    useEffect(() => {
        setTimeout(function() {
            setPop(false);
        }, 1000);
    }, [setPop]);

    return (
        <motion.div className= "popup d" {...popupVariants} data-pop= {pop} >
            {renderPop()}
        </motion.div>
    )
}

export default PopUp;