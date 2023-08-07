import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from 'react';

const PlanTripForm = () => {
    const [currentRangeValue, setCurrentRangeValue] = useState([12, 3600]);

    return ( 
        <div className="plan-trip-form px-5 py-4 mb-3">
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
                </div>
                <div className="w-100 text-center">
                    <button className="btn text-white px-5 py-3" type="submit" style={{backgroundColor: "#DF6951"}}>Book Now</button>
                </div>
            </form>
        </div>
    );
}
 
export default PlanTripForm;