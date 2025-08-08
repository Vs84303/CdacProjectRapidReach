import React from 'react'
import ContactUs1 from './images/ContactUs1.jpg'

function ContactUs() {
    return (
        <div className='container my-5'>
            <div className='row'>
                <div className='col'>
                    <h1 className='utext mb-4'>Contact Us</h1>
                </div>
                                   {/* <div className="d-flex justify-content-center"> */}
                    <div className="d-flex justify-content-center align-items-center">
                       <img 
                           src={ContactUs1} 
                           alt='ContactUs1' 
                           className='img-fluid rounded shadow-sm mb-5'
                           style={{ maxWidth: '600px', marginLeft: '20px' }} 
                         />
                    </div>
            </div>
            {/* Support Section */}
            <div className='text-center mb-5'>
                <h2 className=' mb-5'>Support When You Need It</h2>
                <div className='row justify-content-center'>
                    <div className='col-md-3 mb-4'>
                        <h4 className="mb-2"><i className="bi bi-telephone-fill me-2"></i>Phone</h4>
                        <p className="mb-2">Speak with us directly.</p>
                        <p className="mb-0">
                            <a className="link-secondary text-decoration-none" href="tel:7385226199">+91-7385226199</a>
                        </p>
                    </div>
                    <div className='col-md-3 mb-4'>
                        <h4 className="mb-2"><i className="bi bi-envelope-fill me-2"></i>Email</h4>
                        <p className="mb-2">Write to us directly.</p>
                        <p className="mb-0">
                            <a className="link-secondary text-decoration-none" href="mailto:support@rapidreach.com">support@rapidreach.com</a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <h3 className='mb-4 text-center'>Send Us a Message</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Your full name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="4" placeholder="Type your message here..."></textarea>
                        </div>
                        {/* <div className="text-center"> */}
                        <div>
                            {/* <button type="submit" className='btn btn-outline-info px-5 '>Send Message</button> */}
                            <button type="submit" className='btn btn-info my-3 px-5'>Send Message</button>

                            

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
