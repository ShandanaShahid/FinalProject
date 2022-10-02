import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Authors.css';


export default function Addaanuthor() {
  const [name, setname] = useState("")
  const [about, setabout] = useState("")
  const [description, setdescription] = useState("")

  async function sendDataAPI(e) {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8880/api/add', {

        name,
        about,
        description
      })
        .then(function (response) {

          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      window.location.replace("http://localhost:3000/");
    }
    catch (err) {
      console.log(err)
    }
  }



  return (
    <>
      <div className='reports'>
        <div className='container m-4'>
          <h2>Add an Author</h2>
          <div>
            <div className='container mb-3'>
              <div className="mb-3">
                <br />
                <form onSubmit={(e) => { sendDataAPI(e) }}>
                  Name
                  <input className="form-control" name="name" type="text"
                    value={name} onChange={(e) => { setname(e.target.value) }} /><br />
                  Please select 
                  <select className="form-control" name="about" type="text"
                    value={about} onChange={(e) => { setabout(e.target.value) }}>
                    <option>Scholar</option>
                    <option>Professor</option>
                    <option>Doctor</option>
                  </select>
                  Description
                  <input className="form-control" name="description" type="text"
                    placeholder={description} onChange={(e) => { setdescription(e.target.value) }} /><br />

                  <button className="btn-lg btn-warning" type="submit" style={{ paddingLeft: '5.0rem', paddingRight: "5.0rem" }}>Add an Author</button>
                </form>

              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}


