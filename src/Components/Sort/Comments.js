import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Comments = ( {setDispComments, changelang, comments, setComments, setPop} ) => {   
    const [inputText, setInputText] = useState(comments);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const end= document.querySelector('.textarea');
        var len = end.value.length;
        end.focus();
        end.setSelectionRange(len, len);
    }, []);

    const inputCommentsHandler = (e) => {
        setInputText(e.target.value);
        setCounter(counter + 1);
    };

    const pressedKey = (e) => {
        if (e.key === 'Escape') {
            close();
        };
    };

    const close = () => {
        // if (!(counter === 0)) {
        //     setComments("");
        // };
        setDispComments(false);
        setCounter(0);
    };

    const saveComments = () => {
        setComments(inputText.trim());
        setDispComments(false);
        setCounter(0);
        if (!(inputText === "") || !(counter === 0)) {
            setPop(2);
        };
    };

    return(
        <div className= "comments">
            <motion.div className= "commentscontainer"
                initial= {{ 
                    x: ((window.innerWidth > 600) ?
                        `calc(-50vw + 5vw + ${document.querySelector('#comments').offsetLeft + 'px'})`
                        :
                        `calc(50vw - 5vw - ${document.querySelector('#comments').offsetLeft + 'px'})`), 
                    y: `calc(-50vh + 16px + ${document.querySelector('#comments').offsetTop + 'px'})`,
                    scale: 0 
                }}
                animate= {{ x: 0, y: 0, scale: 1, transition: { duration: 0.5 } }}
                exit= {{ 
                    x: ((window.innerWidth > 600) ?
                        `calc(-50vw + 5vw + ${document.querySelector('#comments').offsetLeft + 'px'})`
                        :
                        `calc(50vw - 5vw - ${document.querySelector('#comments').offsetLeft + 'px'})`), 
                    y: `calc(-50vh + 16px + ${document.querySelector('#comments').offsetTop + 'px'})`,
                    scale: 0, transition: { duration: 0.3 } 
                }} >
                <div className= "commentsheader">
                    {changelang ? "Comments" : "Σχόλια"}
                </div>
                <div className= "textareacontainer">
                    <textarea className= "textarea" id= "commentsscrollbar" 
                        placeholder= {changelang ? "Input comments..." : "Εισαγωγή σχολίων..."} 
                        value= {inputText} autoComplete= "off" onChange= {inputCommentsHandler} onKeyDown= {pressedKey} >
                    </textarea>
                    <div className= "commentsbuttoncontainer">
                        <button className= "commentsbutton" id= "ccancel" onClick= {close}>
                            {changelang ? "Cancel" : "Ακύρωση"}
                        </button>
                        <button className= "commentsbutton" id= "csave" type= "submit" onClick= {saveComments}>
                            {changelang ? "SAVE" : "OK"}
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Comments;