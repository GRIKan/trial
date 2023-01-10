import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import ChangeLanguage from './ChangeLanguage';
import Tasks from './Tasks';
import Header from './HeaderS';
import Instructions from './Instructions';
import Comments from './Comments';
import Sure from './Sure';
import CardList from './CloseCardList';
import PopUp from './PopUpS';
import ButtonToTop from './ButtonToTop';
import Thankyou from './Thankyou';
import './Sort.css'

const Sort = ( {cards, setCards, categories, setCategories, categoriesOrder, setCategoriesOrder, exp} ) => {
    const [cardsInCategory, setCardsInCategory] = useState({});
    
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
    },[exp.exp_id]);

    const [changelang, setChangelang] = useState(false);

    const [inDrag, setInDrag] = useState("false");

    const resetInDrag = () => {
        setInDrag("false");
    };

    const [tasks, setTasks] = useState(false);

    const isClose= true;

    const [instructions, setInstructions] = useState(false);

    const [dispcomments, setDispComments] = useState(false);
    const [comments, setComments] = useState("");

    const [sure, setSure] = useState();
    const [categoryinfo, setCategoryInfo] = useState();

    const [pop, setPop] = useState(0);

    const [thanks, setThanks] = useState(false);

    return (
        <div className= "sort" onMouseUp= {resetInDrag}>
            {tasks && <Tasks setTasks= {setTasks} setInstructions= {setInstructions} task= {exp.instructions} />}
            <Header changelang= {changelang} setChangelang= {setChangelang} isClose= {isClose} exp= {exp}
                setInstructions= {setInstructions} comments= {comments} setDispComments= {setDispComments} 
                setSure= {setSure} setPop= {setPop}
                cards= {cards} cardsInCategory= {cardsInCategory} 
                categories= {categories} categoriesOrder= {categoriesOrder} />
            <AnimatePresence>
                {instructions && <Instructions setInstructions= {setInstructions} changelang= {changelang} 
                    isClose= {isClose} task= {exp.instructions} />}
                {dispcomments && <Comments setDispComments= {setDispComments} changelang= {changelang}
                    isClose= {isClose} comments= {comments} setComments= {setComments} setPop= {setPop} />}
                {sure && <Sure sure= {sure} setSure= {setSure} categoryinfo= {categoryinfo} setPop= {setPop}
                    changelang= {changelang} cards= {cards} cardsInCategory= {cardsInCategory} 
                    categories= {categories}  categoriesOrder= {categoriesOrder} 
                    setCards= {setCards} setCardsInCategory= {setCardsInCategory} 
                    setCategories= {setCategories} setCategoriesOrder= {setCategoriesOrder} 
                    setThanks= {setThanks} theid= {exp.exp_id} comments= {comments} />}
            </AnimatePresence>
            <CardList changelang= {changelang} inDrag= {inDrag} setInDrag= {setInDrag} 
                setSure= {setSure} setCategoryInfo= {setCategoryInfo} setPop= {setPop}
                cards= {cards} cardsInCategory= {cardsInCategory} 
                categories= {categories}  categoriesOrder= {categoriesOrder} 
                setCards= {setCards} setCardsInCategory= {setCardsInCategory} 
                setCategories= {setCategories} />
            <AnimatePresence>
                {pop && <PopUp pop= {pop} setPop= {setPop} changelang= {changelang} />}
            </AnimatePresence>
            <ButtonToTop changelang= {changelang} />
            {thanks && <Thankyou changelang= {changelang} bye= {exp.goodbye} />}
        </div> 
    );
}

export default Sort;