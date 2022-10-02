import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Authors.css';

export default function Authors() {
  const [authordata, setauthordata] = useState([]);
  const [articles, setarticles] = useState([]);

  const total = async () => {
    try {
      axios.get("http://localhost:8880/total").then(res=>{
        //console.log("getItem() function has been called..")
        //console.log(res.data[0].title)
        //setvname(res.data[0].title)
        setarticles(res.data)
        console.log(res.data)
      })
    }
    catch (e) {
      console.log(e)
    }
  }

  const getItem = async () => {
    try {
      axios.get("http://localhost:8880/api/allauthors").then(res => {
        setauthordata(res.data)
      })
    }
    catch (e) {
      console.log(e)
    }
  }

  const add = async (event, _id) => {
    try {
      console.log(_id)
      const num = _id
      console.log(num)
      window.location.replace("http://localhost:3000/Email1");

    }
    catch (event) {
      console.log(event)
    }
  }

  const Read = async (event, _id) => {
    try {
      console.log(_id)
      const num = _id
      console.log(num)
      window.location.replace("http://localhost:8880/profiles");
     
    }
    catch (event) {
      console.log(event)
    }
  }

  useEffect(() => {
    getItem(); total();
  }, [])
  
  return (
    <>
      <div className='authors bg-light'>
        <br />
        <Alert variant="success" style={{ marginLeft: '1.0rem' }}>
          <Alert.Heading>Hey, nice to see you</Alert.Heading>
          <p>
            I am grateful for the time you have invested in reading what we write. Ask any of us and we will tell you the hours we spend in creating these posts, and the discussions we have about what topics to tackle. But without you the effort would be for naught.
          </p>
          <hr />
          <p className="mb-0">
            Below is the profile of  our authors who made all this possible for you.
          </p>
        </Alert>
        <div className='row'>
          <div className='col-10'>
            <font className="font1"></font>
          </div>
          <div className='col-2'>
            <Button variant="success" onClick={(event) => { add(event); }} >Add an author</Button>
          </div>
        </div>

        <Container>
          <Row>
            <Col>
        {
        authordata.map(author => {
        if (author.name == 'Shahid Jamal') {
          return <Card className="bg-light text-dark" style={{ marginTop: '2.0rem' }}>
          <Card.Header style={{ paddingLeft: '1.0rem', paddingTop: '1.0rem' }}><b>{author.name}</b></Card.Header>
          <Card.Body>
          <Card.Text style={{ paddingLeft: '1.0rem', paddingTop: '1.0rem' }}>{author.about}</Card.Text>
          <Card.Text style={{ paddingLeft: '1.0rem', paddingBottom: '1.0rem' }}>{author.description}</Card.Text>
          <Button variant="warning" onClick={(event) => {Read(event); }}>Read Articles</Button>
          </Card.Body>
          <Card.Footer style={{ paddingLeft: '1.0rem', paddingTop: '1.0rem' }}><b>Number of Articles:  {articles.health_articles}</b></Card.Footer>                 
        </Card>
        }
        else if (author.name == 'Ahmed Bilal') {
          return <Card className="bg-light text-dark" style={{ marginTop: '2.0rem' }}>
          <Card.Header style={{ paddingLeft: '1.0rem', paddingTop: '1.0rem' }}><b>{author.name}</b></Card.Header>
          <Card.Body>
          <Card.Text style={{ paddingLeft: '1.0rem', paddingTop: '1.0rem' }}>{author.about}</Card.Text>
          <Card.Text style={{ paddingLeft: '1.0rem', paddingBottom: '1.0rem' }}>{author.description}</Card.Text>
          <Button variant="warning">Read Articles</Button>
          </Card.Body>
          <Card.Footer style={{ paddingLeft: '1.0rem', paddingTop: '1.0rem' }}><b>Number of Articles:  {articles.islam_articles}</b></Card.Footer>                 
        </Card>
        }
        else if (author.name == 'Muhammad Jamil') {
          return <Card className="bg-light text-dark" style={{ marginTop: '2.0rem' }}>
          <Card.Header style={{ paddingLeft: '1.0rem', paddingTop: '1.0rem' }}><b>{author.name}</b></Card.Header>
          <Card.Body>
          <Card.Text style={{ paddingLeft: '1.0rem', paddingTop: '1.0rem' }}>{author.about}</Card.Text>
          <Card.Text style={{ paddingLeft: '1.0rem', paddingBottom: '1.0rem' }}>{author.description}</Card.Text>
          <Button variant="warning">Read Articles</Button>
          </Card.Body>
          <Card.Footer style={{ paddingLeft: '1.0rem', paddingTop: '1.0rem' }}><b>Number of Articles:  {articles.technology_articles}</b></Card.Footer>                 
        </Card>
        }
        
        else {
          return <Card className="bg-light text-dark" style={{ marginTop: '2.0rem' }}>
          <Card.Header style={{ paddingLeft: '1.0rem', paddingTop: '1.0rem' }}><b>{author.name}</b></Card.Header>
          <Card.Body>
          <Card.Text style={{ paddingLeft: '1.0rem', paddingTop: '1.0rem' }}>{author.about}</Card.Text>
          <Card.Text style={{ paddingLeft: '1.0rem', paddingBottom: '1.0rem' }}>{author.description}</Card.Text>
          <Button variant="warning" >Read Articles</Button>
          </Card.Body>
          <Card.Footer style={{ paddingLeft: '1.0rem', paddingTop: '1.0rem' }}><b>He is a new Author</b></Card.Footer>                 
        </Card>
        }
      })}
       </Col>
          </Row>
        </Container>

        <br />
      </div>
    </>
  )
}
