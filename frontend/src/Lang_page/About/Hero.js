import React from 'react';

function Hero() {
    return (
        <div className="container ">
            <div className='row justify-content-center text-center my-5'>
                <h1 className='fs-2 mb-5'>We pioneered the discount broking model in India.<br />
                    Now, we are breaking ground with our technology.</h1>
                
            </div>

            <div className='row p-5 mt-5 border-top '>
                <div className='col-6 p-5 text-md-start text-center lh-3' style={{wordSpacing: '5px'}}>
                    <p>
                        We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
                    </p>
                    <p>
                        Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                    </p>
                    <p>
                        Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                    </p>

                </div>
                <div className='col-6 p-5 text-md-start text-center lh-3' style={{wordSpacing: '5px'}}>
                    <p>
                        In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors,
                    </p>
                    <p> <b>Rainmatter</b> our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
                    </p>
                    <p>And yet, we are always up to something new every day. Catch up on the latest updates on our  <b>blog</b> or see what the media is <b>saying about us</b> or learn more about our business and product <b>philosophies</b>.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Hero;
