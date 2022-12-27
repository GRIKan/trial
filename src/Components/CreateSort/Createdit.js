import React, { useState } from 'react';
import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import Explore from './Explore';
import General from './General';
import Options from './Options';
import AddCards from './AddCards';
import AddCategories from './AddCategories';
import './Createdit.css';

const Createdit = ( {user, exps, setExps, setPop} ) => {
    const { id } = useParams();
    var experiment= exps.find(item => item.exp_id === id);
    var expIndex= exps.indexOf(experiment);
    var create= false;

    if (window.location.pathname === '/dashboard/create') {
        var today = new Date();
        var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
        var time = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
        var dateTime= date + ', '+ time;
        experiment= {"exp_id": (1 + +exps[exps.length - 1].exp_id).toString(), "name": "", 
            "datecreated": dateTime, "datemod": "", "type": "", "datestart": "",
            "datestop": "", "publish": false, "instructions": "", "goodbye": "", "cards": {}, "randomizecards": true,
            "unsorted": false, "randomizecategories": true, "categories": {}, "user_id": user.user_id}
        create= true;
    }
    else if (experiment === undefined) {
        window.location.pathname= "/dashboard";
    }
    else if (experiment.user_id !== user.user_id) {
        window.location.pathname= "/dashboard";
    };
    
    const [exp, setExp] = useState(experiment);
    const [created, setCreated]= useState(create);

    return (
        <div className= "createdit">
            <Explore exp= {exp} created= {created} />
            <Routes>
                <Route path= "/" element= {<General exp= {exp} setExp= {setExp} expIndex= {expIndex} 
                    exps= {exps} setExps= {setExps} setPop= {setPop} created= {created} setCreated= {setCreated} />} />
                <Route path= "/options" element= {<Options exp= {exp} setExp= {setExp} expIndex= {expIndex} 
                    exps= {exps} setExps= {setExps} setPop= {setPop} />} />
                <Route path= "/cards" element= {<AddCards exp= {exp} setExp= {setExp} expIndex= {expIndex} 
                    exps= {exps} setExps= {setExps} setPop= {setPop} />} />
                {(exp.type === 'close') && 
                    <Route path= "/categories" element= {<AddCategories exp= {exp} setExp= {setExp} expIndex= {expIndex} 
                        exps= {exps} setExps= {setExps} setPop= {setPop} />} />}
                <Route path= "/*" element= {<Navigate to= {`/dashboard/${id}`} replace />} />
            </Routes>
        </div>
    )
}

export default Createdit;