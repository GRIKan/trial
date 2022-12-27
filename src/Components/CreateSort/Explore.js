import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

const Explore = ( {exp, created} ) => {
    const { id } = useParams();
    const [cdisabled, setCdisabled] = useState(false);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if (exp.type === 'open') {
            setDisabled(true);
            setCdisabled(false);
        }
        else if (created) {
            setCdisabled(true);
            setDisabled(true);
        }
        else {
            setDisabled(false);
            setCdisabled(false);
        };
    }, [exp.type, created]);

    const checkpublish = (e) => {
        if (cdisabled) {
            e.preventDefault();
        };
    };
    
    const checktype = (e) => {
        if (cdisabled || disabled) {
            e.preventDefault();
        };
    };

    return (
        <nav className= "explore">
            <NavLink to= {(created? `/dashboard/create` : `/dashboard/${id}`)} end>
                Γενικά
            </NavLink>
            <NavLink to= {`/dashboard/${id}/options`} onClick= {checkpublish} data-isdisabled= {cdisabled}>
                Επιλογές
            </NavLink>
            <NavLink to= {`/dashboard/${id}/cards`} onClick= {checkpublish} data-isdisabled= {cdisabled}>
                Κάρτες
            </NavLink>
            <NavLink to= {`/dashboard/${id}/categories`} onClick= {checktype} data-isdisabled= {disabled}>
                    Κατηγορίες
            </NavLink>
        </nav>
    )
}

export default Explore;