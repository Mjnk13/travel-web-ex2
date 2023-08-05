const SubJumbojonHomepage = () => {
    return ( 
        <div className='jumbotron-homepage-content position-absolute'>
            <img src="./images/Vector-1.png" alt="Vector 1" />
            <div className="jumbotron-homepage-title-wrap">
              <h1 className='text-wrap fw-bold text-white jumbotron-hompage-title'>No matter where you're going to, we'll take you there</h1>
            </div>
            <div className='searching-tool mt-4 rounded w-100'>
              <div className='row fs-5 w-100 text-center m-0'>
                <a href="/#" className='col-md-3 col-sm-6 text-decoration-none py-2 py-sm-3 py-md-5 px-sm-4 px-0 text-white'>Where To?</a>
                {/* <div className='py-4'>
                  <div className='divider-vertical rounded h-100'></div>
                </div> */}

                <div className="col-md-3 col-sm-6 travel-type-btn dropdown py-2 py-sm-3 py-md-5 px-sm-3 px-0">
                  <a className="text-decoration-none text-white dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Travel Type
                  </a>

                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/#">Action</a></li>
                    <li><a className="dropdown-item" href="/#">Another action</a></li>
                    <li><a className="dropdown-item" href="/#">Something else here</a></li>
                  </ul>
                </div>

                {/* <div className='py-4'>
                  <div className='divider-vertical rounded h-100'></div>
                </div> */}

                <div className="col-md-3 col-sm-6 duration-btn dropdown py-2 py-sm-3 py-md-5 px-sm-4 px-0 align-self-center">
                  <a className="text-decoration-none text-white dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Duration
                  </a>

                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/#">Action</a></li>
                    <li><a className="dropdown-item" href="/#">Another action</a></li>
                    <li><a className="dropdown-item" href="/#">Something else here</a></li>
                  </ul>
                </div>

                <div className='col-md-3 col-sm-6 align-self-center pb-3 px-4 pt-sm-4'>
                    <button className='btn text-white w-100 py-3' style={{ backgroundColor: "#DF6951"}}>Submit</button>
                </div>
              </div>
            </div>

            <div className='amount-people-booked mt-2 mt-sm-4 d-sm-flex align-items-center py-3 py-sm-0'>
              <img className="mb-sm-0 mb-3" src="./images/people-group.png" alt="people-group" />
              <p className='ms-3 mb-0 p-0 text-white'>2,500 people booked Tommorowland Event in last 24 hours</p>
            </div>
        </div>
    );
}
 
export default SubJumbojonHomepage;