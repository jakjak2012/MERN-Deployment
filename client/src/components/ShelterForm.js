import React, { useState } from "react";
import axios from "axios"; 
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default() => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState([]);
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/shelter',{
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        })
            .then(res=>{
                console.log(res)
                navigate('/');
            })

            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return (
        <>
            <div>
                <div className="d-flex justify-content-between">
                    <h1 className="text-center">Pet Shelter</h1>
                    <Link to={`/`}><p className="text-center">back to home</p></Link>
                </div>
                <h2>Know a pet needing a home?</h2>
                <form onSubmit={onSubmitHandler}>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <p>
                        <label>Pet Name:</label>
                        <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                    </p>
                    <p>
                        <label>Pet Type:</label>
                        <input type="text" onChange={(e)=>setType(e.target.value)} value={type}/>
                    </p>
                    <p>
                        <label>Description:</label>
                        <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                    </p>
                    <p>
                        <label>Skill 1:</label>
                        <input type="text" onChange={(e)=>setSkill1(e.target.value)} value={skill1}/>
                    </p>
                    <p>
                        <label>Skill 2:</label>
                        <input type="text" onChange={(e)=>setSkill2(e.target.value)} value={skill2}/>
                    </p>
                    <p>
                        <label>Skill 3:</label>
                        <input type="text" onChange={(e)=>setSkill3(e.target.value)} value={skill3}/>
                    </p>
                    <input type="submit"/>
                </form>
            </div>
        </>
    )
}