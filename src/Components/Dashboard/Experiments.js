import React from 'react';
import { Link } from 'react-router-dom';
import Delete from '../../Images/delete.png';
import Export from '../../Images/export.png';

const Experiments = ( {user, exps, setExps, setTheexp, setSure, setPop} ) => {

    // console.log(data["user1"].experiments);

    // useEffect(() => {
    //     if (exps[exps.length -1].name === "") {
    //         const newExps= Array.from(exps);
    //         newExps.splice(exps.length -1,1);
    //         setExps(newExps);
    //     };
    // });

    const deleteexp = (theid) => {
        setSure(2);
        
        var theexp= exps.findIndex((item => item.exp_id === theid));
        setTheexp(theexp);
    };
    
    return (
        <ul className= "experiments" id= "containerdscrollbar">
            <li className= "exptable title">
                <div id= "expname">
                    Όνομα πειράματος
                </div>
                <div id= "expdatecreated">
                    Δημιουργήθηκε:
                </div>
                <div id= "expdatemod">
                    Τροποποιήθηκε:
                </div>
                <div id= "expdel">
                    Διαγραφή
                </div>
                <div id= "expres">
                    Εξαγωγή
                </div>
            </li>
            {exps.map(exp => {
                if (user.user_id === exp.user_id) {
                    return (
                        <li className= "exptable" key= {exp.exp_id}>
                            <div id= "expname" title= {exp.name}>
                                <Link to= {`/dashboard/${exp.exp_id}`}>
                                    <div id= "nametext">
                                        {exp.name}
                                    </div>
                                </Link>
                            </div>
                            <div id= "expdatecreated">
                                {exp.datecreated}
                            </div>
                            <div id= "expdatemod">
                                {exp.datemod}
                            </div>
                            <div id= "expdel">
                                <div className= "iconhov" onClick= {() => deleteexp(exp.exp_id)}>
                                    <img src= {Delete} alt= "Delete Icon" />
                                </div>
                            </div>
                            <div id= "expres">
                                <Link to= {`/dashboard/${exp.exp_id}/results`}>
                                    <div className= "iconhov">
                                        <img src= {Export} alt= "Export Icon" />
                                    </div>
                                </Link>
                            </div>
                        </li>
                    )
                };
                return true;
            })}
        </ul>
    )
}

export default Experiments;