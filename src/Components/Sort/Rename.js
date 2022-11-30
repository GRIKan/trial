import React from 'react';
import OkRename from '../../Images/rename.png';

const Rename = ( {setRename, setPop, changelang, inputText, setInputText, red, setRed, visible, setVisible, 
    category, categories, setCategories} ) => {
        const inputTextHandler = (e) => {
            setInputText(e.target.value);

            setRed(false);
            // e.target.style.color= 'black';
            // e.target.style.borderColor= 'black';
        };

        const selectText = (e) => {
            e.target.select();
        }
        
        const resetForm = (e) => {
            // e.target.parentNode.childNodes[1].style.display= 'none';
            setVisible(false);
            e.target.removeAttribute("id");
            if (inputText === "") {
                // e.target.style.borderColor= 'black';
                setRed(false);
            };
        };

        const pressedKey = (e) => {
            if (e.key === 'Escape') {
                setRename(false);
            };
            if (e.key === 'Enter') {
                e.target.blur();
                submitText(e);
            }
        };

        const error = (e, type) => {
            // console.log(e.target.title);
            setRed(true);
            if (type === 2) {
                setVisible(true);
            }
            // if (e.target.title === 'Rename') {
            //     e.target.parentNode.parentNode.childNodes[0].style.borderColor= 'red';
            //     e.target.parentNode.parentNode.childNodes[0].setAttribute('id', "placeholder");
            // }
            // else {
            //     e.target.style.borderColor= 'red';
            //     e.target.setAttribute('id', "placeholder");
            // };
            // if (type === 2){
            //     if (e.target.title === 'Rename') {
            //         e.target.parentNode.parentNode.childNodes[0].style.color= 'red';
            //         e.target.parentNode.parentNode.childNodes[1].style.display= 'block';
            //     }
            //     else {
            //         e.target.style.color= 'red';
            //         e.target.parentNode.childNodes[1].style.display= 'block';
            //     };
            // };
            
        };

        const submitText = (e) => {
            e.preventDefault();
            document.getSelection().removeAllRanges();
            if (inputText === "") {
                error(e, 1);
            }
            else {
                var checkValues= [];
                Object.values(categories).map((category) => {
                    return checkValues= [...checkValues, category.name];
                });
                if (inputText === category.name) {
                    // if (e.target.title === 'Rename') {
                    //     e.target.parentNode.parentNode.style.display= 'none';
                    // }
                    // else {
                    //     e.target.parentNode.style.display= 'none';
                    // };
                    setRename(false);
                    return;
                }
                else if (checkValues.includes(inputText)) {
                    error(e, 2);
                }
                else {
                    setRename(false);
                    // if (e.target.title === 'Rename') {
                    //     e.target.parentNode.parentNode.style.display= 'none';
                    // }
                    // else {
                    //     e.target.parentNode.style.display= 'none';
                    // };
                    const newCategory= {...category};
                    newCategory.name= inputText;
                    setCategories({...categories, [category.id]: newCategory});
                    // console.log(newCategory);
                    
                    setPop(5);
                };
            };
        };

        return (
            <div className= "categorytitleformcontainer">
                <input className= "categorytitleform" type= "text" 
                    placeholder= {changelang ? "Input new name..." : "Εισαγωγή νέου ονόματος..."}
                    id= {(red? 'placeholder' : 'none')} title= {inputText} value= {inputText} 
                    data-inrename= {true} autoComplete= "off" autoFocus
                    onChange= {inputTextHandler} onFocus= {selectText}
                    onPointerDown= {resetForm} onKeyDown= {pressedKey}
                    style= {{color: (red? 'red' : 'black'), borderColor: (red? 'red' : 'black')}} />
                {visible && <div id= "tooltipcategorytitleform" data-inrename= {true}>
                    {changelang ? "Category name already exists!" : "Το όνομα υπάρχει ήδη!"}
                </div>}
                <div id= "okrename" data-inrename= {true}>
                    <img src= {OkRename} alt= "Ok Icon" title= {changelang ? "Rename" : "Αλλαγή"} data-inrename= {true} 
                        onClick= {submitText} style= {{width: '16px', height: '16px'}} />
                </div>
            </div>
        );
}

export default Rename;