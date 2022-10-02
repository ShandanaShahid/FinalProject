import React, { useEffect, useState } from 'react'
import { NavLink, useParams, useHistory } from 'react-router-dom';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export default function Details() {

    const [getuserdata, setUserdata] = useState([]);
    const[finddata, setfinddata] = useState([]);
   // console.log(getuserdata);

    const { id } = useParams("");
    const { title } = useParams("");
     console.log(id);

    const findItem = async () => {
        try {
          console.log("this is an id" + id)
         // const num = toString(_id)
          console.log("type of id id " + typeof(id))
          console.log("id is" + id)
         await axios.get(`http://localhost:8880/find2/${id}`).then(res=>{
           // console.log(res.data.title)
            //navigate("https://www.google.com/");
            setfinddata(res.data)
          })
        }
        catch (e) {
          console.log(e)
        }
      }

      const visit = async (event) => {
        try {
          console.log("id for" + id)
          await axios.get(`http://localhost:8880/find3/${id}`).then(res=>{
            window.location.replace(`http://localhost:8880/article_details/${id}`);
          })
         
        }
        catch (event) {
          console.log(event)
        }
      }

      useEffect(() => {
        findItem();
      }, [])


  return (
    <>
           
      <div className='details'>
        <br /> <br />
      <div className='container'>
        <Card className="text-left">
      <Card.Header>{finddata.category}</Card.Header>
      <Card.Body>
        <Card.Title>{finddata.title}<hr></hr></Card.Title>
        <Card.Text>
        {finddata.para1},<br />{finddata.para2}, <br /><br />{finddata.para3}, <br /><br />{finddata.para4}, <br /><br />{finddata.para5}, <br /><br />{finddata.para6}
        </Card.Text>
        <Button variant="primary" onClick={(event) => {visit(event);}} >Visit the website</Button>
      </Card.Body>
      <Card.Footer className="text-muted">{finddata.createdAt}</Card.Footer>
    </Card>
    </div>
    </div>
    </>
  )
}
