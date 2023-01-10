import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import ChangeLanguage from './ChangeLanguage';
import Tasks from './Tasks';
import Header from './HeaderS';
import Instructions from './Instructions';
import Comments from './Comments';
import Sure from './Sure';
import CardList from './CardList';
import Create from './Create';
import PopUp from './PopUpS';
import ButtonToTop from './ButtonToTop';
import Thankyou from './Thankyou';
import './Sort.css'

const Sort = ( {cards, setCards, exp} ) => {
    const [cardsInCategory, setCardsInCategory] = useState({});
    const [categories, setCategories] = useState({});
    const [categoriesOrder, setCategoriesOrder] = useState({ order: [] });
    
    useEffect(() => {
        window.addEventListener('load', ChangeLanguage);
        // window.localStorage.clear();
        const data= JSON.parse(window.localStorage.getItem(`${exp.exp_id}`));
        if (data !== null) {
            setCardsInCategory(data.cardsInCategory);
            setCategories(data.categories);
            setCategoriesOrder(data.categoriesOrder);
            setComments(data.comments);
        };
    }, [exp.exp_id]);

    const [changelang, setChangelang] = useState(false);

    const [inDrag, setInDrag] = useState("false");

    const resetInDrag = () => {
        setInDrag("false");
    };

    const [tasks, setTasks] = useState(false);

    const isClose= false;

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
            {tasks && <Tasks setTasks= {setTasks} setInstructions= {setInstructions} task= {exp.instructions} />}
            <Header changelang= {changelang} setChangelang= {setChangelang} isClose= {isClose} exp= {exp}
                setInstructions= {setInstructions} comments= {comments} setDispComments= {setDispComments} 
                setSure= {setSure} setPop= {setPop} setAdd= {setAdd} setCreate= {setCreate} 
                cards= {cards} cardsInCategory= {cardsInCategory} 
                categories= {categories} categoriesOrder= {categoriesOrder} />
            <AnimatePresence>
                {instructions && <Instructions setInstructions= {setInstructions} changelang= {changelang} 
                    isClose= {isClose} task= {exp.instructions} />}
                {dispcomments && <Comments setDispComments= {setDispComments} changelang= {changelang}
                    comments= {comments} setComments= {setComments} setPop= {setPop} />}
                {sure && <Sure sure= {sure} setSure= {setSure} categoryinfo= {categoryinfo} setPop= {setPop}
                    changelang= {changelang} cards= {cards} cardsInCategory= {cardsInCategory} 
                    categories= {categories}  categoriesOrder= {categoriesOrder} 
                    setCards= {setCards} setCardsInCategory= {setCardsInCategory} 
                    setCategories= {setCategories} setCategoriesOrder= {setCategoriesOrder} 
                    setThanks= {setThanks} theid= {exp.exp_id} comments= {comments} />}
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
            {thanks && <Thankyou changelang= {changelang} bye= {exp.goodbye} />}
        </div> 
    );
}

export default Sort;