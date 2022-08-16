const Tv = ({
  year,
  isOpen,
  category,
  setYear,
  videoDiv,
  videoData,
  years,
  Change,
}) => {
  return (
    <div className="options">
      {years.map((y, i) => (
        <div
          key={i}
          className={"option" + `${year == y ? " active" : ""}`}
          onClick={() => {
            setYear(y);
            Change();
          }}
        >
          {(year == y) & isOpen && videoDiv}
          <div className="shadow" />
          <div className="label">
            <div className="icon">
              <i className="fas fa-walking">{y == 0 ? "00" : y}s</i>
            </div>
            <div className="info">
              <div className="main">{isOpen && category}</div>
              <div className="sub">
                {isOpen &&
                videoData.videoTitle &&
                videoData.videoTitle.length > 35
                  ? videoData.videoTitle.slice(0, 34) + "..."
                  : videoData.videoTitle}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tv;
