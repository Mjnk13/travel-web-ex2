export function SubCategories  ({ image, title, paragraph }:{image:string,title:string,paragraph:string}
){
    return ( 
        <div className='col-md-3 col-sm-6 text-center'>
            <img src={image} alt={title + " Categories"} style={{height: "10vh"}} />
            <h4 className='mt-2'>{title}</h4>
            <p>{paragraph}</p>
        </div>
    );
}