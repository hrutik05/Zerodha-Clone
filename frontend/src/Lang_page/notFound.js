import React from 'react';

function NotFound() {
    return (
        <div className='container py-5'>
            <div className='row justify-content-center text-center'>
                <div className='col-12 col-md-10 col-lg-8'>
                    <h1 className='mt-3 fs-2 fs-md-1'>404 Page Not Found </h1>
                    <p className='mt-3 fs-6'>
                        Sorry, the page you are looking for does not exist. It might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
