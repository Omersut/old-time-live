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
  const icons =[<FaHeadphonesAlt size={60} />, <BsCameraReels size={60} />, <TbMicrophone2 size={60} />, <BsNewspaper size={60} /> ]
  const categories = ["Music", "Movies & Series", "Talk Show", "News"];
  const years = [80,90,0]
  const opts = {
    width: "100%",
    height: "100%",
    transform: "scale(1.3)",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const [videoDiv, setVideoDiv] = useState(<YouTube
    className="youtube"
    videoId={video}
    opts={opts}
    onReady={(e) => setVideoData(e.target)}
  />)
  const [change, setChange] = useState(false)
  const Change = () => {
   setChange(!change)
  }
    
  
  useEffect(() => {
  let random = Math.floor(Math.random() * (year == 80 ? documentry.eighties.music.length : year == 90 ? documentry.nineties.music.length: documentry.noughties.music.length))
  setVideo("");
  setTimeout(() => {
    setVideoDiv(<YouTube
      className="youtube"
      videoId={year == 80 ? documentry.eighties.music[random] : year == 90 ? documentry.nineties.music[random] : documentry.noughties.music[random]}
      opts={opts}
      onReady={(e) => setVideoData(e.target)}
    />)
  }, 7000);
  }, [year,change])
  
  
  return (
    <div className="App">
      <div className="controls">
       
       <div className="categories">
       {categories.map((c,i) => (
  <button
  onClick={() => {
    setCategory(c);
  }}
  className={"btn" + `${category == c ? " activeCategory" : ""}`}
>
 {icons[i]}
</button>
        ))}
       </div>
       <div className="control">
          <button
            className={"change" + `${!isOpen ? " start" : ""}`}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? <FiPause /> : <BiRightArrow />}{" "}
          </button>
          <button className="change" onClick={Change}>
            <FaExchangeAlt onClick={Change} />
          </button>
        </div>
     
      </div>
      <div className="options">
        {years.map((y) => (
          <div
            className={"option" + `${year == y ? " active" : ""}`}
            onClick={() => setYear(y)}
          >
            {(year == y) & isOpen && (
              videoDiv
            )}
            <div className="shadow" />
            <div className="label">
              <div className="icon">
                <i className="fas fa-walking">{y == 0 ? "00": y}s</i>
              </div>
              <div className="info">
                <div className="main">{isOpen && category}</div>
                <div className="sub">
                  {isOpen &&
                  videoData.videoTitle &&
                  videoData.videoTitle.length > 35
                    ? videoData.videoTitle.slice(0, 35) + "..."
                    : videoData.videoTitle}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="just">Just PC</div>
    </div>
  );
}

export default App;
