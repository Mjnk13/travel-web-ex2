import { SubFastAndEasy } from "./SubComponent/SubFastAndEasy";

const FastAndEasy = () => {
    return (
        <div className='fast-and-easy'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-6 p-5'>
                        <h5 style={{color: "orange"}}>Fast & Easy</h5>
                        <h1 className='fw-bold'>Get Your Favorite Resort Bookings</h1>
                        <div className='fast-and-easy-item mt-3'>
                            <SubFastAndEasy image="/images/choose-destination.png"
                                            title="Choose Destination"
                                            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."/>
                            
                            <SubFastAndEasy image="/images/check-availability.png"
                                            title="Check Availability"
                                            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."/>

                            <SubFastAndEasy image="/images/lets-go.png"
                                            title="Let's Go"
                                            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."/>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <img className='w-100' src="/images/fast-and-easy.png" alt="fast and easy" />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default FastAndEasy;