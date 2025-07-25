import React from 'react';

function OpenAccount() {
    return (
        <div className='container py-5'>
            <div className='row justify-content-center text-center'>
                <div className='col-12 col-md-10 col-lg-8'>
                    <h1 className='mt-3 fs-2 fs-md-1'>Open a Zerodha account</h1>
                    <p className='mt-3 fs-6'>
                        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
                    </p>
                    <button className='btn btn-primary mt-2 px-4 py-2 fs-6 w-30 w-md-auto'>
                        Sign up for free
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OpenAccount;
