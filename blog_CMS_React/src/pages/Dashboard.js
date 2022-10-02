import React, {useState, useEffect, Component} from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { render } from 'react-dom';
import './Dashboard.css';

function Dashboard() {

    const[blogdata, setblogdata] = useState([]);
    const[userdata, setuserdata] = useState([]);

  const total = async () => {
    try {
      axios.get("http://localhost:8880/total").then(res=>{
        //console.log("getItem() function has been called..")
        //console.log(res.data[0].title)
        //setvname(res.data[0].title)
        setblogdata(res.data)
        console.log(res.data)
      })
    }
    catch (e) {
      console.log(e)
    }
  }

  const total_sub = async () => {
    try {
      axios.get("http://localhost:8880/total_sub").then(res=>{
        //console.log("getItem() function has been called..")
        //console.log(res.data[0].title)
        //setvname(res.data[0].title)
        setuserdata(res.data)
        console.log(res.data)
      })
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    total(); total_sub();
  }, [])

    const visit = async (event, _id) => {
        try {
          console.log(_id)
          const num = _id
          console.log(num)
          window.location.replace("http://localhost:8880/");
         
        }
        catch (event) {
          console.log(event)
        }
      }
      
    return (
        <>

        <div className='home bg-light'>
                <br />
                <div className="container-fluid bg-light">
                    <div className='row'>
                        <div className='col-10'>
                            <font className="font1">Welcome Admin ..!<br /></font>
                        </div>
                        <div className='col-2'>
                        <Button variant="success" onClick={(event) => {visit(event);}} >Visit the website</Button>
                        </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <font className="font2">Dashboard<br /><br /></font>
                            </div>
                        </div>
                    </div>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-warning">
                                    Number of Articles
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><font className="font3">{blogdata.total_articles}</font></h5>
                                    <p className="card-text"><font className="font4">Total</font></p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-warning">
                                    Number of Authors
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><font className="font3">3</font></h5>
                                    <p className="card-text"><font className="font4">Total</font></p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-warning">
                                    Number of Subscribers
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><font className="font3">{userdata.total_sub}</font></h5>
                                    <p className="card-text"><font className="font4">Total</font></p>
                                </div>
                            </div>
                        </div>
                    </div></div><br />

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-warning">
                                    Health Articles
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><font className="font3">{blogdata.health_articles}</font></h5>
                                    <p className="card-text"><font className="font4">Total</font></p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-warning">
                                    Technology Articles
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><font className="font3">{blogdata.technology_articles}</font></h5>
                                    <p className="card-text"><font className="font4">Total</font></p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-warning">
                                    Islam Articles
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><font className="font3">{blogdata.islam_articles}</font></h5>
                                    <p className="card-text"><font className="font4">Total</font></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
      
}

export default Dashboard;