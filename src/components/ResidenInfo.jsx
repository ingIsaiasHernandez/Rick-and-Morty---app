import axios from 'axios';
import React from 'react';
import {useState, useEffect} from 'react';

const ResidenInfo = ({resident}) => {

    const [isresident, setIsResident] = useState({});

    useEffect(() =>{
        // const idNumber = Math.floor(Math.random() * 125 + 1);
        axios.get(resident)
            .then(res => setIsResident(res.data))
    },[])

    console.log(isresident);


    return (
       

            <div className="resident-content">

                <div className="residen-img">
                    <img src={isresident.image} alt="Actor" className="residen" />
                    <p  className={`status`}><div className={`circle-${isresident.status}`}></div>{isresident.status}</p>

                </div>

                <div className="resident-text">
                    <h2>{isresident.name}</h2>
                    <h2>{isresident.species}</h2>
                    <h3>origin: </h3>
                    <h2>{isresident?.origin?.name}</h2>
                    <h3>episodes where appear: </h3>
                    <h2>{isresident?.episode?.length}</h2>
                </div>

            </div>
            
            
    );
};

export default ResidenInfo;