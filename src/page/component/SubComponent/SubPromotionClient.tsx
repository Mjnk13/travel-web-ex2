type clientInfo = {
    name: string,
    role: string,
    image: string,
    reviewText: string,
    isAtive: boolean
}

const SubPromotionClient = (props: clientInfo) => {
    return ( 
        <div className={"carousel-item " + (props.isAtive === true ? "active" : "")+ " w-100 bg-white pt-5 px-5 pb-3 position-relative overflow-y-visible"} style={{borderRadius: "20px"}} data-bs-interval="5000">
            <img className="carousel-img position-absolute top-0 start-50 translate-middle" src={props.image} alt="{props.name}"/>
            <p>{props.reviewText}</p>
            <h4>{props.name} - {props.role}</h4>
        </div>
    );
}
 
export default SubPromotionClient;