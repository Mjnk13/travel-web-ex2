type trip = {
    information: any
}

const SubTripInformation = (prop: trip) => {
    console.log(prop.information);
    
    var starRate = [];
    for (let index = 0; index < prop.information.rate; index++) {
        starRate.push(<i className="fa-solid fa-star me-2" key={ "star-" + (index + 1 )}></i>);
    }

    return ( 
        <div className="container ps-4">
            <div className="trip-info-title d-flex flex-wrap align-items-center">
                <h3 className="me-3">{prop.information.country}</h3>
                <h4 className="text-secondary"><span className="fw-bold" style={{color: "#DF6951"}}>{prop.information.price} $</span><i className="fa-solid fa-slash" style={{transform: "rotate(70deg)"}}></i>Per Couple</h4>
            </div>
            <div className="trip-rate d-flex mt-2 align-items-center" style={{color: "#ffba0a"}}>
                {starRate}<p className="text-secondary mb-0 fw-bold ms-2">{"(2.3 reviews)"}</p>
            </div>
            <p className="trip-description my-4">
                {prop.information.detailDescription}
            </p>
            <div className="trip-info-destination row align-items-start mt-5">
                <h5 className="col-5 m-0 fw-bold fs-4" style={{color: "#DF6951"}}>Destination</h5>
                <p className="col-7 m-0 pt-1 pt-1">: {prop.information.location}, {prop.information.country}</p>
            </div>
            <div className="trip-info-departure row align-items-start mt-5">
                <h5 className="col-5 m-0 fw-bold fs-4" style={{color: "#DF6951"}}>Departure</h5>
                <p className="col-7 m-0 pt-1">: {prop.information.departure}</p>
            </div>
            <div className="trip-info-departure-time row align-items-start mt-5">
                <h5 className="col-5 m-0 fw-bold fs-4" style={{color: "#DF6951"}}>Departure Time</h5>
                <p className="col-7 m-0 pt-1">: Approximately {prop.information.departureTime}</p>
            </div>
            <div className="trip-info-return-time row align-items-start mt-5">
                <h5 className="col-5 m-0 fw-bold fs-4" style={{color: "#DF6951"}}>Return Time</h5>
                <p className="col-7 m-0 pt-1">: Approximately {prop.information.returnTime}</p>
            </div>
            <div className="trip-info-dress-code row align-items-start mt-5">
                <h5 className="col-5 m-0 fw-bold fs-4" style={{color: "#DF6951"}}>Dress Code</h5>
                <p className="col-7 m-0 pt-1">: Approximately {prop.information.dressCode}</p>
            </div>
            <div className="trip-info-not-included row align-items-start mt-5">
                <h5 className="col-5 m-0 fw-bold fs-4" style={{color: "#DF6951"}}>Not Include</h5>
                <div className="col-7 row m-0 pt-1 px-0">
                    {prop.information.notIncluded.map((item: string, index: number) => <p key={item} className="col-lg-6 mb-3"><i className="fa-regular fa-circle-xmark"></i> {item}</p>)}
                </div>
            </div>
            <div className="trip-info-included row align-items-start mt-5">
                <h5 className="col-5 m-0 fw-bold fs-4" style={{color: "#DF6951"}}>Include</h5>
                <div className="col-7 row m-0 pt-1 px-0">
                    {prop.information.included.map((item: string, index: number) => <p key={index} className="col-lg-6 mb-3"><i className="fa-regular fa-circle-check"></i> {item}</p>)}
                </div>
            </div>

            <div className="trips-gallerry mt-5">
                <h1 className="fw-bold">From our gallerry</h1>
                <p className="mt-3">Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolor similique ut quasi maxime ut deserunt autem At praesentium voluptatem aut libero nisi. </p>
                <div className="row">
                    {prop.information.gallery.map((item: string, index: number) => <img className="col-lg-4 col-md-6 mb-4" key={index} src={item} />)}
                </div>
            </div>
        </div>
    );
}
 
export default SubTripInformation;