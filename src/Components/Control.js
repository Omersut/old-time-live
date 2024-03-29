import { BiRightArrow } from "react-icons/bi";
import { FaExchangeAlt, FaHeadphonesAlt } from "react-icons/fa";
import { FiPause } from "react-icons/fi";
import { MdOutlineTv, MdMovie } from "react-icons/md";
import { VscGithubInverted } from "react-icons/vsc";

const Control = ({
  categories,
  setCategory,
  category,
  isOpen,
  setIsOpen,
  Change,
  setChange,
  change,
  documentry,
  year,
}) => {
  const icons = [<FaHeadphonesAlt size={50} />, <MdOutlineTv size={50} />];
  const iconsLoading = [
    <FaHeadphonesAlt size={35} />,
    <MdOutlineTv size={35} />,
    <FiPause size={35} />,
    <BiRightArrow size={35} />,
    <FaExchangeAlt size={35} />,
  ];
  const categoriesLoading = ["Music", "TV Series", "Pause", "Start", "Change"];

  return (
    <div className="controls">
      <img
        onClick={() => (window.location.href = "/")}
        src="https://i.hizliresim.com/e5js1q0.png"
        className="logo"
      />
      <div className="categories">
        {categories.map((c, i) => (
          <button
            key={i}
            onClick={() => {
              setCategory(c);
              Change();
            }}
            className={"btn" + `${category == c ? " activeCategory" : ""}`}
          >
            {icons[i]}{" "}
            <sub>
              {c == "Music"
                ? year == 80
                  ? documentry.eighties.music.length
                  : year == 90
                  ? documentry.nineties.music.length
                  : documentry.noughties.music.length
                : year == 80
                ? documentry.eighties.tvSeries.length
                : year == 90
                ? documentry.nineties.tvSeries.length
                : documentry.noughties.tvSeries.length}
            </sub>
          </button>
        ))}
        <button
          className="change"
          onClick={Change}
          style={{ marginRight: "10px" }}
        >
          <FaExchangeAlt size={50} />
        </button>
      </div>
      <div className="control">
        <button className={"change" + `${!isOpen ? " start" : ""}`}>
          {isOpen ? (
            <FiPause
              className="pause"
              onClick={() => setIsOpen(!isOpen)}
              size={50}
            />
          ) : (
            <>
              <div className="about">
                {" "}
                {categoriesLoading.map((c, i) => (
                  <button key={i} className={"btn activeCategory"}>
                    {iconsLoading[i]}{" "}
                    <sub className="detail" style={{ margin: "10px" }}>
                      {c}
                    </sub>
                  </button>
                ))}
              </div>{" "}
              <div className="social">
                <a href="https://omersut.com">
                  developed by <sup>omersut.com</sup>
                </a>{" "}
              </div>{" "}
              <BiRightArrow
                onClick={() =>
                  setTimeout(() => {
                    setIsOpen(!isOpen);
                    Change();
                  }, 200)
                }
              />
            </>
          )}
        </button>
        <button className="change chanel" onClick={Change}>
          <FaExchangeAlt size={80} />
        </button>
      </div>
    </div>
  );
};
export default Control;
