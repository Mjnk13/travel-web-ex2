const Footer = () => {
    return ( 
        <div className="footer position-relative">
            <div className="footer-background d-flex position-absolute w-100 justify-content-end align-items-center h-100">
                <img className="h-auto" src="/images/footer-moutainbehind.png" alt="" style={{width: "25%"}}/>
            </div>
            <div className="container position-relative">
                <div className="footer-content row py-2 py-sm-3 py-md-4 py-lg-5">
                    <div className="col-md-3 mb-3">
                        <div className='logo-footer me-3'>
                            <div className="position-relative">
                                <a className="navbar-brand fw-bold" href="/#" style={{fontSize: "30px"}}>Travel</a>
                                <img className='logo-arrow' src="/images/logo-arrow.png" alt="logo-arrow" style={{left: "1.2rem", width: "5.2rem"}}/>
                            </div>
                            <p className="mt-3">Travel helps companies manage payments easily.</p>
                            <div className="social-icon fs-4" style={{color: "#DF6951"}}>
                                <i className="fa-brands fa-linkedin-in me-3"></i>
                                <i className="fa-brands fa-facebook-messenger me-3"></i>
                                <i className="fa-brands fa-twitter me-3"></i>
                                <i className="fa-solid fa-infinity me-3"></i>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2 col-sm-6">
                        <h5>Company</h5>
                        <div className="company-info d-sm-grid mb-3 mb-sm-0">
                            <a className="mb-3 text-decoration-none text-secondary me-3 me-sm-0" href="/#">About Us</a>
                            <a className="mb-3 text-decoration-none text-secondary me-3 me-sm-0" href="/#">Careers</a>
                            <a className="mb-3 text-decoration-none text-secondary me-3 me-sm-0" href="/#">Blog</a>
                            <a className="mb-3 text-decoration-none text-secondary me-3 me-sm-0" href="/#">Pricing</a>
                        </div>
                    </div>

                    <div className="col-md-2 col-sm-6">
                        <h5>Destination</h5>
                        <div className="company-info d-sm-grid mb-3 mb-sm-0">
                            <a className="mb-3 text-decoration-none text-secondary me-3 me-sm-0" href="/#">Maldives</a>
                            <a className="mb-3 text-decoration-none text-secondary me-3 me-sm-0" href="/#">Los Angelas</a>
                            <a className="mb-3 text-decoration-none text-secondary me-3 me-sm-0" href="/#">Las Vegas</a>
                            <a className="mb-3 text-decoration-none text-secondary me-3 me-sm-0" href="/#">Toronto</a>
                        </div>
                    </div>

                    <div className="col-md-5">
                        <h5 className="mb-3">Join Our Newsletter</h5>
                        <form action="">
                            <div className="input-group mb-3">
                                <div className="form-floating">
                                    <input type="email" id="email-floating-input" className="form-control" placeholder="name@example.com" aria-label="Customer email address" aria-describedby="customer-email-address-submit-for-notification-update"/>
                                    <label htmlFor="email-floating-input">Your email address</label>
                                </div>
                                <button className="btn" type="submit" style={{backgroundColor: "#df6951"}} id="customer-email-address-submit-for-notification-update">Subcribe</button>
                            </div>
                        </form>
                        <p className="text-info">*  Will send you weekly updates for your better tour packages.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;