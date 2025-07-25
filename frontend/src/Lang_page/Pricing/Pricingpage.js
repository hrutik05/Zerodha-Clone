import React  from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import OpenAccount from "../OpenAccount"

    function PricingPage() {
        return (
            <>
            <div className="container text-center align-item-center my-5">
                <h1>Charges</h1>
            <h3 style={{color:"#9b9b9b"}}>List of all charges and taxes</h3>
            </div>
           <Hero />
           <OpenAccount />
           <Brokerage />
           </>
        );
    }
export default PricingPage;