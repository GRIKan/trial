import React from 'react';
import { motion } from 'framer-motion';

const thanksVariants = {
    initial: {
        scale: 0
    },
    animate: {
        scale: 1,
        transition: { duration: 0.3 }
    }
}

const Thankyou = ( {changelang, bye} ) => {
        return(
            <div className= "thankyou">
                <motion.div className= "thankyoucontainer" {...thanksVariants}>
                    <p id= "thanks">
                        {changelang ?
                                "THANK YOU!"
                            : 
                                "Ευχαριστούμε!"
                        }
                    </p>
                    <div id= "note">
                        {(bye[0]) ?
                            (changelang ?
                                "You can close the page now."
                            : 
                                "Μπορείτε να κλείσετε τη σελίδα τώρα."
                            )
                        :
                            <p>
                                {changelang ?
                                    "Go to the following website to complete the test:"
                                : 
                                    "Μεταβείτε στον παρακάτω ιστότοπο για να ολοκληρώσετε τη διαδικασία:"
                                }
                                <br />
                                <motion.a href= {bye[1]} target= "_blank" rel="noopener noreferrer"
                                    style= {{ fontSize: '0.9em' ,fontWeight: 'bold' }} whileHover= {{ scale: 1.2 }} >
                                    {bye[1]}
                                </motion.a>
                            </p>
                        }
                    </div>
                </motion.div>
            </div>
        );
}

export default Thankyou;