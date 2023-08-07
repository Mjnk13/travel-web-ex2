const BookTripForm = () => {
    return ( 
        <div className="book-trip-form px-5 py-4 mb-3">
            <h2 className="text-center">Book This Tour</h2>
            <p className="text-center">Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.</p>
            <form action="">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="tour-customer-name-input" placeholder="Nhat Minh"/>
                    <label htmlFor="tour-customer-name-input"><i className="fa-solid fa-user me-2"></i>Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="tour-customer-email-input" placeholder="example@email.com"/>
                    <label htmlFor="tour-customer-email-input"><i className="fa-solid fa-envelope me-2"></i>Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="tour-customer-confirm-email-input" placeholder="example@email.com"/>
                    <label htmlFor="tour-customer-confirm-email-input"><i className="fa-solid fa-envelope me-2"></i>ConfirmEmail</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="tour-customer-phone-input" placeholder="phone-number"/>
                    <label htmlFor="tour-customer-phone-input"><i className="fa-solid fa-phone me-2"></i>Phone</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="tour-customer-date-book-input" placeholder="04/08/2023"/>
                    <label htmlFor="tour-customer-date-book-input"><i className="fa-solid fa-calendar-days me-2"></i>dd/mm/yyyy</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="tour-customer-num-ticket-book-input" placeholder="3"/>
                    <label htmlFor="tour-customer-num-ticket-book-input"><i className="fa-solid fa-tags me-2"></i>Number of ticket</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea rows={10} className="form-control" id="tour-customer-message-input" placeholder="..." style={{minHeight: "15vh"}}/>
                    <label htmlFor="tour-customer-message-input"><i className="fa-solid fa-comment me-2"></i>Message</label>
                </div>
                
                <div className="w-100 text-center mb-3">
                    <button className="btn text-white px-5 py-3" type="submit" style={{backgroundColor: "#DF6951"}}>Check Availability</button>
                </div>

                <div className="w-100 text-center">
                    <button className="btn text-white px-5 py-3" type="submit" style={{backgroundColor: "#DF6951"}}>Book Now</button>
                </div>
            </form>
        </div>
    );
}
 
export default BookTripForm;