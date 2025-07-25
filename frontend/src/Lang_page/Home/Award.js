import React from 'react';

function Award() {
    return ( 
        <div className='container py-5 mt-5'>
            <div className='row align-items-center'>
                {/* Image Section */}
                <div className='col-12 col-md-6 mb-4 mb-md-0 text-center'>
                    <img 
                        src='media/largestBroker.svg' 
                        alt='award' 
                        className='img-fluid' 
                    />
                </div>

                {/* Text Section */}
                <div className='col-12 col-md-6'>
                    <h1 className='pb-3 text-center text-md-start'>
                        Largest stock broker in India
                    </h1>
                    <p className='pb-3 text-center text-md-start'>
                        2+ million Zerodha clients contribute to over 15% of all volumes in India daily trading and investing in:
                    </p>

                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity Derivatives</li>
                                <li>Currency Derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>Stocks and IPOs</li>
                                <li>Direct Mutual Funds</li>
                                <li>Bonds and Govt.</li>
                            </ul>
                        </div>
                    </div>

                    <div className='mt-4 text-center text-md-start'>
                        <img 
                            className='img-fluid' 
                            src='media/pressLogos.png' 
                            alt='press logos'  
                        /> 
                    </div>
                </div>
            </div>
        </div>
    ); 
}

export default Award;
