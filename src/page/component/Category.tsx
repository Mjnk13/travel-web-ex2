import { SubCategories } from "./SubComponent/SubCategories";

const Category = () => {
    return ( 
        <div className='categories mt-5'>
            <div className="container">
                <h5 className='text-center' style={{color: "orange"}}>CATEGORY</h5>
                <h1 className='text-center fw-bold'>We Offer Best Services</h1>
                <div className='row mt-4'>
                    <SubCategories image={"./images/guided-tours-categories.png"} 
                                    title={"Guided Tours"}
                                    paragraph={"sunt qui repellat saepe quo velit aperiam id aliquam placeat."} />
                    
                    <SubCategories image={"./images/best-flights-options-categories.png"} 
                                    title={"Best Flights"}
                                    paragraph={"sunt qui repellat saepe quo velit aperiam id aliquam placeat."} />

                    <SubCategories image={"./images/religious-tours-categories.png"} 
                                    title={"Religious Tours"}
                                    paragraph={"sunt qui repellat saepe quo velit aperiam id aliquam placeat."} />
                   
                    <SubCategories image={"./images/medical-insurance-categories.png"} 
                                    title={"Medical Insurance"}
                                    paragraph={"sunt qui repellat saepe quo velit aperiam id aliquam placeat."} />   
                </div>
            </div>
        </div>
    );
}
 
export default Category;