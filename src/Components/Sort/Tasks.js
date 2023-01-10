import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Greek from '../../Images/greekflag.png';
import UK from '../../Images/ukflag.png';

const tasksVariants = {
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

const Tasks = ( {setTasks, setInstructions, task} ) => {
    const [changelang, setChangelang] = useState();

    const changeLanguage = () => {
        changelang ? setChangelang(false) : setChangelang(true);
    };

    const beginsort = () => {
        if (task !== "") {
            const link = document.createElement("a");
            const file = new Blob([task], { type: 'text/plain' });
            link.href = URL.createObjectURL(file);
            link.target = "_blank";
            link.click();
            URL.revokeObjectURL(link.href);
        };
        setTasks(false);
        setInstructions(true);
    };

    return(
        <div className= "tasks">
            <span id= "languaget" onClick= {changeLanguage} lang= {changelang ? "greek" : "english"}
                title= {changelang ? "Change language": "Αλλαγή Γλώσσας"} >
                {changelang ? 
                    <img src= {Greek} alt= "Greek Flag Icon" lang= "greek"
                        style= {{width: '20px', height: '16px'}} /> 
                : 
                    <img src= {UK} alt= "UK Flag Icon" lang= "english"
                        style= {{width: '20px', height: '16px'}} />
                }    
            </span>
            <motion.div className= "taskscontainer" {...tasksVariants}>
                    <p style= {{fontSize: '1.5em', fontWeight: 'bold'}}>
                        {changelang ? "Welcome to Sort-it!" : "Καλωσήρθατε στο Sort-it!"}
                    </p>
                    <br/>
                    <p style= {{fontSize: '1.2em'}}>
                        {(task === "") ?
                            (changelang ?
                                "Press the link below to move to the card sorting page:"
                            : 
                                "Πατήστε τον παρακάτω σύνδεσμο για να μεταβείτε στη σελίδα διεξαγωγής του πειράματος:"
                            )
                        :
                            (changelang ?
                                "Press the link below to view the instructions and move to the card sorting page:"
                            : 
                                "Πατήστε τον παρακάτω σύνδεσμο για να δείτε τις οδηγίες και να μεταβείτε στη σελίδα διεξαγωγής του πειράματος:"
                            )
                        }
                    </p>
                    <br/>
                    <motion.div onClick= {beginsort} whileHover= {{ scale: 1.2 }} >
                        {(task === "") ?
                            (changelang ?
                                "Start"
                            : 
                                "Ξεκινήστε"
                            )
                        :
                            (changelang ?
                                "INSTRUCTIONS"
                            : 
                                "ΟΔΗΓΙΕΣ"
                            )
                        }
                    </motion.div>
            </motion.div>
        </div>
    );
}

export default Tasks;