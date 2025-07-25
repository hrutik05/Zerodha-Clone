import React from "react";

function Team() {
    return (
        <div className="container ">
            <h1 className="row justify-content-center text-center">People</h1>
            <div className='row pt-5'>
                <div className='col-6 row justify-content-center '>
                    <img
                        src='./media/nithinKamath.jpg'
                        alt='Nithin Kamath'
                        className='img-fluid rounded-circle mb-3'
                        style={{ width: "320px", height: "300px" }}
                    />
                    <h4 className='  text-center'>Nithin Kamath</h4>
                    <h5 className='text-center'>Founder & CEO</h5>
                </div>
                <div className='col-6 mr-5  row justify-content-center '>
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p> He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>Playing basketball is his zen.
                    </p>
                    <p>Connect on <b>Homepage</b> / <b>TradingQnA</b> / <b>Twitter</b></p>
                </div>
            </div>
        </div>
 );
}

export default Team;
