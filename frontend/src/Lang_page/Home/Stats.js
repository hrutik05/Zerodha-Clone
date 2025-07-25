import React from 'react';

function Stats() {
    return ( 
        <div className="container py-5">
            <div className="row py-5">
                {/* Text Section */}
                <div className="col-12 col-md-6 pb-5">
                    <h1>Trust with confidence</h1>

                    <h3 className='pt-4 '>Customer-first always</h3>
                    <p>
                        That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                    </p>

                    <h3 className='pt-3'>No spam or gimmicks</h3>
                    <p>
                        No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href='/' style={{ textDecoration: "none" }}>Our philosophies.</a>
                    </p>

                    <h3 className='pt-3'>The Zerodha universe</h3>
                    <p>
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                    </p>

                    <h3 className='pt-3'>Do better with money</h3>
                    <p>
                        With initiatives like <a href='/' style={{ textDecoration: "none" }}>Nudge</a> and <a href='/' style={{ textDecoration: "none" }}>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.
                    </p>
                </div>

                {/* Image and Buttons Section */}
                <div className="col-12 col-md-6 d-flex flex-column align-items-center">
                    <img 
                        src='media/ecosystem.png' 
                        alt='ecosystem' 
                        className='img-fluid mb-4' 
                        style={{ width: "90%" }} 
                    />

                    <div className='text-center'>
                        <a href='/' className='btn btn-primary mx-5'aria-hidden="true">
                            Explore our products <i className="fa-solid fa-arrow-right ms-2"></i>
                        </a>

                        <a href='/' className='btn btn-primary mx-5' aria-hidden="true">
                            Try Kite demos <i className="fa-solid fa-arrow-right ms-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;
