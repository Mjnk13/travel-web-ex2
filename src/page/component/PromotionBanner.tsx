import { SubPromotionBanner } from "./SubComponent/SubPromotionBanner";

const PromotionBanner = () => {
    return ( 
        <div className="promotion-banner">
            <div className="row w-100 m-0">
                <SubPromotionBanner title="Explore Nature"/>
                <SubPromotionBanner title="Explore City"/>
            </div>
        </div>
    );
}
 
export default PromotionBanner;