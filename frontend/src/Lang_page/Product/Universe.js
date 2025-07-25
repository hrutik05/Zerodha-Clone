import React from "react";

function Universe() {
    return (
        <>

            <div className="container my-5" style={{paddingTop: "60px"}}>

                <div className="row justify-content-center text-center">
                    <h1>The Zerodha Universe</h1>
                    <h5>Extend your trading and investment experience even further with our partner platforms</h5>
                </div>

                <div className="d-flex justify-content-center align-items-center gap-5 my-5 flex-wrap">
                    
                    <div className="card" style={{ width: "20rem" }}>
                        <img src="/media/zerodhaFundhouse.png" className="card-img-top" alt="Coin" />
                        <div className="card-body">
                            <p className="card-text text-center">Our asset management venture
                                that is creating simple and transparent index
                                funds to help you save for your goals.</p>
                        </div>
                    </div>

                    <div className="card " style={{ width: "20rem" }}>
                        <img src="/media/sensibullLogo.svg" className="card-img-top" alt="Coin" />
                        <div className="card-body">
                            <p className="card-text text-center">Options trading platform that lets you
                                create strategies, analyze positions, and examine
                                data points like open interest, FII/DII, and more.
                            </p>
                        </div>
                    </div>

                    <div className="card" style={{ width: "20rem" }}>
                        <img src="/media/goldenpiLogo.png" className="card-img-top" alt="Coin" />
                        <div className="card-body">
                            <p className="card-text text-center">Investment research platform
                                that offers detailed insights on stocks,
                                sectors, supply chains, and more.</p>
                        </div>
                    </div>

                    <div className="card" style={{ width: "20rem" }}>
                        <img src="/media/streakLogo.png" className="card-img-top" alt="Coin" />
                        <div className="card-body">
                            <p className="card-text text-center">Systematic trading platform
                                that allows you to create and backtest
                                strategies without coding.</p>
                        </div>
                    </div>

                    <div className="card" style={{ width: "20rem" }}>
                        <img src="/media/smallcaseLogo.png" className="card-img-top" alt="Coin" />
                        <div className="card-body">
                            <p className="card-text text-center">Thematic investing platform
                                that helps you invest in diversified
                                baskets of stocks on ETFs.</p>
                        </div>
                    </div>

                    <div className="card" style={{ width: "20rem" }}>
                        <img src="/media/dittoLogo.png" className="card-img-top" alt="Coin" />
                        <div className="card-body">
                            <p className="card-text text-center">Personalized advice on life
                                and health insurance. No spam
                                and no mis-selling.</p>
                        </div>
                    </div>

                </div>
                <div className="d-flex justify-content-center align-items-center my-5">
                    <button type="button" className="btn btn-primary" style={{borderRadius: "0px"}} href="/#">Sign up for free</button>
                </div>
            </div>

        </>
    );
}

export default Universe;
