const SubJumbojonHomepage = () => {
    return ( 
        <div className='jumbotron-content position-absolute'>
            <img src="./images/Vector-1.png" alt="Vector 1" />
            <div style={{paddingRight: "5rem"}}>
              <h1 className='text-wrap fw-bold text-white' style={{fontSize: "60px"}}>No matter where you're going to, we'll take you there</h1>
            </div>
            <div className='searching-tool mt-4 rounded w-100'>
              <div className='d-flex fs-5 justify-content-evenly'>
                <a href="/#" className='text-decoration-none py-5 px-4 text-white'>Where To?</a>
                <div className='py-4'>
                  <div className='divider-vertical rounded h-100'></div>
                </div>

                <div className="travel-type-btn dropdown py-5 px-3">
                  <a className="text-decoration-none text-white dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Travel Type
                  </a>

                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/#">Action</a></li>
                    <li><a className="dropdown-item" href="/#">Another action</a></li>
                    <li><a className="dropdown-item" href="/#">Something else here</a></li>
                  </ul>
                </div>

                <div className='py-4'>
                  <div className='divider-vertical rounded h-100'></div>
                </div>

                <div className="duration-btn dropdown py-5 px-4">
                  <a className="text-decoration-none text-white dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Duration
                  </a>

                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/#">Action</a></li>
                    <li><a className="dropdown-item" href="/#">Another action</a></li>
                    <li><a className="dropdown-item" href="/#">Something else here</a></li>
                  </ul>
                </div>

                <div className='align-self-center'>
                    <button className='btn text-white' style={{width: "150px", height: "50px", backgroundColor: "#DF6951"}}>Submit</button>
                </div>
              </div>
            </div>

            <div className='amount-people-booked mt-4 d-flex align-items-center'>
              <img src="./images/people-group.png" alt="people-group" />
              <p className='ms-3 mb-0 p-0 text-white'>2,500 people booked Tommorowland Event in last 24 hours</p>
            </div>
        </div>
    );
}
 
export default SubJumbojonHomepage;