import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Tasks from './Tasks';
import Header from './Header';
import Instructions from './Instructions';
import Comments from './Comments';
import Sure from './Sure';
import CardList from './CardList2';
import Create from './Create';
import PopUp from './PopUp';
import ButtonToTop from './ButtonToTop';
import Thankyou from './Thankyou';
import './Sort.css'

const Sort = () => {
    const [cards, setCards] = useState(
        {    
            'card-1': { id: 'card-1', name: 'Apple'},
            'card-2': { id: 'card-2', name: 'Banana' },
            'card-3': { id: 'card-3', name: 'Peaches'},
            'card-4': { id: 'card-4', name: 'Oranges'},
            'card-5': { id: 'card-5', name: 'Grape'},
            'card-6': { id: 'card-6', name: 'Watermelon'},
            'card-7': { id: 'card-7', name: 'Melon'},
            'card-8': { id: 'card-8', name: 'Cucumber'},
            'card-9': { id: 'card-9', name: 'Tomato'},
            'card-10': { id: 'card-10', name: 'Lemon'},
            'card-11': { id: 'card-11', name: 'Carrot'},
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
            'card-24': { id: 'card-24', name: 'Cherries'},
            'card-25': { id: 'card-25', name: 'Rizotto with vegetables and truffle mushroom'},
            'card-26': { id: 'card-26', name: 'Tortellini filled with ricotta cheese, accompanied with chicken a la creme, baby tomatoes, three colored peppers, basil leaves, lemon zest, red pepper, cooked in pesto sauce and parmezan cheese on top'},
            'card-27': { id: 'card-27', name: 'Steak'},
            'card-28': { id: 'card-28', name: 'Thyme'},
            'card-29': { id: 'card-29', name: 'Anchovies'},
            'card-30': { id: 'card-30', name: 'Seaweed'},
        }    
    );
    const [cardsInCategory, setCardsInCategory] = useState(
        {
            
        }
    );
    const [categories, setCategories] = useState(
        {
            
        }
    );
    const [categoriesOrder, setCategoriesOrder] = useState(
        {
            order: []
        }
    );

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
            <Header setInstructions= {setInstructions} setDispComments= {setDispComments} setSure= {setSure} 
                setPop= {setPop} cards= {cards} cardsInCategory= {cardsInCategory} categories= {categories} />
            <AnimatePresence>
                {instructions && <Instructions setInstructions= {setInstructions} />}
                {dispcomments && <Comments setDispComments= {setDispComments} 
                comments= {comments} setComments= {setComments} setPop= {setPop} />}
                {sure && <Sure sure= {sure} setSure= {setSure} categoryinfo= {categoryinfo} setPop= {setPop}
                    cards= {cards} cardsInCategory= {cardsInCategory} 
                    categories= {categories}  categoriesOrder= {categoriesOrder} 
                    setCards= {setCards} setCardsInCategory= {setCardsInCategory} 
                    setCategories= {setCategories} setCategoriesOrder= {setCategoriesOrder} 
                    setThanks= {setThanks} />}
            </AnimatePresence>
            <CardList inDrag= {inDrag} setInDrag= {setInDrag} 
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
                {create && <Create setCreate= {setCreate} drop= {drop} out= {out} 
                    newId1= {newId1} newId2= {newId2} oldCategory= {oldCategory} oldIndex= {oldIndex}
                    dataCard= {dataCard} dataPosition= {dataPosition} setPop= {setPop} 
                    cards= {cards} cardsInCategory= {cardsInCategory} 
                    categories= {categories}  categoriesOrder= {categoriesOrder} 
                    setCards= {setCards} setCardsInCategory= {setCardsInCategory} 
                    setCategories= {setCategories} setCategoriesOrder= {setCategoriesOrder} />}
                {pop && <PopUp pop= {pop} setPop= {setPop} />}
            </AnimatePresence>
            <ButtonToTop />
            {thanks && <Thankyou />}
        </div> 
    );
}

export default Sort;