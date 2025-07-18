const Exprience = ({date, title, body}) => {
    return(
        <div className="exprience">
            <h5 className="date d-inline-block p-1 my-2">{date}</h5>
            <h3>{title}</h3>
            <p className="timelineBody text-white-50">{body}</p>
            <hr/>
        </div>
    )
}
export default Exprience;