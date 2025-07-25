import React from "react";
import Hero from "./Hero";
import LeftImage from "./LeftImage";
import RightImage from "./Rightimage";
import Universe from "./Universe";

function ProductPage() {
  return (  <>
              <Hero />
              <LeftImage 
                imgURL="/media/kite.png"
                ProductName="Kite"
                tryDemo="Try Demo"
                learnMore="Learn More"
                googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite"
                appStore="https://apps.apple.com/app/id123456"
                ProductDiscription="Our ultra ‑ fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
              />
              <RightImage 
                imgURL="/media/console.png"
                ProductName="Console"
                tryDemo=" "
                learnMore=" "
                googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite"
                appStore="https://apps.apple.com/app/id123456"
                ProductDiscription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
              />
              <LeftImage 
                imgURL="/media/coin.png"
                ProductName="Coin"
                tryDemo="Coin "
                learnMore=""
                googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite"
                appStore="https://apps.apple.com/app/id123456"
                ProductDiscription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
              />
              <RightImage
                imgURL="/media/kiteconnect.png"
                ProductName="Kite Connect API"
                tryDemo=" "
                learnMore="Kite Connect "
                googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite"
                appStore="https://apps.apple.com/app/id123456"
                ProductDiscription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
              />
              <LeftImage
                imgURL="/media/varsity.png"
                ProductName="Varsity mobile"
                tryDemo=""
                learnMore=""
                googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite"
                appStore="https://apps.apple.com/app/id123456"
                ProductDiscription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                />

                <h3 className="container justify-content-center text-center my-5 " style={{ paddingTop:"30px",color:"#424242"}}>Want to know more about our technology stack? Check out the <a href="https://zerodha.tech" style={{textDecoration: "none"}}>Zerodha.tech</a> blog.</h3>

              <Universe />
            
  </>);
}

export default ProductPage;