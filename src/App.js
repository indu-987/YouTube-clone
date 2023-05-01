
import './App.css';
import Navbar from './components/navbar';
import Sidebar from './components/Sidebar';
import Homepage from './components/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/about';
import AddVideos from './components/addVideos';
import PageNotFound from './components/PageNotFound';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        {/*common page*/}
        <Navbar />

        <Routes>
           {/*Home page*/}
          <Route path='/' element={<div className="homepage">
            <Sidebar />
            <Homepage />
          </div>} />
           {/*About page*/}
          <Route path='/about' element={<About/>}/>
           {/*Add videos*/}
          <Route path='/addvideos' element={<AddVideos/>}/>
          <Route path='*'  element={<PageNotFound/>}/>
        </Routes>



      </BrowserRouter>


    </div>
  );
}

export default App;
