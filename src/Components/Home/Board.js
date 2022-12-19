import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Pin from '../../Images/pin.png';
import PinGreen from '../../Images/pingreen.png';
import PinBlue from '../../Images/pinblue.png';

const noteVariants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
    },
    transition: { duration: 0.5 }
}

const Board = () => {
    const [whatis, setWhatis] = useState(false);
    const [whatbenefits, setWhatbenefits] = useState(false);
    const [whichtype, setWhichtype] = useState(false);

    return (
        <div className= "board">
            <motion.div layout className= "mediumpostit" id= "whatis" onClick= {() => setWhatis(!whatis)} 
                data-isopen= {whatis} >
                    <motion.img layout src= {Pin} alt= "Pin Icon" />
                    <motion.div layout className= "notetext" data-isopen= {whatis}>
                        Τι είναι το Card Sorting;
                    </motion.div>
                    {whatis && <motion.div layout className= "note" {...noteVariants}>
                        Το Card Sorting είναι μια μέθοδος που χρησιμοποιείται για να βοηθήσει στο σχεδιασμό ή την αξιολόγηση ενός συστήματος. Οι συμμετέχοντες οργανώνουν αντικείμενα σε κατηγορίες που έχουν νόημα για αυτούς και μπορεί επίσης να ονοματίσουν αυτές τις ομάδες ανάλογα με το πείραμα.
                        <br />
                        Σε μια διαδικασία σχεδίασης με επίκεντρο τον χρήστη, χρησιμοποιείται συνήθως κατά την ανάπτυξη της αρχιτεκτονικής πληροφοριών και πλοήγησης ενός ιστοτόπου, αλλά εφαρμόζεται επίσης στην ανάπτυξη ροών εργασίας, μενού, γραμμών εργαλείων και άλλων στοιχείων του σχεδιασμού ενός συστήματος.
                        <br />
                        Για παράδειγμα μπορεί να χρησιμοποιηθεί σε ένα ιστότοπο:
                        <br />
                        ~για τη δημιουργία της αρχικής σελίδας
                        <br />
                        ~για την ονομάτιση κατηγοριών και διαδρομών πλοήγησης
                        <br />
                        ~για την προσθήκη καινούριων αντικειμένων σε ήδη υπάρχουσα δομή
                    </motion.div>}
            </motion.div>
            <motion.div layout className= "mediumpostit" id= "whatbenefits" data-isopen= {whatbenefits}
                onClick= {() => setWhatbenefits(!whatbenefits)} >
                    <motion.img layout src= {PinGreen} alt= "Pin Icon" />
                    <motion.div layout className= "notetext" data-isopen= {whatbenefits}>
                        Ποια είναι τα οφέλη του Card Sorting;
                    </motion.div>
                    {whatbenefits && <motion.div layout className= "note" {...noteVariants}>
                        Το Card Sorting βοηθάει στην κατανόηση των προσδοκιών των χρηστών και πως αντιλαμβάνονται τα διάφορα θέματα. Είναι χρήσιμο για τα εξής:
                        <br />
                        ~Σχεδιασμό ή επανασχεδιασμό της δομής ενός ιστοτόπου ή μιας εφαρμογής
                        <br />
                        ~Ανάπτυξη της αρχιτεκτονικής πληροφοριών και πλοήγησης ενός ιστοτόπου ή μιας εφαρμογής
                        <br />
                        ~Οργάνωση εικονιδίων, εικόνων, στοιχείων μενού και άλλων αντικειμένων σε σχετικές ομάδες
                        <br />
                        ~Εξέταση πως διαφορετικοί άνθρωποι κατανοούν το ίδιο θέμα
                        <br />
                        ~Ομαδοποίηση αντικειμένων με βάση καθορισμένα κριτήρια
                    </motion.div>}
            </motion.div>
            <motion.div layout className= "mediumpostit" id= "whichtype" onClick= {() => setWhichtype(!whichtype)} 
                data-isopen= {whichtype} >
                <motion.img layout src= {PinBlue} alt= "Pin Icon" />
                <motion.div layout className= "notetext" data-isopen= {whichtype}>
                    Ποιο τύπο Card Sorting να χρησιμοποιήσω;
                </motion.div>
                {whichtype && <motion.div layout className= "note" {...noteVariants}>
                        Ανοιχτός τύπος: (συνήθως ανάπτυξη)
                        <br />
                        Χρησιμοποιείται για την ανακάλυψη μοτίβων στον τρόπο ταξινόμησης των χρηστών και έτσι συμβάλλει στη δημιουργία ιδεών για την οργάνωση πληροφοριών.
                        <br />
                        <br />
                        Κλειστός τύπος: (συνήθως αξιολόγηση)
                        <br />
                        Χρησιμοποιείται για να κρίνει αν ένα υπάρχον σύνολο ονομασμένων κατηγοριών παρέχει έναν αποτελεσματικό τρόπο οργάνωσης μιας δεδομένης συλλογής περιεχομένου.
                        <br />

                </motion.div>}
            </motion.div>
        </div>
    )
}

export default Board;