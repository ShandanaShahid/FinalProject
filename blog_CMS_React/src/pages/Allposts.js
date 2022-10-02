import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

function Allposts() {

  const[blogdata, setblogdata] = useState([]);
  const[finddata, setfinddata] = useState([]);

  const getItem = async () => {
    try {
      axios.get("http://localhost:8880/api/all").then(res=>{
        //console.log("getItem() function has been called..")
        //console.log(res.data[0].title)
        //setvname(res.data[0].title)
        setblogdata(res.data)
      })
    }
    catch (e) {
      console.log(e)
    }
  }

  const deleteItem = async (event, _id) => {
    try {
      console.log(_id)
      const num = _id
      console.log(num)
     await axios.get(`http://localhost:8880/delete2/${num}`).then(res=>{
      window.location.reload(true);       
      })
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getItem();
  }, [])

  return (
    <div className='products'>
      <br />

<table className="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Category</th>
      <th scope="col">Author</th>
      <th scope="col">Details</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
  {
     blogdata.map(blogs=>(
    <tr>
      <td>{blogs.title}</td>
       <td>{blogs.category}</td>
      <td>{blogs.author}</td>
      <td><NavLink to={`/details/${blogs._id}/${blogs.title}`}> <button className="btn btn-success">Details</button></NavLink></td>

     <td><NavLink to={`/edit/${blogs._id}`}> <button className="btn btn-success">Edit</button></NavLink></td> 
      <td><button type="button" className="btn btn-primary" onClick={(event) => {deleteItem(event, blogs._id);}} >Delete</button></td>
    </tr> 
     ))
    }
   
  </tbody>
</table>

         




    </div>
  );
}

export default Allposts;