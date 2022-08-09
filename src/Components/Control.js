import { BiRightArrow } from 'react-icons/bi';
import { FaExchangeAlt,FaHeadphonesAlt } from 'react-icons/fa';
import { FiPause } from 'react-icons/fi';
import { BsNewspaper } from 'react-icons/bs';
import { MdCameraRoll } from 'react-icons/md'

const Control = ({categories, setCategory, category, isOpen, setIsOpen, Change,setChange, change}) => {
  const icons =[<FaHeadphonesAlt size={60} />, <MdCameraRoll size={60} />, <BsNewspaper size={60} /> ]

  return (
    <div className="controls">
      <div className="categories">
        {categories.map((c, i) => (<>
        
           
          <button
            onClick={() => {
              setCategory(c);
              setChange(!change)
            }}
            className={"btn" + `${category == c ? " activeCategory" : ""}`}
          >
            {icons[i]} 
          </button>
        
        </>))}
      </div>
      <div className="control">
        <button
          className={"change" + `${!isOpen ? " start" : ""}`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <FiPause /> : <BiRightArrow />}
        </button>
        <button className="change" onClick={Change}>
          <FaExchangeAlt onClick={Change} />
        </button>
      </div>
    </div>
  );
}

export default Control