import BookTripForm from "./component/BookTripForm";
import Jumbotron from "./component/Jumbotron";
import { Link, Outlet, useParams } from "react-router-dom";

const PackageDetail = () => {
    const { id } = useParams();
    console.log(id);
    
    return (
        <div className="package-detail">
            <div style={{marginBottom: "-5vh"}}>
                <Jumbotron cssBackground="package-detail" titleOne="Explore" titleTwo="Landscapes"/>
            </div>

            <div className="pd-section mb-5">
                <div className="container pb-3 px-0" style={{boxShadow: "0px 13px 33px -8px #000000ab"}}>
                    <div className="trip-filter py-4">
                        <div className="row align-items-center">
                            <div className="col-md-6 col-lg-3 text-center">
                                <Link to={"information/" + id} className="text-decoration-none"><button className="ps-lg-5 btn fw-bold" style={{fontSize: "20px"}}><i className="fa-solid fa-circle-info me-3"></i>Information</button></Link>
                            </div>
                            <div className="col-md-6 col-lg-3  text-center">
                                <Link to={"tour-plan/" + id} className="text-decoration-none"><button className="btn fw-bold" style={{fontSize: "20px"}}><i className="fa-solid fa-calendar-days me-3"></i>Tour Plan</button></Link>
                            </div>
                            <div className="col-md-6 col-lg-3  text-center">
                                <Link to={"location/" + id} className="text-decoration-none"><button className="btn fw-bold" style={{fontSize: "20px"}}><i className="fa-solid fa-location-dot me-3"></i>Location</button></Link>
                            </div>
                            <div className="col-md-6 col-lg-3  text-center">
                                <Link to={"gallery/" + id} className="text-decoration-none"><button className="btn fw-bold" style={{fontSize: "20px"}}><i className="fa-solid fa-images me-3"></i>Gallery</button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="trip-detail-section mt-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-6 pe-md-0">
                                    <Outlet/>
                                </div>

                                <div className="col-lg-5 col-md-6">
                                    <div className="container">
                                        <BookTripForm/>
                                        <img className="mt-5" src="/images/trip-section-decoration-img.png" alt="trip-section-decoration-img" style={{width: "inherit"}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default PackageDetail;