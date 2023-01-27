import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ShelterList from '../components/ShelterList';
import { Link } from "react-router-dom";


const Main = (props) => {
    const [shelter, setShelter] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/shelter')
            .then(res=>{
                setShelter(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    return (
        <div>
            <div className="d-flex justify-content-between">
                <h1 className="text-center">Pet Shelter</h1>
                <Link to={`/new`} className="text-center"><p>add a pet to the shelter</p></Link>
            </div>
            <h2>These pets are looking for a good home</h2>
            <hr/>
            {loaded && <ShelterList shelter={shelter}/>}
        </div>
    )
}

export default Main;