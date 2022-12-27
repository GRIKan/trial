import React from 'react';
import { motion } from 'framer-motion';

const sureVariants = {
    initial: {
        scale: 0
    },
    animate: {
        scale: 1,
        transition: { duration: 0.3 }
    },
    exit: {
        scale: 0, 
        transition: { duration: 0.2 }
    }
}

const Sure = ( {setUserId, exps, setExps, theexp, sure, setSure, setPop} ) => {
        const renderSure = () => {
            switch(sure) {
                default: return;
                case 1: return "να αποσυνδεθείτε;";
                case 2: return "διαγράψετε αυτό το πείραμα;";
            };
        };

        const no = () => {
            setSure(null);
        };

        const yes = () => {
            if (sure === 1) {
                setUserId('0');
            }
            else if (sure === 2) {
                const newExps= Array.from(exps);
                newExps.splice(theexp, 1);
                setExps(newExps);
                
                setPop(4);
            };
            setSure(null);
        };

        return(
            <div className= "sure">
                <motion.div className= "surecontainer" {...sureVariants}>
                    <div className= "suremessage">
                        Θέλετε σίγουρα να
                        <br />
                        {renderSure()}
                    </div>
                    <div className= "surebuttoncontainer">
                        <button className= "surebutton" id= "sno" onClick= {no}>
                            ΟΧΙ
                        </button>
                        <button className= "surebutton" id= "syes" type= "submit" onClick= {yes}>
                            Ναι
                        </button>
                    </div>
                </motion.div>
            </div>
        );
}

export default Sure;