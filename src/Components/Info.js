import { BiRightArrow } from "react-icons/bi";
import { FaExchangeAlt, FaHeadphonesAlt } from "react-icons/fa";
import { FiPause } from "react-icons/fi";
import { MdOutlineTv } from "react-icons/md";

const Info = () => {
  const iconsLoading = [
    <FaHeadphonesAlt size={35} />,
    <MdOutlineTv size={35} />,
    <FiPause size={35} />,
    <BiRightArrow size={35} />,
    <FaExchangeAlt size={35} />,
  ];
  const categoriesLoading = ["Music", "TV Series", "Pause", "Start", "Change"];
  return (
    <div className="info-control">
      <div className="data">
        <div className="about">
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
  );
};

export default Info;
