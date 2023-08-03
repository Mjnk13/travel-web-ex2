import SubPromotion from "./SubComponent/SubPromotion";

const Promotion = () => {
    return ( 
        <div className="promotion my-5">
            <div className="container">
                <div className="row flex-md-row-reverse position-relative">
                    <div className="col-md-6">
                        <img className="w-100" src="./images/eiffel-tower-banner.png" alt="Eiffel Tower Banner" />
                    </div>
                    <div className="col-md-6 pt-5">
                        <h5 style={{color: "orange"}}>PROMOTION</h5>
                        <h1 className="fw-bold">We Provide You Best Europe Sightseeing Tours</h1>
                        <p>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
                        <button className='btn btn-primary p-3 text-white' style={{backgroundColor: "#DF6951"}}>View Packages</button>
                        <div className="row destination-items mt-3">
                            <SubPromotion image="./images/promotion-destination-1.png"/>
                            <SubPromotion image="./images/promotion-destination-2.png"/>
                            <SubPromotion image="./images/promotion-destination-3.png"/>
                            <SubPromotion image="./images/promotion-destination-4.png"/>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Promotion;