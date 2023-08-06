import Jumbotron from "./component/Jumbotron";
import { getAllTrips, addTrip } from "../indexeddb/tripActions";
import { useEffect, useState } from 'react';
import { tripsTest } from "../indexeddb/rawData";
import PlanTripForm from "./component/PlanTripForm";
import TripsList from "./component/TripsList";

const PackagesArchive = () => {
    const [tripsList, setTripsList] = useState(null);
    const [isPending, setIsPending] = useState(true);

    function callBack(){
        setIsPending(false);
    }

    function getTripsList(trips:any, callback:Function){
        setTripsList(trips);
        callback();
    }

    useEffect(()=> {
        getAllTrips().then((results => {
            console.log(results);
            getTripsList(results, callBack);
        }));
    }, []);

    // function addAllTripTest() {
    //     tripsTest.forEach((trip => {
    //         addTrip(trip);
    //     }));
    // }

    // function getAllTripsTest () {
    //     getAllTrips().then((results => {
    //         console.log(results);
    //     }));
    // }

    return (
        <div className="packages-archive">
            <div style={{marginBottom: "-5vh"}}>
                <Jumbotron cssBackground="packages-archive" titleOne="SEARCH TOUR" titleTwo="Travel With Us"/>
            </div>

            <div className="pa-section mb-5">
                <div className="container pb-3 px-0" style={{boxShadow: "0px 13px 33px -8px #000000ab"}}>
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
                                <div className="col-lg-7 col-md-6 pe-md-0">
                                    {isPending && 
                                    <div className="text-center mt-5">
                                        <div className="spinner-border m-5" role="status" style={{width: "5rem", height: "5rem"}}>
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>}
                                    {tripsList && <TripsList trips={tripsList}/>}
                                </div>

                                <div className="col-lg-5 col-md-6">
                                    <div className="container">
                                        <PlanTripForm/>
                                        <img className="mt-5" src="./images/trip-section-decoration-img.png" alt="trip-section-decoration-img" style={{width: "inherit"}}/>
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