import React, { useState } from 'react'
import { NavLink, useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Edit() {
    const {id} = useParams("");
 
    const [inpval, setINP] = useState({
        title:"",
        author:""
        })
        const[finddata, setfinddata] = useState([]);
        const[title, settitle] = useState("")
        const[author, setauthor] = useState("")
        const[aboutAuthor, setaboutAuthor] = useState("")
        const[category, setcategory] = useState("")
        const[para1, setpara1] = useState("")
        const[para2, setpara2] = useState("")
        const[para3, setpara3] = useState("")
        const[para4, setpara4] = useState("")
        const[para5, setpara5] = useState("")
        const[para6, setpara6] = useState("")
        


    const findItem = async (event, _id) => {
        try {
         await axios.get(`http://localhost:8880/find2/${_id}`).then(res=>{
           // console.log(res.data.title)
            //navigate("https://www.google.com/");
            setINP(res.data)
          })
        }
        catch (e) {
          console.log(e)
        }
      }

        const updateData = async (e, _id) => {
          e.preventDefault();
          try {
            console.log('Author ' + title)
            console.log('Id ' + typeof(id))
            await axios.post(`http://localhost:8880/admin_edit2/${id}/${title}/${author}/${aboutAuthor}/${category}/${para1}/${para2}/${para3}/${para4}/${para5}/${para6}`).then(res=>{
              
        })
       
           }
           catch(err){
              console.log(err)
            }
            }
      
  return (
    <>
    <div className='edit'>
       
    <div className='container m-n3'>
        <h2>Are you sure you want to edit the page?&nbsp;&nbsp;&nbsp;<button onClick={(event) => {findItem(event, id);}}>&nbsp;&nbsp;Yes&nbsp;&nbsp;</button>
        </h2><div className='container ml-1 mt-3'>
        <form onSubmit={(e)=>{updateData(e, id)}}>
            ID
            <input className="form-control" value={id} /><br/>
            Title
            <input className="form-control" name="title" type="text" 
            placeholder={inpval.title} onChange={(e) => {settitle(e.target.value)}} /><br/>
            Author
            <input className="form-control" name="author" type="text" 
            placeholder={inpval.author} onChange={(e) => {setauthor(e.target.value)}} /><br/>
            About Author
            <input className="form-control" name="aboutAuthor" type="text" 
            placeholder={inpval.aboutAuthor} onChange={(e) => {setaboutAuthor(e.target.value)}} /><br/>
            Category
            <input className="form-control" name="category" type="text" 
            placeholder={inpval.category} onChange={(e) => {setcategory(e.target.value)}} /><br/>
            Paragraph 1
            <input className="form-control" name="para1" type="text" 
            placeholder={inpval.para1} onChange={(e) => {setpara1(e.target.value)}} /><br/>
            Paragraph 2
            <textarea className="form-control" name="para2" rows={3} type="text" 
            placeholder={inpval.para2} onChange={(e) => {setpara2(e.target.value)}} /><br/>
             Paragraph 3
            <textarea className="form-control" name="para3" rows={3} type="text" 
            placeholder={inpval.para3} onChange={(e) => {setpara3(e.target.value)}} /><br/>
             Paragraph 4
            <textarea className="form-control" name="para4" rows={3} type="text" 
            placeholder={inpval.para4} onChange={(e) => {setpara4(e.target.value)}} /><br/>
             Paragraph 5
            <textarea className="form-control" name="para5" rows={3} type="text" 
            placeholder={inpval.para5} onChange={(e) => {setpara5(e.target.value)}} /><br/>
             Paragraph 6
            <textarea className="form-control" name="para6" rows={3} type="text" 
            placeholder={inpval.para6} onChange={(e) => {setpara6(e.target.value)}} /><br/>

            <button className="btn btn-warning" type="submit">Update</button>
            </form>
</div>
        </div></div>
    </>
  )
}