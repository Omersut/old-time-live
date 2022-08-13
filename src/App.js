import "./App.scss";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import Control from "./Components/Control";
import Tv from "./Components/Tv";
import Static from "./Doc/static.mp3";
import documentry from "./Doc/documentry";
import opts from "./Doc/opts";

function App() {
  const [year, setYear] = useState(80);
  const [video, setVideo] = useState("");
  const [newVideo, setNewVideo] = useState(video);
  const [videoData, setVideoData] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("Music");
  const categories = ["Music", "TV Series"];
  const years = [80, 90, 0];
  const [change, setChange] = useState(false);
  let time = null;


  const Change = () => {
    setChange(!change);
    let audio = new Audio(Static);
    audio.volume = 0.1;
    audio.play();
    setVideo(VideoChange());
    console.log("change", video);
  };

  const myTimeout = () => {
    if(!change){
      time = setTimeout(() => {
        Change();
      }, 100000);
    }else{
      clear();

    }
 

  }
  const clear = () => {
      if (time) {
        clearTimeout(time);
      time = null;
      
      }
      time = setTimeout(() => {
        Change();
      }, 100000);
      
  }
  const [videoDiv, setVideoDiv] = useState(
    <YouTube className="youtube" videoId={video} opts={opts} />
  );
  const VideoChange = () => {
    if (category == "Music") {
      let random = Math.floor(
        Math.random() *
          (year == 80
            ? documentry.eighties.music.length
            : year == 90
            ? documentry.nineties.music.length
            : documentry.noughties.music.length)
      );
      return year == 80
        ? documentry.eighties.music[random]
        : year == 90
        ? documentry.nineties.music[random]
        : documentry.noughties.music[random];
    } else if (category == "News") {
    } else {
      let random = Math.floor(
        Math.random() *
          (year == 80
            ? documentry.eighties.tvSeries.length
            : year == 90
            ? documentry.nineties.tvSeries.length
            : documentry.noughties.tvSeries.length)
      );
      return year == 80
        ? documentry.eighties.tvSeries[random]
        : year == 90
        ? documentry.nineties.tvSeries[random]
        : documentry.noughties.tvSeries[random];
    }

  };
 
  useEffect(() => {
    setTimeout(() => {
      setVideoDiv(
        <YouTube
          className="youtube"
          videoId={VideoChange()}
          opts={opts}
          onReady={(e) => {
            setVideoData(e.target);
            window.document.title = videoData.videoTitle == undefined ? "Old TV" : videoData.videoTitle.slice(0, 29);
            console.log("onread", video);
            setNewVideo(video);
          }}
          onError={Change}
        />
      );
    console.log("time", video);
      
    }, 300);
    myTimeout();
  }, [change]);

  

  return (
    <div className="App">
      <Control
        year={year}
        documentry={documentry}
        categories={categories}
        setCategory={setCategory}
        category={category}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        Change={Change}
        setChange={setChange}
        change={change}
      />
      <Tv
        Change={Change}
        years={years}
        isOpen={isOpen}
        setYear={setYear}
        year={year}
        videoDiv={videoDiv}
        videoData={videoData}
        category={category}
      />
      <div className="footer">
        <ul className="nav">
          <li>how to work</li>
          <li>who am i</li>
          <li>what is this</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
