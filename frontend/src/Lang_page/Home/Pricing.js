import React from 'react';

function Pricing() {
    return ( 
        <div className="container text-center py-5">
            <div className="row align-items-center">
                {/* Text Section */}
                <div className="col-12 col-md-6 mb-4 mb-md-0">
                    <h1 className='pb-3'>Unbeatable pricing</h1>
                    <p className='pb-3'>
                        We pioneered the concept of discount broking and price <br className='d-none d-md-block' />
                        transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a 
                        href='/' 
                        className='text-primary fw-semibold text-decoration-none' 
                        aria-hidden="true"
                    >
                        TradingQ&A <i className="fa-solid fa-arrow-right ms-2"></i>
                    </a>
                </div>

                {/* Pricing Cards */}
                <div className="col-12 col-md-6">
                    <div className="row g-3">
                        <div className="col-12 col-sm-4">
                            <div className="border p-3 h-100">
                                <h1>₹0</h1>
                                <p>Free Account opening</p>
                            </div>
                        </div>

                        <div className="col-12 col-sm-4">
                            <div className="border p-3 h-100">
                                <h1>₹0</h1>
                                <p>Per order Free equity delivery</p>
                            </div>
                        </div>

                        <div className="col-12 col-sm-4">
                            <div className="border p-3 h-100">
                                <h1>₹20</h1>
                                <p>Intraday and F&O</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

 export default Pricing;
