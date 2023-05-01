import notfind from "../image/monkey.jpg"
import '../styles/notfound.css'
import LogoI from '../image/logo.png'


const PageNotFound = () => {
    return ( 
        <div className="mainerror">
        <div >
        <img className="mo" src={notfind} alt="" />

       <h1>This page isn't available. Sorry about that.Try searching for something else.</h1>
        <img  className="lo" src={LogoI} alt="" />
        <a href="http://localhost:3000/"><button>
        BackToHome
       </button></a>
        </div>
        </div>
     );
}
 
export default PageNotFound;