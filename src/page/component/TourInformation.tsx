import { useParams } from "react-router-dom";
import { getTripById } from "../../indexeddb/tripActions";
import { useEffect, useState } from "react";
import SubTripInformation from "./SubComponent/SubTripInformation";

const TourInformation = () => {
    const { id } = useParams();
    const idNumber:number = +(id as string);
    const [ tripInformationList, setTripInformationList ] = useState(null);
    const [isPending, setIsPending] = useState(true);

    function callBack(){
        setIsPending(false);
    }

    function getTripInformationList(information:any, callback:Function){
        setTripInformationList(information);
        callback();
    }

    useEffect(() => {
        getTripById(idNumber).then((result) => {
            getTripInformationList(result, callBack);
        });
    }, []);
    

    return ( 
        <div className="tour-information mt-4">
            {isPending && 
                <div className="text-center mt-5">
                    <div className="spinner-border m-5" role="status" style={{width: "5rem", height: "5rem"}}>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}
            {tripInformationList && <SubTripInformation information={tripInformationList}/>}
        </div>
    );
}
 
export default TourInformation;