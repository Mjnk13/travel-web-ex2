const SubPromotion = ({image}: {image: string}) => {
    return ( 
        <div className="col-md-3 col-6 mb-3">
            <img className="w-100" src={image} alt="" />
        </div>
    );
}
 
export default SubPromotion;