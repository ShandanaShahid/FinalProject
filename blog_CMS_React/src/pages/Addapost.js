import React, {useState} from 'react'
import axios from 'axios'
import cors from 'cors'

function Addapost() {

 
//const[img, setimg] = useState("")

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

const myStyle = {
  width: '50%'
}

async function sendDataAPI(e){
  e.preventDefault();

  try{
      console.log('Data Send API Called .... ' + {title})

       await axios.post('http://localhost:8880/api/save2', {
        
         title,
         author,
         aboutAuthor,
         category,
         para1,
         para2,
         para3,
         para4,
         para5,
         para6
       })
       .then(function (response) {
       
         console.log(response);
       })
       .catch(function (error) {
         console.log(error);
       });
       window.location.replace("http://localhost:3000/home");
      }
      catch(err){
        console.log(err)
      }
      }

      
  return (
    <div className='reports'>
      <div className='container m-4'>
      <h2>Add a Blog</h2>
      <div>
        <div className='container mb-3'>
          <div className="mb-3">
              <br/>

            {/* inline function calling*/}
            <form onSubmit={(e)=>{sendDataAPI(e)}}>
            Title
            <input className="form-control" name="title" type="text" 
            value={title} onChange={(e) => {settitle(e.target.value)}}/><br/>
            Author
            <input className="form-control" name="author" type="text" 
            value={author} onChange={(e) => {setauthor(e.target.value)}}/><br/>
            About Author
            <input className="form-control" name="aboutAuthor" type="text" 
            placeholder={aboutAuthor} onChange={(e) => {setaboutAuthor(e.target.value)}} /><br/>
            Category
            <input className="form-control" name="category" type="text" 
            value={category} onChange={(e) => {setcategory(e.target.value)}}/><br/>
            Paragraph 1
            <textarea className="form-control" name="para1" type="textarea" rows="3"
            value={para1} onChange={(e) => {setpara1(e.target.value)}} /><br/>
            Paragraph 2
            <textarea className="form-control" name="para2" rows={3} type="text" 
            placeholder={para2} onChange={(e) => {setpara2(e.target.value)}} /><br/>
             Paragraph 3
            <textarea className="form-control" name="para3" rows={3} type="text" 
            placeholder={para3} onChange={(e) => {setpara3(e.target.value)}} /><br/>
             Paragraph 4
            <textarea className="form-control" name="para4" rows={3} type="text" 
            placeholder={para4} onChange={(e) => {setpara4(e.target.value)}} /><br/>
             Paragraph 5
            <textarea className="form-control" name="para5" rows={3} type="text" 
            placeholder={para5} onChange={(e) => {setpara5(e.target.value)}} /><br/>
             Paragraph 6
            <textarea className="form-control" name="para6" rows={3} type="text" 
            placeholder={para6} onChange={(e) => {setpara6(e.target.value)}} /><br/>

  <button className="btn-lg btn-warning" type="submit" style={{ paddingLeft:'5.0rem', paddingRight: "5.0rem"}}>Add a blog</button>
            </form>
              
          </div>
         
        </div>        
    </div>
    </div>
    </div>
  );
}

export default Addapost;