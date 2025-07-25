import React from "react";

function Hero() {
    return (
        <div className="hero bgcolor-green" style={{backgroundColor:"#387ed1"}}>
            <div className=" d-flex flex-col items-center justify-center " style={{ margin: "0 150px" }}>

                <div className=" col-6 hero-content my-5">
                    <h3 className="hero-title text-light">Support portal </h3>
                    <h3 className="my-5 text-light">Search for an answer or browse help topics to create a ticket</h3>
                    <div class="input-group flex-nowrap mb-4 ">
                        <input type="text" class="form-control" placeholder="Eg: how do i activate F&O, why is my order getting rejected ..." aria-label="Username" aria-describedby="addon-wrapping" />
                        <span class="input-group-text" id="addon-wrapping"><i class="fa-solid fa-magnifying-glass"></i></span>
                    </div>
                    <div className=" d-flex gap-3">
                        <p>
                            <a href="/#" className="supportHero">Track account opening</a>
                        </p>
                        <p>
                            <a href="/#" className="supportHero">Track segment activation</a>
                        </p>
                        <p>
                            <a href="/#" className="supportHero">Intraday margins</a>
                        </p>
                        <p>
                            <a href="/#" className="supportHero">Kite user manual</a>
                        </p>
                    </div>
                </div>

                <div className="col-6 hero-content my-5">
                    <div className="text-end">
                        <a href="/#" className="supportHero text-end fs-4">Track tickets</a>
                    </div>
                    <div className="text-light" style={{margin:"4rem"}}>
                        <h3>Featured</h3>
                        <div style={{marginLeft:"2rem"}}>
                            <p href="/#" style={{textDecoration:"underline" , textDecorationThickness:"1px"}}>1.Surveillance measure on scrips - June 2025</p>
                            <p href="/#" style={{textDecoration:"underline" , textDecorationThickness:"1px"}}>2.Rights Entitlements listing in June 2025</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Hero;
