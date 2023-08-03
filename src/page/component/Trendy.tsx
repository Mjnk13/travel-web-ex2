import SubTrendyCard from "./SubComponent/SubTrendyCard";

const Trendy = () => {
    return ( 
        <div className="trendy mt-5">
            <div className="container">
                <div className="trendy-title text-center">
                    <h5 style={{color: "orange"}}>TRENDY</h5>
                    <h1 className="fw-bold mb-0">Our Trending Tour</h1>
                    <h1 className="fw-bold">Packages</h1>
                </div>
                <div className="trendy-card">
                    <div className="row row-cols-1 row-cols-lg-3">
                        <SubTrendyCard cardImage={"./images/trendy-switzerland-card-img.png"} 
                                        cardTitle={"Switzerland"} 
                                        cardBody={"Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos."} 
                                        flagIcon={"./images/switzerland-flag.png"}
                                        durationInDay={8} 
                                        numPeople={25} 
                                        location={"Europe"} 
                                        star={5} 
                                        listedPrice={1200}
                                        discountPrice={1000} />

                        <SubTrendyCard cardImage={"./images/trendy-amazon-card-img.png"} 
                                        cardTitle={"Amazon"} 
                                        cardBody={"Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos."} 
                                        flagIcon={"./images/brazil-flag.png"}
                                        durationInDay={8} 
                                        numPeople={30} 
                                        location={"Brazil"} 
                                        star={5} 
                                        listedPrice={1200}
                                        discountPrice={1223} />

                        <SubTrendyCard cardImage={"./images/trendy-giza-card-img.png"} 
                                        cardTitle={"Giza"} 
                                        cardBody={"Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos."} 
                                        flagIcon={"./images/egypt-flag.png"}
                                        durationInDay={8} 
                                        numPeople={155} 
                                        location={"Brazil"} 
                                        star={5} 
                                        listedPrice={1200}
                                        discountPrice={1200} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trendy;