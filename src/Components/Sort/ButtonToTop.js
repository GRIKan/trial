import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Arrow from '../../Images/totop.png';
import WhiteArrow from '../../Images/whitetotop.png';

const divVariants= {
    animate: {
        opacity: 1
    },
    exit: {
        opacity: 0
    },
    transition: { duration: 0.2 }
}

const totopVariants= {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    transition: { duration: 0.1 }
}

const ButtonToTop = ( {changelang} ) => {
    const [visible, setVisible] = useState(false);
    const [over, setOver] = useState(false);
  
    const toggleVisible = () => {
        const scrolled = document.querySelector('#scrollbar').scrollTop;
        if (scrolled === 0) {
            setOver(false);
        };
        if (scrolled > 20) {
            setVisible(true);
        }
        else if (scrolled <= 20) {
            setVisible(false);
        };
    }; 
    
    const scrollToTop = () => {
        document.querySelector('#scrollbar').scrollTo({
            top: 0,
            behavior: "smooth"
        });
        setOver(true);
    };

    document.addEventListener('DOMContentLoaded', function() {
        document.querySelector('#scrollbar').addEventListener('scroll', toggleVisible);
    });

    return (
        <AnimatePresence>
            {visible && <motion.div {...divVariants}>
                <motion.button id= "totop" onClick= {scrollToTop} {...totopVariants}
                    title= {changelang ? "Go to top" : "Πάνω"}
                    onMouseOver= {() => setOver(true)} onMouseOut= {() => setOver(false)} 
                    style= {{backgroundColor: (over? 'rgb(100, 23, 41)' : 'rgb(216, 172, 151)'), 
                        transition: 'all 0.5s ease'}} >
                    <img src= {over? WhiteArrow : Arrow} alt= "To Top Icon" style= {{width: '32px', height: '32px'}} />
                </motion.button>
            </motion.div>}
        </AnimatePresence>
    );
}

export default ButtonToTop;