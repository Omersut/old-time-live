
const Tv = ({year, isOpen, category, setYear, videoDiv, videoData}) => {
  const years = [80,90,0]

  return (
    <div className="options">
        {years.map((y) => (
          <div
            className={"option" + `${year == y ? " active" : ""}`}
            onClick={() => setYear(y)}
          >
            {(year == y) & isOpen && (
              videoDiv
            )}
            <div className="shadow" />
            <div className="label">
              <div className="icon">
                <i className="fas fa-walking">{y == 0 ? "00": y}s</i>
              </div>
              <div className="info">
                <div className="main">{isOpen && category}</div>
                <div className="sub">
                  {isOpen &&
                  videoData.videoTitle &&
                  videoData.videoTitle.length > 35
                    ? videoData.videoTitle.slice(0, 35) + "..."
                    : videoData.videoTitle}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}

export default Tv