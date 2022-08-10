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
        "KzltzRmdDDk", "ZwYkM2HKsFY","sU67JnNuqSA", "zh4v3lAFfwA", "IcwW4avUPaE", "3oGTKEAQ694", "S8SGGEoVUp4", 
"UcQGFTqTlwk", "UTmHBNqStNQ", "dZTMjgOSx4s"
      ],
      tvSeries:[
        "zfa-z_VPQsw",
        "q-vsmHYdzps",
        "S60fL7Oq0Hw",
        "JngkVJ0Vfzk",
        "g3dErh2-wiw",
        "GZj-b3ImnMM",
        "G1hJmTJRY_c", "-uLzxylfsNo", "3FO42hqJXHQ", "d0HJGgf3YsA",
      ]
    },
    nineties: {
      music: [
        "bdso4qwyul0",
        "6ahjwoNB01c",
        "Fed2MoNZNyw",
        "mQhz3n-WSHI",
        "CxL1ukOw0hk",
        "BsrAkKjG4-w",
        "4tnyQ8lYH_k",
        "dr2-D19CGQE", "m5J6-bCMz3Y","dFuoLXZ4jgY", "zQrwstE9UHA","IlLtV4sEYrs", "f0UZ5vGnleE", "zBKMvL1EDHg","PklE4i4ViCc",
"kHD3Q8cJn7k", "h-jvl5Yo184"
      ],
      tvSeries:[
        "d9tvSjfCJRk",
        "kXD2zKOsUs8",
        "_-J6MZMaM9c",
        "guP1VZNHtJg",
        "_ri1WpqVPx0",
        "YULfT3zIdvo",
        "BjQou5OvRq8",
        "9-kiOLHarBU", "O1riHlyDC3Q", "N7XSyO9-o4s", "wC5RIm5Snwg","lDyYHGYEXDI", "jCfkKs_saQ4","svRsVajOnrU","l8FKsXYQDR8",
"BuDj0yZb1JU", "-qpTwsA2w88","-MSb8FuX_7k", "ai0XXW6d4IU", "HSAD2b3f4KU","RNIzW6PU_gQ", "iTorp9-GMk4", "1wEzQyAcLQI", 
"pLxuWbZcMTE", "D5eagKBnieA"

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
      ],
      tvSeries:[
        "t8HVHo1AYJg",
        "s7l76vmi3Lw",
        "5_Kv96kDbNE",
        "WfoilGdRR3k", "vk-d22zGtzc", "W3Lvp13hA1E","g62DStXVPbU",
      ]
    }
  }
  const [video, setVideo] = useState(() => {let random = Math.floor(Math.random() * documentry.nineties.music.length); return documentry.nineties.music[random]})
  const [videoData, setVideoData] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [category, setCategory] = useState("Music")
  const categories = ["Music", "TV Series"];
  const years = [80,90,0]

  const opts = {
    width: "100%",
    height: "100%",
    transform: "scale(1.3)",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      start: 25,
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
 const VideoChange = () =>{
  if(category=="Music"){
    let random = Math.floor(Math.random() * (year == 80 ? documentry.eighties.music.length : year == 90 ? documentry.nineties.music.length: documentry.noughties.music.length))
    return year == 80 ? documentry.eighties.music[random] : year == 90 ? documentry.nineties.music[random] : documentry.noughties.music[random]
  }
  else if(category=="News"){
    
  }else{
    let random = Math.floor(Math.random() * (year == 80 ? documentry.eighties.tvSeries.length : year == 90 ? documentry.nineties.tvSeries.length: documentry.noughties.tvSeries.length))
    return year == 80 ? documentry.eighties.tvSeries[random] : year == 90 ? documentry.nineties.tvSeries[random] : documentry.noughties.tvSeries[random]
  }
 }
 
 
  useEffect(() => {
  setVideo(VideoChange())
  clearInterval(time);
  setTimeout(() => {
    setVideoDiv(<YouTube
      className="youtube"
      videoId={VideoChange()}
      opts={opts}
      onReady={(e) => {setVideoData(e.target)}}
    />)
  }, 400);
  var time = setInterval(() => {
    Change();
    console.log("a");
  }, category== "Music" ? 120000: category=="News" ? 120000 : 287000)
  }, [year, change])
  
  
  return (
    <div className="App">
      <Control documentry={documentry} categories={categories} setCategory={setCategory} category={category} isOpen={isOpen} setIsOpen={setIsOpen} Change={Change} setChange={setChange} change={change}/>
      <Tv years={years} isOpen={isOpen} setYear={setYear} year={year} videoDiv={videoDiv} videoData={videoData} category={category}  />
      <div className="just">Just PC</div>
    </div>
  );
}

export default App;
