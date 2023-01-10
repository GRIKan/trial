import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import Sort from './Sort';
import CloseSort from './CloseSort';
import experiments from '../Data/experiments.json';

const ChooseSort = () => {
    const { id } = useParams();
    // console.log({id});
    const exp= experiments.find(item => item.exp_id === id);

    var thecards= Object.values(exp.cards).map(card => {
        return card;
    });
    const [cards, setCards] = useState(exp.cards);
    
    var thecategories= Object.values(exp.categories).map(category => {
        return category;
    });
    var allthecategories= {};
    var thecategory= {};
    thecategories.map((item, index) => {
        thecategory=  {[`category-${index + 1}`] : { id: `category-${index + 1}`, name: item.name, cardId: [], minimize: false}};
        allthecategories= {...allthecategories, ...thecategory};
        return thecategories;
    });
    const [categories, setCategories] = useState(allthecategories);
    const [categoriesOrder, setCategoriesOrder] = useState({ order: [] });
    
    var theorder= [];

    // useEffect(() => {
    //     console.log('pig');
    //     if (exp.datestart && exp.datestop) {
    //         var today= new Date();
    //         var date= today.getFullYear()+'-'+('0'+(today.getMonth()+1)).slice(-2)+'-'+('0'+today.getDate()).slice(-2);
    //         var time= ('0'+today.getHours()).slice(-2)+':'+('0'+today.getMinutes()).slice(-2);
    //         var dateTime= date + 'T'+ time;
    //         console.log(dateTime);
    //         if ((dateTime <= exp.datestart) || (dateTime >= exp.datestop)) {
    //             window.location.pathname= "/home";
    //         };
    //         const interval= setInterval(() => {
    //             var today= new Date();
    //             var date= today.getFullYear()+'-'+('0'+(today.getMonth()+1)).slice(-2)+'-'+('0'+today.getDate()).slice(-2);
    //             var time= ('0'+today.getHours()).slice(-2)+':'+('0'+today.getMinutes()).slice(-2);
    //             var dateTime= date + 'T'+ time;
    //             console.log(dateTime);
    //             if ((dateTime <= exp.datestart) || (dateTime >= exp.datestop)) {
    //                 window.location.pathname= "/home";
    //             };
    //         }, 1000);
    //         return () => clearInterval(interval);
    //     };
    // },[exp.datestart, exp.datestop]);

    if ((exp === undefined) || (exp.publish === false)) {
        window.location.pathname= "/home";
    };

    useEffect(() => {
        const data= JSON.parse(window.localStorage.getItem(`${exp.exp_id}`));
        if (exp.randomizecards === true) {
            RandomCards();
        };
        if (exp.randomizecategories === true) {
            RandomCategories();
        };
        if (exp.type === 'close') {
            thecategories.map((item, index) => {
                theorder.push(`category-${index + 1}`);
                return theorder;
            });
            setCategoriesOrder({...categoriesOrder, order: theorder});
        };
        if (data !== null) {
            setCards(data.cards);
            if (exp.type === 'close') {
                setCategories(data.categories);
                setCategoriesOrder(data.categoriesOrder);
            };
        };
    },[]);

    const RandomCards = () => {
        let shuffled = thecards.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
        var finalcards= {};
        var finalcard= {};
    
        // console.log(shuffled);
        shuffled.map((item, index) => {
            finalcard=  {[`card-${index + 1}`] : { id: `card-${index + 1}`, name: item.name}};
            finalcards= {...finalcards, ...finalcard};
            return finalcards;
        });
        setCards(finalcards);
    };

    const RandomCategories = () => {
        let shuffled = thecategories.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
        var finalcategories= {};
        var finalcategory= {};
    
        // console.log(shuffled);
        shuffled.map((item, index) => {
            finalcategory=  {[`category-${index + 1}`] : { id: `category-${index + 1}`, name: item.name, cardId: [], minimize: false}};
            finalcategories= {...finalcategories, ...finalcategory};
            return finalcategories;
        });
        setCategories(finalcategories);
    };

    // console.log(cards);

    // console.log(exp.publish);

    return (
        <Routes>
            <Route path= "/" element= {(exp.type === 'open') ? 
                <Sort cards= {cards} setCards= {setCards} exp= {exp} /> : 
                <CloseSort cards= {cards} setCards= {setCards} categories= {categories} setCategories= {setCategories} 
                    categoriesOrder= {categoriesOrder} setCategoriesOrder= {setCategoriesOrder} exp= {exp} />} />
            <Route path="*" element= {<Navigate to="/" replace />} />
        </Routes>
    )
}

export default ChooseSort;