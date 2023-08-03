export function SubFastAndEasy  ({ image, title, paragraph }:{image:string,title:string,paragraph:string}){
    return ( 
        <div className='d-flex align-items-center mt-3'>
            <img className='me-3' src={image} style={{height: "8vh"}} alt={title} />
            <div>
                <h5>{title}</h5>
                <p className='m-0'>{paragraph}</p>
            </div>
        </div>
    );
}