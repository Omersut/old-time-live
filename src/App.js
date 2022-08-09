import './App.scss';
import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import Control from './Components/Control';
import Tv from './Components/Tv';


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
  const categories = ["Music", "Movies & Series", "Talk Show", "News"];
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
  }, 400);
  }, [year,change])
  
  
  return (
    <div className="App">
      <Control categories={categories} setCategory={setCategory} category={category} isOpen={isOpen} setIsOpen={setIsOpen} Change={Change}/>
      <Tv isOpen={isOpen} setYear={setYear} year={year} videoDiv={videoDiv} videoData={videoData} category={category}  />
      <div className="just">Just PC</div>
    </div>
  );
}

export default App;
