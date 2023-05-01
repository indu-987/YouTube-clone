import { useEffect, useState } from "react";
// import "../styles/Videos.css"
import VideoCard from "./Videocard";

const Videos = () => {

     let [vides, setVideos] = useState([]);

     useEffect (()=>{
      let fet = async()=>{

        let response =await fetch("http://localhost:4000/videosdata");
        let datass =  await response.json();
        setVideos(datass)
      }
      fet()
     },[])

   let removevideos=(id) =>  {
    setVideos(vides.filter((x)=>x.id!==id))
    
   }

  return (
    <div className="videose">
      <VideoCard  data={vides}  remove={removevideos} title=""all videsos/>
      <VideoCard  data={vides.filter(x=>x.views>=20)}  remove={removevideos}/>

    </div>
  );
};

export default Videos;
