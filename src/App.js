import "./App.scss";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import Control from "./Components/Control";
import Tv from "./Components/Tv";
import Static from "./Doc/static.mp3";
import documentry from "./Doc/documentry";
import opts from "./Doc/opts";
import Footer from "./Components/Footer";

function App() {
  const [year, setYear] = useState(80);
  const [video, setVideo] = useState("");
  const [time, setTime] = useState(true);
  const [videoData, setVideoData] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("Music");
  const categories = ["Music", "TV Series"];
  const years = [80, 90, 0];
  const [change, setChange] = useState(false);
  let aa = null;
  const clear = (callback) => {
    if (aa) {
      clearTimeout(aa);
      aa = null;
      callback();
    }
  };
  const settime = () => {
    setTime(!time);
  };
  const Change = () => {
    setChange(!change);
    let audio = new Audio(Static);
    audio.volume = 0.1;
    audio.play();
    setVideo(VideoChange());
    console.log("change", video);
    clear(settime);
  };

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
    aa = setTimeout(
      () => {
        Change();
      },
      category == "Music" ? 75000 : 130000
    );
  }, [time]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setVideoDiv(
          <YouTube
            className="youtube"
            videoId={VideoChange()}
            opts={opts}
            onReady={(e) => {
              setVideoData(e.target);
              window.document.title =
                videoData.videoTitle == undefined
                  ? "Old TV"
                  : videoData.videoTitle;
            }}
            onError={Change}
          />
        );
      }, 300);
    }
  }, [change]);

  useEffect(() => {
    window.document.title =
      videoData.videoTitle == undefined ? "Old TV" : videoData.videoTitle;
  }, [videoData]);
  useEffect(() => {
    var str = navigator.userAgent;
    var instagram = str.indexOf("Instagram");
    var facebook = str.indexOf("FB");

    if (instagram != -1 || facebook != -1) {
      document.write(
        "<a id='a' style='background-color: black; color: #ff0000ba; position: absolute; border: 0; width: 100%; right: 0; top: 0; bottom: 0; left: 0; height: 100%; font-size: 3rem; opacity: 2; text-align: center; text-decoration: none; padding-top: 100px;' href={location.href} target='_blank' download>Loading...</a>"
      );
      var a = document.querySelector("#a");
      a.click();
    }
  }, []);

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
      <Footer />
    </div>
  );
}

export default App;
