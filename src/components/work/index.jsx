const MyWork = ({ title, exprience, progress = '20' }) => {
    return (
        <div className="skillBox py-3">
            <div className="work">
                <p className="d-inline me-auto">{title}</p>
                <p className=" d-inline float-end">{exprience}%</p>
                <div className="rangeBox">
                    <div className="range" style={{width: (progress+'%')}}></div>
                    
                </div>
            </div>

        </div>
    )
}
export default MyWork;