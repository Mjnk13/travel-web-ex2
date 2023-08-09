import { Link } from "react-router-dom";

type tripList = {
    trips: Array<object>;
}

const TripsList = (props: tripList) => {
    return ( 
        <div className="trips-area">
            <div className="container row m-0 pe-md-0">
                {props.trips.map((trip:any) => (
                    <Link to={"/package-detail/information/" + trip.key} className="text-decoration-none col-lg-6 p-4 card-wrap" key={"trip-" + trip.key}>
                        <div className="card border-0">
                            <img src={trip.cardImg} className="card-img-top" alt={trip.country}/>
                            <div className="card-body p-0">
                                <div className="d-flex justify-content-around p-2 mb-3" style={{backgroundColor: "#DF6951"}}>
                                    <p className="m-0"><i className="fa-solid fa-calendar-days"></i> {trip.date}</p>
                                    <p className="m-0"><i className="fa-solid fa-users"></i> {trip.numPeople}</p>
                                </div>
                                <div className="ps-3">
                                    <h3 className="card-title fw-bold">{trip.country}</h3>
                                    <p className="card-text">{trip.shortDescription}</p>
                                    <div className="d-flex">
                                        <p className="me-3 fw-bold m-0">{trip.price} $</p>
                                        <p><i className="fa-solid fa-star" style={{color: "#DF6951"}}></i> {trip.rate}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
 
export default TripsList;