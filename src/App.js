import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Sort from './Components/Sort/Sort';
import allusers from './Components/Data/users.json';

function App() {
    const [users, setUsers] = useState(allusers);
    const [user, setUser] = useState('1');
    // console.log(users);

    return (
        <div className= "App">
            <BrowserRouter>
                {/* <Sort /> */}
                <Routes>
                    <Route path= "/*" element= {<Home users= {users} setUsers= {setUsers} 
                        user= {user} setUser= {setUser} />} />
                    <Route path= "/dashboard/*" element= {<Dashboard userId= {user} setUserId= {setUser} />} />
                    <Route path= "/sort/*" element= {<Sort />} />
                </Routes>
                    {/* {auth && <Navigate to= "/dashboard" replace />} */}
            </BrowserRouter>
        </div>
    );
}

export default App;