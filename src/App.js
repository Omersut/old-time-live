import './App.scss';
import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import Control from './Components/Control';
import Tv from './Components/Tv';
import Static from './static.mp3';


function App() {
  const [year, setYear] = useState(90)
  const documentry = {
    eighties: {
      music: [
        "OFHJHgvCZwg",
        "8yIVsJ6bFXc",
        "hf6g3MThywI",
        "KIiHdyjDyvk",
        "3XF_koGsmas",
        "IMEOeMwy89c",
      ]
    },
    nineties: {
      music: [
        "bdso4qwyul0",
        "6ahjwoNB01c",
        "Fed2MoNZNyw",
        "7Yv8IW8KSyY",
        "CxL1ukOw0hk",
        "BsrAkKjG4-w",
        "4tnyQ8lYH_k"
      ]
    },
    noughties: {
      music: [
       "SCZgGVqVsbY",
       "v74wiK7DY0A",
       "M-rZ3602Lm8",
       "idMIEUFP3Ys",
       "-jZbcAgOzUU",
       "1bfaZMiSHiw",
       "Ja3FAlRDApM",
      ]
    }
  }
  const [video, setVideo] = useState(() => {let random = Math.floor(Math.random() * documentry.nineties.music.length); return documentry.nineties.music[random]})
  const [videoData, setVideoData] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [category, setCategory] = useState("Music")
  const categories = ["Music", "TV Series", "News"];
  const opts = {
    width: "100%",
    height: "100%",
    transform: "scale(1.3)",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      start: 20,
      modestbranding: 1,
    },
  };
  const [change, setChange] = useState(false)
  
  const Change = () => {
    setChange(!change)
    let audio = new Audio(Static);
    audio.volume = 0.2;
    audio.play();
   }
  const [videoDiv, setVideoDiv] = useState(<YouTube
    className="youtube"
    videoId={video}
    opts={opts}
  />)
 
 
  useEffect(() => {
  let random = Math.floor(Math.random() * (year == 80 ? documentry.eighties.music.length : year == 90 ? documentry.nineties.music.length: documentry.noughties.music.length))
  setVideo(year == 80 ? documentry.eighties.music[random] : year == 90 ? documentry.nineties.music[random] : documentry.noughties.music[random])
  clearTimeout();
  setTimeout(() => {
    setVideoDiv(<YouTube
      className="youtube"
      videoId={video}
      opts={opts}
      onReady={(e) => {setVideoData(e.target); setTimeout(() => {
        Change();
      }, 120000)}}
    />)
  console.log(change, video, random);
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