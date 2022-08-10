import { BiRightArrow } from 'react-icons/bi';
import { FaExchangeAlt,FaHeadphonesAlt } from 'react-icons/fa';
import { FiPause } from 'react-icons/fi';
import { MdOutlineTv, MdMovie } from 'react-icons/md'

const Control = ({categories, setCategory, category, isOpen, setIsOpen, Change,setChange, change, documentry}) => {
  const icons =[<FaHeadphonesAlt size={60} />, <MdOutlineTv size={60} />]

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
            {icons[i]} <sub>{category== "Music" ? documentry.eighties.music.length + documentry.nineties.music.length + 
            documentry.noughties.music.length : documentry.eighties.tvSeries.length + documentry.nineties.tvSeries.length + documentry.noughties.tvSeries.length}</sub>
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
          {isOpen ? <FiPause />  : <><div className="about">  {categories.map((c, i) => (<>
        
           
        <button
          className={"btn activeCategory"}
        >
          {icons[i]} <span className='detail' style={{margin: "10px"}}>{c}</span>
        </button>
      
      </>))}</div> <BiRightArrow /></>}
          
        </button>
        <button className="change" onClick={Change}>
          <FaExchangeAlt onClick={Change} />
        </button>
      </div>
    </div>
  );
}
export default Control
