import '../styles/addvideos.css'
import vidlogo from "../image/vid.jpg"
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';


const AddVideos = () => {
 
  let Navigate = useNavigate()

  let tumbnail=useRef(null)
  let title =useRef(null)
  let channelName =useRef(null)
  let views =useRef(null)

  let submit=(e)=>
  {
      e.preventDefault()
      let data ={
      tumbnail:tumbnail.current.value,
      title:title.current.value,
      channelName:channelName.current.value,
      views:views.current.value
      }
    fetch('http://localhost:4000/videosdata',{
      method:'POST',
      headers:{'content-Type':'application/json'},
      body:JSON.stringify(data)

    })
    alert('videos added.....')
    Navigate('/')
  }



  return (
    <section className='main'>
      <form action="" onSubmit={submit}> 
      <div className='oness'>
         <h1>Add Videos</h1><br /><br /><br />
         
        <input  ref={tumbnail} type="text" placeholder='tumbnail' /><br />
        
        <input ref={title} type="text"  placeholder="Title"/><br />
        
        <input ref={channelName} type="text"  placeholder="Channel Name"/><br />
        
        <input ref={views} type="text"  placeholder="views"/><br />
        <button>Submit</button>
      
      
      <img src={vidlogo} alt="" />
      
</div>
        
      
      </form>
    </section>
     
  );
};

export default AddVideos;
