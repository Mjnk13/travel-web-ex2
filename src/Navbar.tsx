import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md w-100 py-3" style={{ zIndex: "2" }}>
            <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className='logo-home-page position-relative me-3'>
                <Link className="navbar-brand text-white" to="/#" style={{fontSize: "30px"}}>Travel</Link>
                <img className='logo-arrow' src="./images/logo-arrow.png" alt="logo-arrow" />
            </div>
            <div className="collapse navbar-collapse justify-content-evenly" id="navbarToggler">
                <div className='nav-item-wrap'>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{gap: "3rem", alignItems: "center"}}>
                    <li className="nav-item">
                        <a className="nav-link active text-white" aria-current="page" href="/#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/#">About</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-white" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Service
                        </a>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/#">Honeymoon Packages</Link></li>
                            <li><Link className="dropdown-item" to="/packages-archive">Tours Packages</Link></li>
                            <li><Link className="dropdown-item" to="/#">Musical Events</Link></li>
                            <li><Link className="dropdown-item" to="/#">Build Package</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/#">Upcoming Packages</a>
                    </li>
                </ul>
                </div>
                <div className="text-center mt-5 mb-2 my-md-0">
                    <button className='btn text-white px-4 py-3' style={{backgroundColor: "#DF6951"}}>Get in touch</button>
                </div>
            </div>
            </div>
        </nav>
    );
}
 
export default Navbar;