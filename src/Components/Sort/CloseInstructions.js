import React from 'react';
import { motion } from 'framer-motion';

const instructionsVariants = {
    initial: {
        x: '35vw',
        y: '-45vh',
        scale: 0
    },
    animate: {
        x: 0,
        y: 0,
        scale: 1,
        transition: { duration: 0.5 }
    },
    exit: {
        x: '35vw',
        y: '-45vh',
        scale: 0, 
        transition: { duration: 0.3 }
    }
}

const Instructions = ( {setInstructions, changelang} ) => {
    const close = () => {
        setInstructions(false);
    };

    return(
        <div className= "instructions" id= "scrollbar">
            <motion.div className= "instructionscontainer"
                initial= {{ 
                    x: `calc(-50vw + 5vw + ${document.querySelector('#instructions').offsetLeft + 'px'})`, 
                    y: `calc(-50vh + 16px + ${document.querySelector('#instructions').offsetTop + 'px'})`,
                    scale: 0 
                }}
                animate= {{ x:0, y: 0, scale: 1, transition: { duration: 0.5 } }}
                exit= {{ 
                    x: `calc(-50vw + 5vw + ${document.querySelector('#instructions').offsetLeft + 'px'})`, 
                    y: `calc(-50vh + 16px + ${document.querySelector('#instructions').offsetTop + 'px'})`,
                    scale: 0, transition: { duration: 0.3 } 
                }} >
                    <div className= "instructionsheader">
                        {changelang ? "Instructions" : "Οδηγίες"}
                    </div>
                    <div className= "instructionsdisplaycontainer">
                        <div className= "instructionsdisplay" id= "cardscrollbar">
                            {changelang ? "Welcome to " : "Καλωσήρθατε στο "}Sort-it!
                            <br />
                            {changelang ? 
                            "To get started with the sort you will need these useful features:" : 
                            "Για να ξεκινήσετε την ταξινόμηση θα χρειαστείτε τα εξής χρήσιμα:"}                        
                            <br />
                            <br />
                            <span className= "instructionsfeatures">
                                ~{changelang ? "Add card to category: " : "Κάρτα σε κατηγορία: "}
                            </span>
                                {changelang ? 
                                "drag and drop any card to category / press arrow button on the card and select the category" : 
                                "σύρετε την κάρτα στην κατηγορία / πατήστε το βέλος πάνω στην κάρτα και επιλέξτε την κατηγορία"}
                            <br />
                            <span className= "instructionsfeatures">
                                ~{changelang ? "Change card location: " : "Αλλαγή θέσης: "}
                            </span>
                                {changelang ? 
                                "drag and drop ANY card to ANY category" : 
                                "μετακινήστε ΟΠΟΙΑΔΗΠΟΤΕ κάρτα σε ΟΠΟΙΑΔΗΠΟΤΕ κατηγορία"}
                            <br />
                            <span className= "instructionsfeatures">
                                ~{changelang ? "Delete card: " : "Διαγραφή κάρτας: "}
                            </span>
                                {changelang ? 
                                "press 'x'" : 
                                "πατήστε το 'x'"}
                            <br />
                            <span className= "instructionsfeatures">
                                ~{changelang ? "Delete all cards in category: " : "Διαγραφή όλων των καρτών αυτής της κατηγορίας: "}
                            </span>  
                                {changelang ? 
                                "press bin icon right to the title" : 
                                "πατήστε το εικονίδιο του κάδου στα δεξιά του ονόματος της κατηγορίας"}
                            <br />
                            <span className= "instructionsfeatures">
                                ~{changelang ? 
                                "Minimize / Maximize category: " : 
                                "Ελαχιστοποίηση / Μεγιστοποίηση κατηγορίας: "}
                            </span> 
                                {changelang ? 
                                "press icon left to the title when appear" : 
                                "πατήστε το εικονίδιο αριστερά του ονόματος της κατηγορίας όταν εμφανιστεί"}
                            <br />
                            <br />
                            <span className= "instructionsfeatures">
                                ~{changelang ? "Save progress: " : "Αποθήκευση προόδου: "}
                            </span>  
                                {changelang ? 
                                "press 'Save for later' button " : 
                                "πατήστε το κουμπί 'Αποθήκευση'"}
                            <br />
                            <span className= "instructionsfeatures">
                                ~{changelang ? "Finish sort: " : "Ολοκλήρωση ταξινόμησης: "}
                            </span>      
                                {changelang ? 
                                "press 'Done' button " : 
                                "πατήστε το κουμπί 'Ολοκλήρωση'"}
                            <br />
                            <span className= "instructionsfeatures">
                                ~{changelang ? "Open instructions: " : "Άνοιγμα οδηγιών: "}
                            </span>      
                                {changelang ? 
                                "press 'Instructions' button " : 
                                "πατήστε το κουμπί 'Οδηγίες'"}
                            <br />
                            <span className= "instructionsfeatures">
                                ~{changelang ? "Write comments: " : "Γράψτε σχόλια για την ταξινόμηση: "}
                            </span>       
                                {changelang ? 
                                "press 'Comments' button" : 
                                "πατήστε το κουμπί 'Σχόλια'"}
                            <br />
                            <br />
                            {changelang ? "Happy Sorting!!!" : "Καλή Ταξινόμηση!!!"}
                        </div>
                        <div className= "instructionsbuttoncontainer">
                            <button className= "instructionsbutton" id= "close" onClick= {close}>
                                {changelang ? "Close" : "Κλείσιμο"}
                            </button>
                        </div>
                    </div>
            </motion.div>
        </div>
    );
}

export default Instructions;

