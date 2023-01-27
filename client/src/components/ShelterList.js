import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const ShelterList = (props) => {

    return (
        <div className="mx-auto table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {props.shelter.map((shelter, i) => (
                <>
                  <tr key={i}>
                    <td>{shelter.name}</td>
                    <td>{shelter.type}</td>
                    <td>
                      <Link to={`/shelter/edit/${shelter._id}`}>Edit</Link>| 
                      <Link to={`/shelter/${shelter._id}`}>Detail</Link>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      );
}

export default ShelterList;