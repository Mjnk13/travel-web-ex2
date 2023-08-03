type cardProps = {
    cardImage: string,
    cardTitle: string,
    cardBody: string,
    flagIcon: string,
    durationInDay: number,
    numPeople: number,
    location: string,
    star: number,
    listedPrice: number,
    discountPrice?: number,
}

const SubTrendyCard = (props: cardProps) => {
    var starRate = [];
    for (let index = 0; index < props.star; index++) {
        starRate.push(<i className="fa-solid fa-star ms-2" key={index+1}></i>);
    }

    return (
        <div className="col">
            <div className="card border-0 my-3">
                <div className="card-image position-relative">
                    <img src={props.cardImage} className="card-img-top" alt={props.cardTitle}/>
                    <img className="position-absolute flag-icon" src={props.flagIcon} alt={props.cardTitle + " Flag"} />
                </div>
                <div className="card-body mt-3">
                    <div className="d-flex fs-5 justify-content-between mt-4" style={{color: "grey"}}>
                        <p><i className="fa-regular fa-calendar-days me-2"></i> {props.durationInDay} Days</p>
                        <p><i className="fa-regular fa-user me-2"></i> {props.numPeople} People Going</p>
                    </div>
                    <div className="d-flex justify-content-between mb-2 align-items-center">
                        <h3 className="card-title fw-bold mb-0">{props.cardTitle}</h3>
                        <div className="rate d-flex" style={{color: "#FFBA0A"}}>
                            {starRate}
                        </div>
                    </div>
                    <p className="fs-3 mb-0" style={{color: "grey"}}><i className="fa-solid fa-location-dot me-3"></i> {props.location}</p>
                    <div className="card-price-area my-2">
                        {props.discountPrice !== undefined ?
                            <div className="d-flex align-items-center">
                                <h1 className="mb-0 me-3" style={{color: "orange"}}>{props.discountPrice} $</h1>
                                <h3 className="mb-0 text-decoration-line-through" style={{color: "grey"}}>{props.listedPrice} $</h3> 
                            </div>
                            : <h4 style={{color: "orange"}}>{props.listedPrice} $</h4>
                        }
                    </div>
                    <p className="card-text">{props.cardBody}</p>
                    <a href="/#" className="btn btn-primary mt-4 py-3 px-4" style={{backgroundColor: "#df6951"}}>Explore Now</a>
                </div>
            </div>
        </div> 
    );
}
 
export default SubTrendyCard;