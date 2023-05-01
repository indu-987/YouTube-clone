import '../styles/Sidebar.css'

const  Sidebar = () => {
    return ( 

        <div className="sidebars">
        <div className="sidebarlink">

          <ul>
           <li> <img src="/images/home.png" width="25px" alt="" /><a href=""> Home</a></li>
           <li> <img src="/images/shots.png"  width="25px" alt="" /><a href=""> Shorts</a></li>
           <li> <img src="/images/subs.png" width="25px" alt="" /><a href="">Subscription</a></li>
           <li> <img src="/images/lib.png" width="25px" alt="" /><a href="">Library</a></li>
           <li> <img src="/images/history.png" width="25px" alt="" /><a href="">History</a></li>
           <li> <img src="/images/trending.png" width="25px" alt="" /><a href="">Trending</a></li>
           <li> <img src="/images/shopping.png" width="25px" alt="" /><a href="">shopping</a></li>
           <li> <img src="/images/music.png"  width="25px" alt="" /><a href="">Music</a></li>
          





          </ul>

        </div>
        </div>
        
     );
}
 
export default Sidebar ;