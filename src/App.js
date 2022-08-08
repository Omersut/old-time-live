import './App.css';
import './App.scss';
import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import { BiRightArrow } from 'react-icons/bi';
import { FaExchangeAlt,FaHeadphonesAlt } from 'react-icons/fa';
import { FiPause } from 'react-icons/fi';
import { BsNewspaper, BsCameraReels  } from 'react-icons/bs';
import { TbMicrophone2 } from 'react-icons/tb';


function App() {
  const [year, setYear] = useState(90)
  const documentry = {
    eighties: {
      music: [
        "OFHJHgvCZwg",
        "8yIVsJ6bFXc",
      ]
    },
    nineties: {
      music: [
        "bdso4qwyul0",
        "6ahjwoNB01c",
        "Fed2MoNZNyw",
      ]
    },
    noughties: {
      music: [
       "SCZgGVqVsbY",
       "v74wiK7DY0A",
       "M-rZ3602Lm8",
       "idMIEUFP3Ys"
      ]
    }
  }
  const [video, setVideo] = useState(() => {let random = Math.floor(Math.random() * documentry.nineties.music.length); return documentry.nineties.music[random]})
  const [videoData, setVideoData] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [category, setCategory] = useState("Music")
 
  const opts = {
    width: "100%",
    height: "100%",
    transform: "scale(1.3)",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const Change = () => {
    if(year == 80){
      if(category == "Music"){
        let random = Math.floor(Math.random() * documentry.eighties.music.length);
        setVideo(documentry.eighties.music[random])
      }
    }
    if(year == 90){
      if(category == "Music"){
        let random = Math.floor(Math.random() * documentry.nineties.music.length);
        setVideo(documentry.nineties.music[random])
        console.log(video, random)

      }
    }
    if(year == 0){
      if(category == "Music"){
        let random = Math.floor(Math.random() * documentry.noughties.music.length);
        setVideo(documentry.noughties.music[random])
      }
    }
  }

  useEffect(() => {
    Change();
  }, [year])
  
  return (
    <div className="App">
       
        <div className="options" >

          <div className={"option" + `${year == 80 ? " active": ""}`}  onClick={() => setYear(80) }>
          {year == 80 & isOpen  && <YouTube className='youtube' videoId={video} opts={opts} onReady={(e)=> setVideoData(e.target)} />}
            <div className="shadow" />
            <div className="label">
              <div className="icon">
                <i className="fas fa-walking" >80s</i>
              </div>
              <div className="info">
              <div className="main">{isOpen && category}</div>
                <div className="sub">{isOpen && videoData.videoTitle && videoData.videoTitle.length > 35 ? videoData.videoTitle.slice(0, 35) + "...": videoData.videoTitle}</div>
              </div>
            </div>
          </div>
          <div className={"option" + `${year == 90 ? " active": ""}`} onClick={() => setYear(90) }>
          {year == 90  & isOpen && <YouTube className='youtube' videoId={video} opts={opts} onReady={(e)=> setVideoData(e.target)} />}
            <div className="shadow" />
            <div className="label">
              <div className="icon">
                <i className="fas fa-snowflake">90s</i>
              </div>
              <div className="info">
              <div className="main">{isOpen && category}</div>
              <div className="sub">{isOpen && videoData.videoTitle && videoData.videoTitle.length > 35 ? videoData.videoTitle.slice(0, 35) + "...": videoData.videoTitle}</div>
              </div>
            </div>
          </div>
          <div className={"option" + `${year == 0 ? " active": ""}`} onClick={() => setYear(0) }>
          {year == 0 & isOpen  && <YouTube className='youtube' videoId={video} opts={opts} onReady={(e)=> setVideoData(e.target)} />}
            <div className="shadow" />
            <div className="label">
              <div className="icon">
                <i className="fas fa-tree">00s</i>
              </div>
              <div className="info">
              <div className="main">{isOpen && category}</div>
              <div className="sub">{isOpen && videoData.videoTitle && videoData.videoTitle.length > 35 ? videoData.videoTitle.slice(0, 35) + "...": videoData.videoTitle}</div>
              </div>
            </div>
          </div>
        
        </div>
        <div className='controls'>
          <div className='control'>
         <button className={"change" + `${!isOpen ? " start": ""}`}  onClick={() => {setIsOpen(!isOpen)}}>{isOpen ? <FiPause/>: <BiRightArrow/> } </button>
         <button className='change' onClick={Change}><FaExchangeAlt/></button>
          </div>
         <button onClick={()=> {setCategory("Music")}} className={"btn" + `${category == "Music" ? " activeCategory": ""}`}><FaHeadphonesAlt size={60}/> </button>
         <button onClick={()=> {setCategory("Movies & Series")}} className={"btn" + `${category == "Movies & Series"  ? " activeCategory": ""}`}><BsCameraReels size={60}/> </button>
         <button onClick={()=> {setCategory("Talk Show")}} className={"btn" + `${category == "Talk Show" ? " activeCategory": ""}`}><TbMicrophone2 size={60}/> </button>
         <button onClick={()=> {setCategory("News")}} className={"btn" + `${category == "News" ? " activeCategory": ""}`}><BsNewspaper size={60}/> </button>         
        </div>

        </div>
   
  );
}

export default App;
