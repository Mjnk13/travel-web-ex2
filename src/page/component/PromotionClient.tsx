import { clientPromotionTest } from "../../indexeddb/rawData";
import SubPromotionClient from "./SubComponent/SubPromotionClient";

const PromotionClient = () => {
    const carouselIndicators = [];
    for (let i = 0; i < clientPromotionTest.length; i++) {
        carouselIndicators.push(<button key={"carousel-indicator-" + i} type="button" data-bs-target="#carouselPromotionClient" data-bs-slide-to={i} className={i === 0 ? "active": ""} aria-current="true" aria-label={"Slide "+ (i + 1).toString()}></button>);
    }

    return ( 
        <div className="promotion-client text-center py-5 mt-5">
            <h5 style={{color: "orange"}}>PROMOTION</h5>
            <h1 className='fw-bold'>See What Our Clients Say</h1>
            <h1 className='fw-bold mb-5'>About Us</h1>
            <div id="carouselPromotionClient" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators m-0" style={{bottom: "-4vh"}}>
                    {carouselIndicators}
                </div>
                <div className="carousel-inner overflow-visible">
                    {clientPromotionTest.map((client:any, index) => (
                        <SubPromotionClient key={"client-" + (index + 1).toString()} name={client.name} role={client.role} 
                                            image={client.image} 
                                            reviewText={client.reviewText} 
                                            isAtive={index === 0 ? true : false}  />
                    ))}

                    <button className="carousel-control-prev color-white" type="button" data-bs-target="#carouselPromotionClient" data-bs-slide="prev">
                        <div className="bg-secondary p-3" style={{borderRadius: "40px"}}  aria-hidden="true">
                            <i className="fa-solid fa-arrow-left fs-5"></i>
                        </div>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselPromotionClient" data-bs-slide="next">
                        <div className="bg-secondary p-3" style={{borderRadius: "40px"}}  aria-hidden="true">
                            <i className="fa-solid fa-arrow-right fs-5"></i>
                        </div>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default PromotionClient;