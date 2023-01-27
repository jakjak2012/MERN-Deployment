import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";
    
const Detail = (props) => {
    const navigate = useNavigate();
    const [shelter, setShelter] = useState({})
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const { id } = useParams();
    const { removeFromDom } = props;

    const deleteShelter = (shelterId) => {
        axios.delete('http://localhost:8000/api/shelter/' + shelterId)
            .then(res=> {
                removeFromDom(shelterId)
                navigate('/');
            })
            .catch(err => console.log(err));
    }
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/shelter/' +id)
            .then(res => setShelter(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <div className="d-flex justify-content-between"><h1>Pet Shelter</h1><Link to={`/`}><p>back to home</p></Link></div>
            <div className="d-flex justify-content-between"><h2>Details about: {shelter.name}</h2><button onClick={() => deleteShelter(shelter._id)}>Adopt {shelter.name}</button></div>
            <div className="border border-dark">
                <p>Type: {shelter.type}</p>
                <p>Description: {shelter.description}</p>
                <p>Skills: {shelter.skill1}, {shelter.skill2}, {shelter.skill3}</p>
            </div>
        </div>
    )
}
    
export default Detail;