import { BiRightArrow } from 'react-icons/bi';
import { FaExchangeAlt,FaHeadphonesAlt } from 'react-icons/fa';
import { FiPause } from 'react-icons/fi';
import { BsNewspaper, BsCameraReels  } from 'react-icons/bs';
import { TbMicrophone2 } from 'react-icons/tb';

const Control = ({categories, setCategory, category, isOpen, setIsOpen, Change}) => {
  const icons =[<FaHeadphonesAlt size={60} />, <BsCameraReels size={60} />, <TbMicrophone2 size={60} />, <BsNewspaper size={60} /> ]

  return (
    <div className="controls">
      <div className="categories">
        {categories.map((c, i) => (
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
  );
}

export default Control