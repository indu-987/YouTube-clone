import "../styles/Videos.css"

const VideoCard = (props) => {
    let vides=props.data
    let removevideos = props.remove

    return ( 
        <div className="videos">
            
        {vides.map((data) => (
            <div className="videos_List">
              <img src={data.tumbnail} height="202" width="300" alt="" />
              <p>{data.title}</p>
              <div className="info">
                <div className="one">
               <p>{data.channelName}</p>
              <p>{data.views}M views</p>
              </div>
              <div className="two">
                <a onClick={()=>removevideos(data.id)}> Not intrested</a>
              </div>
    
              </div>
            </div>
          ))}
           </div>
     );
    
}
 
export default VideoCard;