import React from "react";

function Brokerage() {
    return (
        <div class="container" style={{ marginTop: "5rem" }}>
            <div>
                
                <h3 style={{ textAlign: "center" }}>Charges for account opening</h3>
                <div class="row justify-content-center" style={{ padding: "2rem 10rem 2rem 10rem" }}>
                    <table class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Type of account</th>
                                <th scope="col">Charges</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider --bs-border-opacity: 5;">
                            <tr>
                                <th scope="row">Online account</th>
                                <td>Free</td>
                            </tr>
                            <tr>
                                <th scope="row">Offline account</th>
                                <td>Free</td>
                            </tr>
                            <tr>
                                <th scope="row">NRI account (offline only)</th>
                                <td>₹ 500</td>
                            </tr>
                            <tr>
                                <th scope="row">Partnership, LLP, HUF, or Corporate accounts (offline only)</th>
                                <td>₹ 500</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <hr />
            <div style={{ margin: "5rem 0" }}>
                <h3 style={{ textAlign: "center" }}>Charges for optional value added services</h3>
                <div class="row justify-content-center" style={{ padding: "2rem 10rem 2rem 10rem" }}>
                    <table class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Service</th>
                                <th scope="col">Billing Frquency</th>
                                <th scope="col">Charges</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider --bs-border-opacity: 5;">
                            <tr>
                                <th scope="row">Tickertapet</th>
                                <td>Monthly / Annual</td>
                                <td>Free: 0 | Pro: 249/2399</td>
                            </tr>
                            <tr>
                                <th scope="row">Smallcase</th>
                                <td>Per transaction</td>
                                <td>Buy & Invest More: 100 | SIP: 10</td>
                            </tr>
                            <tr>
                                <th scope="row">Kite Connect</th>
                                <td>Monthly </td>
                                <td>Connect: 500 | Historical: 500</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default Brokerage;