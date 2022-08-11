import { BiRightArrow } from 'react-icons/bi';
import { FaExchangeAlt,FaHeadphonesAlt } from 'react-icons/fa';
import { FiPause } from 'react-icons/fi';
import { MdOutlineTv, MdMovie } from 'react-icons/md'
import { VscGithubInverted } from 'react-icons/vsc'

const Control = ({categories, setCategory, category, isOpen, setIsOpen, Change,setChange, change, documentry, year}) => {
  const icons =[<FaHeadphonesAlt size={60} />, <MdOutlineTv size={60} />]
  const iconsLoading =[<FaHeadphonesAlt size={60} />, <MdOutlineTv size={60} /> , <FiPause size={60} />, <BiRightArrow size={60} />]
  const categoriesLoading =["Music", "TV Series", "Pause", "Start"]


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
            {icons[i]} <sub>{c== "Music" ? (year == 80 ? documentry.eighties.music.length : year == 90 ? documentry.nineties.music.length : documentry.noughties.music.length) :( year == 80 ? documentry.eighties.tvSeries.length : year == 90 ? documentry.nineties.tvSeries.length : documentry.noughties.tvSeries.length)}</sub>
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
          {isOpen ? <FiPause />  : <><div className="about">  {categoriesLoading.map((c, i) => (<>
        
           
        <button
          className={"btn activeCategory"}
        >
          {iconsLoading[i]} <sub className='detail' style={{margin: "10px"}}>{c}</sub>
        </button>
      
      </>))}</div> <div className="social"><a href='https://omersut.com'>developed by <sup style={{color: "red"}}>omersut.com</sup></a> </div> <BiRightArrow /></>}
          
        </button>
        <button className="change" onClick={Change}>
          <FaExchangeAlt onClick={Change} />
        </button>
      </div>
    </div>
  );
}
export default Control
