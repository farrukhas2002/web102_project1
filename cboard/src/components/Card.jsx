const Card = (props) => {
  return (
    <div className="Card">
        <img src={'/' + props.event + '.webp'} width="300" height="300" alt="image should be here"/>
        <h3>{props.eventname}</h3>
        <h5>{props.date} @ {props.time}</h5>
        <button>See Details</button>
    </div>
  )

}

export default Card;