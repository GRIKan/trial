import React from 'react';
import PinBlue from '../../Images/pinblue.png';

const About = () => {
    return (
        <div className= "about">
            <img src= {PinBlue} alt= "Pin Icon" />
            <div className= "abouttext">
                Το <b>Sort-it!</b> είναι μια δωρεάν διαδικτυακή εφαρμογή που υλοποιεί το εργαλείο ταξινόμησης καρτών.
                <br />
                <br />
                Η παρούσα εφαρμογή αναπτύχθηκε ως διπλωματική εργασία του τμήματος <a href= "https://www.ece.upatras.gr/index.php/el/" target= "_blank" rel="noreferrer">Ηλεκτρολόγων Μηχανικών και Τεχνολογίας Υπολογιστών</a> του Πανεπιστημίου Πατρών με σκοπό την εξοικείωση με τις μεθόδους και τα εργαλεία μέτρησης ευχρηστίας.
                <br />
                <br />
                Επομένως, δεν υπάρχει κέρδος και τα δεδομένα που συλλέγονται χρησιμοποιούνται αποκλειστικά για τη βελτίωση της εμπειρίας των χρηστών.
                <br />
                <br />
                <div style= {{fontWeight: 'bold', textAlign: 'center'}}>
                    Επικοινωνία
                </div>
                <br />
                Για οποιοδήποτε πρόβλημα επικοινωνήστε στο email: 
                <br />
                <br />
                <div className= "attribution">
                    <span style= {{fontWeight: 'bold'}}>Credits</span>
                    <br />
                    Εικόνα χαρτιού από: <a href= "http://www.freepik.com/" target= "_blank" rel="noreferrer">freepik</a>
                    <br />
                    Εικονίδια από: <a href= "https://www.flaticon.com/" target= "_blank" rel="noreferrer">flaticon</a>
                </div>
            </div>
        </div>
    )
}

export default About;