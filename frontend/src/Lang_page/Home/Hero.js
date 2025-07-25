import React from 'react';

function Hero() {
    return ( 
        <div className='container py-5'>
            <div className='row justify-content-center text-center'>
                <div className='col-12 col-md-10 col-lg-8'>
                    <img 
                        src='media/homeHero.png' 
                        alt='hero' 
                        className='img-fluid mb-4 w-100' 
                    />
                    <h1 className='mt-3'>Invest in everything</h1>
                    <p className='mt-3'>
                        Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                    </p>
                    <button 
                        className='btn btn-primary mt-3 px-4 py-2 fs-6'
                    >
                        Sign up for free
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
