import Jumbotron from "./component/Jumbotron";
import { getAllTrips, addTrip } from "../indexeddb/tripActions";
import { useEffect, useState } from 'react';
import { tripsTest } from "../indexeddb/rawData";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PackagesArchive = () => {
    function addAllTripTest() {
        tripsTest.forEach((trip => {
            addTrip(trip);
        }));
    }

    function getAllTripsTest () {
        getAllTrips().then((results => {
            console.log(results);
        }));
    }

    const [currentRangeValue, setCurrentRangeValue] = useState([12, 3600]);

    return (
        <div className="packages-archive">
            <Jumbotron cssBackground="packages-archive" titleOne="SEARCH TOUR" titleTwo="Travel With Us"/>

            <div className="pa-section">
                <div className="container p-0" style={{backgroundColor: "#e5e5e5"}}>
                    <div className="trip-filter py-4">
                        <div className="row align-items-center">
                            <div className="col-md-6 col-lg-3">
                                <button className="ps-lg-5 btn fw-bold d-flex align-items-center" style={{fontSize: "20px"}}><i className="fa-regular fa-calendar-days me-3"></i>Date</button>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <button className="btn fw-bold d-flex align-items-center" style={{fontSize: "20px"}}><i className="fa-solid fa-arrow-up-from-bracket me-3"></i>Price Low To High</button>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <button className="btn fw-bold d-flex align-items-center" style={{fontSize: "20px"}}><i className="fa-solid fa-arrow-up-from-bracket fa-rotate-180 me-3"></i>Price High To Low</button>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <button className="btn fw-bold d-flex align-items-center" style={{fontSize: "20px"}}><i className="fa-solid fa-pen-to-square me-3"></i>Name {"(A-Z)"}</button>
                            </div>
                        </div>
                    </div>

                    <div className="trip-section mt-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-6">

                                </div>

                                <div className="col-lg-5 col-md-6">
                                    <div className="container">
                                        <div className="plan-trip-form px-5 py-4">
                                            <h2 className="text-center">Plan Your Trip</h2>
                                            <p className="text-center">Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.</p>
                                            <form action="">
                                                <div className="form-floating mb-3">
                                                    <input type="text" className="form-control" id="search-tour-input" placeholder="Viet Nam"/>
                                                    <label htmlFor="search-tour-input"><i className="fa-solid fa-magnifying-glass me-2"></i>Search Tour</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input type="text" className="form-control" id="where-to-input" placeholder="Ho Chi Minh"/>
                                                    <label htmlFor="where-to-input"><i className="fa-solid fa-location-dot me-2"></i>Where To?</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input type="text" className="form-control" id="date-trip-input" placeholder="04/08/2023"/>
                                                    <label htmlFor="date-trip-input"><i className="fa-solid fa-calendar-days me-2"></i>Date</label>
                                                </div>
                                                
                                                <div className="filter-by-price">
                                                    <h3 className="">Filter By Price</h3>
                                                    <div className="px-4">
                                                        <Slider style={{height: "2rem"}} range 
                                                            pushable={true}
                                                            min={12} 
                                                            max={3600} 
                                                            defaultValue={[12, 3600]}
                                                            railStyle={{backgroundColor: "white", height: "2rem", borderRadius: "0"}}
                                                            trackStyle={{backgroundColor:"orange", height: "2rem", borderRadius: "0"}}
                                                            handleStyle={{backgroundColor: "#DF6951", border: "none", borderRadius: "0", height: "2rem" , width: "1.5rem", marginTop:"0", opacity: "1"}}
                                                            onChange={(value) => {
                                                                setCurrentRangeValue(value as number[]);
                                                            }}
                                                            />
                                                    </div>
                                                    <p className="filter-price mt-3 text-secondary">{`Price: $${currentRangeValue[0]} - $${currentRangeValue[1]}`}</p>
                                                    <div className="w-100 text-center">
                                                        <button className="btn text-white px-5 py-3" type="submit" style={{backgroundColor: "#DF6951"}}>Book Now</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <div className="test-data mt-3">
                <button className="btn btn-primary" onClick={getAllTripsTest}>Get all trip</button>
                <button className="btn btn-primary" onClick={addAllTripTest}>Add all trip</button>
            </div> */}
        </div>
    );
}
 
export default PackagesArchive;