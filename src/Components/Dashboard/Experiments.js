import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Delete from '../../Images/delete.png';
import Export from '../../Images/export.png';

const Experiments = ( {exps, setTheexp, setSure, setPop} ) => {

    // console.log(data["user1"].experiments);
    // console.log(experiments);

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
                return (
                    <li className= "exptable" key= {exp.exp_id}>
                        <div id= "expname" title= {exp.name}>
                            <Link to={`/dashboard/${exp.exp_id}`}>
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
            })}
        </ul>
    )
}

export default Experiments;