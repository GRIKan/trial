import React from 'react';
import { motion } from 'framer-motion';
import Taskstxt from './tasks.txt';

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

const Tasks = ( {setTasks, setInstructions} ) => {
    const beginsort = () => {
        setTasks(false);
        setInstructions(true);
    };

    return(
        <div className= "tasks">
            <motion.div className= "taskscontainer" {...tasksVariants}>
                    <p style= {{fontSize: '1.5em', fontWeight: 'bold'}}>
                        Καλωσήρθατε στην αξιολόγηση του Sort-it!
                    </p>
                    <br/>
                    <p style= {{fontSize: '1.2em'}}>
                        Πατήστε τον παρακάτω σύνδεσμο για να κατεβάσετε τις εργασίες και να μεταβείτε στη σελίδα του card sorting:
                    </p>
                    <br/>
                    <motion.a href= {Taskstxt} download= "tasks.txt" 
                        style= {{fontSize: '1.2em', fontWeight: 'bold'}} 
                        onClick= {beginsort} whileHover= {{ scale: 1.2 }} >
                        tasks.txt
                    </motion.a>
            </motion.div>
        </div>
    );
}

export default Tasks;