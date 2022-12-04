import React from 'react';
import Pin from '../../Images/pin.png';
import PinGreen from '../../Images/pingreen.png';
import PinBlue from '../../Images/pinblue.png';

const Board = () => {
    return (
        <div className= "board">
            <div className= "mediumpostit" id= "whatis">
                <img src= {Pin} alt= "Pin Icon" />
                <div>
                    Τι είναι το Card Sorting;
                </div>
            </div>
            <div className= "mediumpostit" id= "whatbenefits">
                <img src= {PinGreen} alt= "Pin Icon" />
                <div>
                    Ποια είναι τα πλεονεκτήματα του Card Sorting;
                </div>
            </div>
            <div className= "mediumpostit" id= "whichtype">
                <img src= {PinBlue} alt= "Pin Icon" />
                <div>
                    Ποιο τύπο Card Sorting να χρησιμοποιήσω;
                </div>
            </div>
        </div>
    )
}

export default Board;