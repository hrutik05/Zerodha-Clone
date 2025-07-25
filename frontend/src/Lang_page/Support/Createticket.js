import React from "react";

function PricingPage() {
    return (
        <div className="container">
            <div className=" my-5">
                <h3>To create a ticket, select a relevant topic</h3>
            </div>

            <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap">

                <div className="card" style={{ width: "20rem" }}>
                    <h4><i class="fa-solid fa-plus"></i> Account Opening</h4>
                    <div>
                        <ul>
                            <ol><a href="/#" className="createticketdiv1">Resident individual</a></ol>
                            <ol><a href="/#" className="createticketdiv1">Minor</a></ol>
                            <ol><a href="/#" className="createticketdiv1">Non Resident Indian (NRI)</a></ol>
                            <ol><a href="/#" className="createticketdiv1">Company, Partnership, HUF and LLP</a></ol>
                            <ol><a href="/#" className="createticketdiv1">Glossary</a></ol>
                        </ul>
                    </div>
                </div>

                <div className="card" style={{ width: "20rem" }}>
                    <h4><i class="fa fa-user " aria-hidden="true"></i>  Your Zerodha Account</h4>
                    <div>
                        <ul>
                            <ol><a href="/#" className="createticketdiv1">Your Profile</a></ol>
                            <ol><a href="/#" className="createticketdiv1">Account modification</a></ol>
                            <ol><a href="/#" className="createticketdiv1">Client Master Report (CMR) and Depository Participant (DP)</a></ol>
                            <ol><a href="/#" className="createticketdiv1">Nomination</a></ol>
                            <ol><a href="/#" className="createticketdiv1">Transfer and conversion of securities</a></ol>
                        </ul>
                    </div>
                </div>

                <div className="card" style={{ width: "20rem" }}>
                    <h4><i class="fa fa-user " aria-hidden="true"></i>  Kite</h4>
                    <div>
                        <ul>
                            <ol><a href="/#" className="createticketdiv1">IPO</a></ol>
                            <ol><a href="/#" className="createticketdiv1">Trading FAQs</a></ol>
                            <ol><a href="/#" className="createticketdiv1">Margin Trading Facility (MTF) and Margins</a></ol>
                            <ol><a href="/#" className="createticketdiv1">Charts and orders</a></ol>
                            <ol><a href="/#" className="createticketdiv1">Alerts and Nudges</a></ol>
                            <ol><a href="/#" className="createticketdiv1">General</a></ol>
                        </ul>
                    </div>
                </div>

                <div className="card" style={{ width: "20rem" }}>
                    <h4><i class="fa-solid fa-wallet"></i>  Funds</h4>
                    <div>
                        <ul>
                            <ol><a href="/#" className="createticketdiv1">Add money</a></ol>
                            <ol><a href="/#" className="createticketdiv1">Withdraw money</a></ol>
                            <ol><a href="/#" className="createticketdiv1">Add bank accounts</a></ol>
                            <ol><a href="/#" className="createticketdiv1">eMandates</a></ol>
                        </ul>
                    </div>
                </div>

                <div className="card" style={{ width: "20rem" }}>
                    <h4><i class="fa fa-user " aria-hidden="true"></i>  Console</h4>
                    <div>
                        <ul>
                            <ol><a href="/#" className="createticketdiv1">Portfolio</a></ol>
                            <ol><a href="/#" className="createticketdiv1">Corporate actions</a></ol>
                            <ol><a href="/#" className="createticketdiv1">Funds statement</a></ol>
                            <ol><a href="/#" className="createticketdiv1">Reports</a></ol>
                            <ol><a href="/#" className="createticketdiv1">Profile</a></ol>
                            <ol><a href="/#" className="createticketdiv1">Segments</a></ol>
                        </ul>
                    </div>
                </div>

                <div className="card" style={{ width: "20rem" }}>
                    <h4><i class="fa-solid fa-coins"></i>  Coin</h4>
                    <div>
                        <ul>
                            <ol><a href="/#" className="createticketdiv1">Mutual funds</a></ol>
                            <ol><a href="/#" className="createticketdiv1">National Pension Scheme (NPS)</a></ol>
                            <ol><a href="/#" className="createticketdiv1">Features on Coin</a></ol>
                            <ol><a href="/#" className="createticketdiv1">Payments and Orders</a></ol>
                            <ol><a href="/#" className="createticketdiv1">General</a></ol>
                        </ul>
                    </div>
                </div>



            </div>
        </div>

    );
}

export default PricingPage;