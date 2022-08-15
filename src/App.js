import "./App.scss";
import { BiRightArrow } from "react-icons/bi";
import { FaExchangeAlt, FaHeadphonesAlt } from "react-icons/fa";
import { FiPause } from "react-icons/fi";
import { MdOutlineTv, MdMovie } from "react-icons/md";
import { VscGithubInverted } from "react-icons/vsc";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { RiFolderWarningFill } from "react-icons/ri";
import Control from "./Components/Control";
import Tv from "./Components/Tv";
import Static from "./Doc/static.mp3";
import documentry from "./Doc/documentry";
import opts from "./Doc/opts";

function App() {
  const iconsLoading = [
    <FaHeadphonesAlt size={35} />,
    <MdOutlineTv size={35} />,
    <FiPause size={35} />,
    <BiRightArrow size={35} />,
    <FaExchangeAlt size={35} />,
  ];
  const categoriesLoading = ["Music", "TV Series", "Pause", "Start", "Change"];
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
                  : videoData.videoTitle.slice(0, 29);
            }}
            onError={Change}
          />
        );
      }, 300);
    }
  }, [change]);

  useEffect(() => {
    window.document.title =
      videoData.videoTitle == undefined
        ? "Old TV"
        : videoData.videoTitle.slice(0, 32);
  }, [videoData]);

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
          <li></li>
          <li></li>
          <li>
            <RiFolderWarningFill size={60} />
          </li>
          <div className="info">
            <div className="data">
              <div className="about">
                {" "}
                {categoriesLoading.map((c, i) => (
                  <>
                    <button className={"btn activeCategory"}>
                      {iconsLoading[i]}{" "}
                      <sub className="detail" style={{ margin: "10px" }}>
                        {c}
                      </sub>
                    </button>
                  </>
                ))}
                <div style={{ marginTop: "20px" }}>
                  developed by <sup style={{ color: "wheat" }}>omersut.com</sup>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default App;
