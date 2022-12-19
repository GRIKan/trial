import React, { useEffect } from 'react';
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
};

const PopUp = ( {pop, setPop, changelang} ) => {
    const renderPop = () => {
        switch(pop) {
            default: return;
            case 1: return (changelang ? "Progress Saved!" : "Αποθήκευση!");
            case 2: return (changelang ? "Comments Saved!" : "Αποθηκεύτηκαν!");
            case 3: return (changelang ? "Added to Category!" : "Προστέθηκε!");
            case 4: return (changelang ? "Category Created!" : "Δημιουργήθηκε!");
            case 5: return (changelang ? "Category Renamed!" : "Μετονομάστηκε!");
            case 6: return (changelang ? "Category Deleted!" : "Διαγράφηκε!");
            case 7: return (changelang ? "Cards Deleted!" : "Διαγράφηκαν!");
        };
    };

    useEffect(() => {
        setTimeout(function() {
            setPop(false);
        }, 1000);
    }, [setPop]);

    return (
        <motion.div className= "popup s" {...popupVariants} >
            {renderPop()}
        </motion.div>
    );
}

export default PopUp;