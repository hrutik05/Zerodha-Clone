import React from 'react';

function Hero() {
    return (
        <div className="d-flex justify-content-center align-items-center gap-5 my-5 flex-wrap">

            <div className="card mt-5" style={{ width: "22rem" }}>
                <img src="/media/pricingMF.svg" className="card-img-top" alt="Coin" />
                <div className="card-body mt-3 text-center">
                    <h3>Free equity delivery</h3>
                    <p className="card-text mt-4">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
            </div>

            <div className="card mt-5 " style={{ width: "22rem" }}>
                <img src="/media/intradayTrades.svg" className="card-img-top" alt="Coin" />
                <div className="card-body mt-3 text-center">
                    <h3>Intraday and F&O trades</h3>
                    <p className="card-text mt-4 ">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                    </p>
                </div>
            </div>

            <div className="card mt-5" style={{ width: "22rem" }}>
                <img src="/media/pricingMF.svg" className="card-img-top" alt="Coin" />
                <div className="card-body mt-3 text-center">
                    <h3>Free direct MF</h3>
                    <p className="card-text mt-4">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
