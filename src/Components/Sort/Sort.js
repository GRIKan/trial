import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import ChangeLanguage from './ChangeLanguage';
import Tasks from './Tasks';
import Header from './Header';
import Instructions from './Instructions';
import Comments from './Comments';
import Sure from './Sure';
import CardList from './CardList';
import Create from './Create';
import PopUp from './PopUp';
import ButtonToTop from './ButtonToTop';
import Thankyou from './Thankyou';
import './Sort.css'

const Sort = () => {
    const [cards, setCards] = useState(
        {    
            'card-12': { id: 'card-12', name: 'Pineapple'},
            'card-13': { id: 'card-13', name: 'Onion'},
            'card-14': { id: 'card-14', name: 'Garlic'},
            'card-15': { id: 'card-15', name: 'Zuccini'},
            'card-16': { id: 'card-16', name: 'Pumpkin'},
            'card-17': { id: 'card-17', name: 'Berries'},
            'card-18': { id: 'card-18', name: 'Coconut'},
            'card-19': { id: 'card-19', name: 'Pear'},
            'card-20': { id: 'card-20', name: 'Cabbage'},
            'card-21': { id: 'card-21', name: 'Lettuce'},
            'card-22': { id: 'card-22', name: 'Sanguini'},
            'card-23': { id: 'card-23', name: 'Broccoli'},
            'card-24': { id: 'card-24', name: 'Cherries'}
        }    
    );
    const [cardsInCategory, setCardsInCategory] = useState(
        {
            'card-1': { id: 'card-1', name: 'Apple'},
            'card-2': { id: 'card-2', name: 'Banana with vineger and anana and mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla mpla ' },
            'card-3': { id: 'card-3', name: 'PeachesILoveThemIReallyDo'},
            'card-4': { id: 'card-4', name: 'OrangesILoveThemTooIfYouBelieveMe even more so than peaches if I may say so, which is a big deal apparently, honestly'},
            'card-5': { id: 'card-5', name: 'Grape'},
            'card-6': { id: 'card-6', name: 'Watermelon'},
            'card-7': { id: 'card-7', name: 'Melon'},
            'card-8': { id: 'card-8', name: 'Cucumber'},
            'card-9': { id: 'card-9', name: 'Tomato'},
            'card-10': { id: 'card-10', name: 'Lemon'},
            'card-11': { id: 'card-11', name: 'Carrot'}
        }
    );
    const [categories, setCategories] = useState(
        {
            'category-1': { id: 'category-1', name: 'Fruits', cardId: ['card-4', 'card-5', 'card-6'], minimize: false }, 
            'category-2': { id: 'category-2', name: 'Vegetablesjkdakdgsjfdhdzsiserhtfhedrgser', cardId: ['card-1'], minimize: false }, 
            'category-3': { id: 'category-3', name: 'Pasta', cardId: ['card-2'], minimize: false }, 
            'category-4': { id: 'category-4', name: 'Sweets', cardId: ['card-3'], minimize: false }, 
            'category-5': { id: 'category-5', name: 'Meat', cardId: ['card-7'], minimize: false },
            'category-6': { id: 'category-6', name: 'Meat', cardId: ['card-8'], minimize: false },
            'category-7': { id: 'category-7', name: 'Meat', cardId: ['card-9'], minimize: false },
            'category-8': { id: 'category-8', name: 'Meat', cardId: ['card-10'], minimize: false },
            'category-9': { id: 'category-9', name: 'Meat', cardId: ['card-11'], minimize: false }
        }
    );
    const [categoriesOrder, setCategoriesOrder] = useState(
        {
            order: ['category-1', 'category-2', 'category-3', 'category-4', 'category-5', 'category-6', 'category-7', 'category-8', 'category-9']
        }
    );
    
    useEffect(() => {
        window.addEventListener('load', ChangeLanguage);
        // window.localStorage.clear();
    })

    const [changelang, setChangelang] = useState(false);

    const [inDrag, setInDrag] = useState("false");

    const resetInDrag = () => {
        setInDrag("false");
    };

    const [tasks, setTasks] = useState(false);

    const [instructions, setInstructions] = useState(false);

    const [dispcomments, setDispComments] = useState(false);
    const [comments, setComments] = useState("");

    const [sure, setSure] = useState();
    const [categoryinfo, setCategoryInfo] = useState();

    const [add, setAdd] = useState(false);

    const [create, setCreate] = useState(false);
    const [drop, setDrop] = useState(false);
    const [out, setOut] = useState(false);
    const [newId1, setNewId1] = useState();
    const [newId2, setNewId2] = useState();
    const [oldCategory, setOldCategory] = useState();
    const [oldIndex, setOldIndex] = useState();
    const [dataCard, setDataCard] = useState();
    const [dataPosition, setDataPosition] = useState();

    const [pop, setPop] = useState(0);

    const [thanks, setThanks] = useState(false);

    // const [thepops, setThepops] = useState([]);

    // useEffect(() => {
    //     console.log("pig");
    //     console.log(pop);
    //     console.log(thepops);
    //     if (pop > 0)
    //     setThepops([...thepops, pop]);
    //     setTimeout(function() {
    //         thepops.splice(0, 1);
    //         setThepops(thepops);
    //     }, 1500);
    // }, [clicked]);

    // useEffect(() => {
    //     console.log("pig");
    //     console.log(pop);
    //     console.log(thepops);
    //     if (pop > 0)
    //     setThepops([...thepops, pop]);
    //     // setTimeout(function() {
    //     //     thepops.splice(0, 1);
    //     //     setThepops(thepops);
    //     // }, 1500);
    // }, [pop]);
    // useEffect(() => {
    //     console.log("pig");
    //     console.log(pop);
    //     console.log(thepops);
    //     setThepops([...thepops, pop]);
    //     setTimeout(function() {
    //         thepops.splice(0, 1);
    //         setThepops(thepops);
    //     }, 1500);
    // }, [pop]);

    return (
        <div className= "sort" onMouseUp= {resetInDrag}>
            {tasks && <Tasks setTasks= {setTasks} setInstructions= {setInstructions} />}
            <Header changelang= {changelang} setChangelang= {setChangelang}
                setInstructions= {setInstructions} comments= {comments} setDispComments= {setDispComments} 
                setSure= {setSure} setPop= {setPop} setAdd= {setAdd} setCreate= {setCreate} 
                cards= {cards} cardsInCategory= {cardsInCategory} 
                categories= {categories} categoriesOrder= {categoriesOrder} />
            <AnimatePresence>
                {instructions && <Instructions setInstructions= {setInstructions} changelang= {changelang} />}
                {dispcomments && <Comments setDispComments= {setDispComments} changelang= {changelang}
                comments= {comments} setComments= {setComments} setPop= {setPop} />}
                {sure && <Sure sure= {sure} setSure= {setSure} categoryinfo= {categoryinfo} setPop= {setPop}
                    changelang= {changelang} cards= {cards} cardsInCategory= {cardsInCategory} 
                    categories= {categories}  categoriesOrder= {categoriesOrder} 
                    setCards= {setCards} setCardsInCategory= {setCardsInCategory} 
                    setCategories= {setCategories} setCategoriesOrder= {setCategoriesOrder} 
                    setThanks= {setThanks} />}
            </AnimatePresence>
            <CardList changelang= {changelang} inDrag= {inDrag} setInDrag= {setInDrag} 
                setSure= {setSure} setCategoryInfo= {setCategoryInfo}
                setCreate= {setCreate} setDrop= {setDrop} setOut= {setOut}
                setNewId1= {setNewId1} setNewId2= {setNewId2} 
                setOldCategory= {setOldCategory} setOldIndex= {setOldIndex}
                setDataCard= {setDataCard} setDataPosition= {setDataPosition} setPop= {setPop}
                cards= {cards} cardsInCategory= {cardsInCategory} 
                categories= {categories}  categoriesOrder= {categoriesOrder} 
                setCards= {setCards} setCardsInCategory= {setCardsInCategory} 
                setCategories= {setCategories} />
            <AnimatePresence>
                {create && <Create setCreate= {setCreate} changelang= {changelang}
                    add= {add} setAdd= {setAdd} drop= {drop} out= {out} 
                    newId1= {newId1} newId2= {newId2} oldCategory= {oldCategory} oldIndex= {oldIndex}
                    dataCard= {dataCard} dataPosition= {dataPosition} setPop= {setPop} 
                    cards= {cards} cardsInCategory= {cardsInCategory} 
                    categories= {categories}  categoriesOrder= {categoriesOrder} 
                    setCards= {setCards} setCardsInCategory= {setCardsInCategory} 
                    setCategories= {setCategories} setCategoriesOrder= {setCategoriesOrder} />}
                {pop && <PopUp pop= {pop} setPop= {setPop} changelang= {changelang} />}
            </AnimatePresence>
            <ButtonToTop changelang= {changelang} />
            {thanks && <Thankyou />}
        </div> 
    );
}

export default Sort;