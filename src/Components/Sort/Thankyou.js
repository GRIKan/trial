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

const Thankyou = () => {
        return(
            <div className= "thankyou">
                <motion.div className= "thankyoucontainer" {...thanksVariants}>
                    {/* <p id= "thanks">THANK YOU!</p>
                    <p id= "note">You can close the page now.</p> */}
                    <p id= "thanks">Ευχαριστούμε!</p>
                    <p id= "note">Μεταβείτε στον παρακάτω σύνδεσμο για να απαντήσετε σε ένα σύντομο 
                        <br />
                        <motion.a href= "https://forms.gle/ck4FYHxgS9dU7SLb8" target= "_blank"
                            style= {{ fontWeight: 'bold' }} whileHover= {{ scale: 1.2 }} >
                            ερωτηματολόγιο
                        </motion.a>
                        .
                    </p>
                </motion.div>
            </div>
        );
}

export default Thankyou;