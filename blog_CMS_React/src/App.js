
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Allposts from './pages/Allposts';
import Addapost from './pages/Addapost';
import Authors from './pages/Authors';
import Details from './pages/Details';
import Edit from './pages/Edit';
import Contact from './pages/Contact';
import Addaanuthor from './pages/Addaanuthor';


function App() {
  return (
   <>
   <Router>
   <Navbar />
   <Routes>
  
    <Route path="/" exact element={<Dashboard />}></Route>
    <Route path="/Allposts" exact element={<Allposts />}></Route>
    <Route path="/Addapost" exact element={<Addapost />}></Route>
    <Route path="/authors" exact element={<Authors />}></Route>
    <Route path="/edit/:id" exact element={<Edit />}></Route>
    <Route path="/details/:id/:title" exact element={<Details />}></Route>
    <Route path="/contact" exact element={<Contact />}></Route>
    <Route path="/Addaanuthor" exact element={<Addaanuthor />}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
