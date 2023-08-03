import Category from "./component/Category";
import FastAndEasy from "./component/FastAndEasy";
import HoneymoonSpecial from "./component/HoneymoonSpecial";
import Jumbotron from "./component/Jumbotron";
import LibertyStatueBackground from "./component/LibertyStatueBackground";
import Partners from "./component/Partners";
import Promotion from "./component/Promotion";
import PromotionBanner from "./component/PromotionBanner";
import SubJumbojonHomepage from "./component/SubComponent/SubJumbotronHomepage";
import Trendy from "./component/Trendy";

const Homepage = () => {
    return (
        <div className="homepage-body">
            <Jumbotron cssBackground="homepage">
                <SubJumbojonHomepage/>
            </Jumbotron>
            <Partners/>
            <Category/>
            <HoneymoonSpecial/>
            <FastAndEasy/>
            <LibertyStatueBackground/>
            <Promotion />
            <PromotionBanner/>
            <Trendy/>
        </div>
    );
}
 
export default Homepage;