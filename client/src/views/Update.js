import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate, Link } from "react-router-dom";


const Update = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [shelter, setShelter] = useState({})
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/shelter/' + id)
            .then(res => {
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkill1(res.data.skill1);
                setSkill2(res.data.skill2);
                setSkill3(res.data.skill3);
            })
    }, []);
    
    const updateShelter = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/shelter/' + id, {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        })
            .then(res => {
                console.log(res)
                navigate('/');
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }
    
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h1 className="text-center">Pet Shelter</h1>
                <Link to={`/`}><p className="text-center">back to home</p></Link>
            </div>
            <h2>Edit {shelter.name}</h2>
            <form onSubmit={updateShelter}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <p>
                        <label>Pet Name:</label>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                    </p>
                    <p>
                        <label>Pet Type:</label>
                        <input type="text" value={type} onChange={(e)=>setType(e.target.value)} />
                    </p>
                    <p>
                        <label>Description:</label>
                        <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} />
                    </p>
                    <p>
                        <label>Skill 1:</label>
                        <input type="text" value={skill1} onChange={(e)=>setSkill1(e.target.value)} />
                    </p>
                    <p>
                        <label>Skill 2:</label>
                        <input type="text" value={skill2} onChange={(e)=>setSkill2(e.target.value)} />
                    </p>
                    <p>
                        <label>Skill 3:</label>
                        <input type="text" value={skill3} onChange={(e)=>setSkill3(e.target.value)}/>
                    </p>
                    <input type="submit"/>
                </form>
        </div>
    )
}
    
export default Update;