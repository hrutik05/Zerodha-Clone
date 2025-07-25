import React from 'react';

function Education() {
    return ( 
        <div className="container py-5">
            <div className="row align-items-center">
                {/* Image Section */}
                <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
                    <img 
                        src='media/education.svg' 
                        alt='education' 
                        className='img-fluid' 
                        style={{ width: "90%" }}
                    />
                </div>

                {/* Text Section */}
                <div className="col-12 col-md-6">
                    <h1 className='pb-3 text-md-start text-center'>Free and open market education</h1>

                    <p className='text-md-start text-center'>
                        Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>

                    <div className='text-md-start text-center mb-4'>
                        <a 
                            href='/' 
                            className='text-primary fw-semibold text-decoration-none' 
                            aria-hidden="true"
                        >
                            Varsity <i className="fa-solid fa-arrow-right ms-2"></i>
                        </a>
                    </div>

                    <p className='pt-2 text-md-start text-center'>
                        TradingQ&A, the most active trading and investment community in India for all your market-related queries.
                    </p>

                    <div className='text-md-start text-center'>
                        <a 
                            href='/' 
                            className='text-primary fw-semibold text-decoration-none' 
                            aria-hidden="true"
                        >
                            TradingQ&A <i className="fa-solid fa-arrow-right ms-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Education;
