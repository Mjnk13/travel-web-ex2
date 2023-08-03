export function SubPromotionBanner ({title}: {title: string}) {
    return ( 
        <div className={title.toLowerCase().split(' ').join('-') + " explore-nature col-md-6 p-0 text-white text-center py-5"}>
            <h3>PROMOTION</h3>
            <h1>{title}</h1>
            <button className="btn btn-outline-light">View Packages</button>
        </div>
    );
}