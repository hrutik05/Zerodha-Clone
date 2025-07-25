import React from "react";

function LeftImage({
  imgURL,
  ProductName,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  ProductDiscription
}) {
  return (
    <div className="container my-5 pt-3">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img src={imgURL} alt={ProductName} className="img-fluid" />
        </div>
        <div className="col-md-6" style={{padding: "0px 120px",lineHeight: "1.8"}}>
          <h2>{ProductName}</h2>
          <p>{ProductDiscription}</p>

          <div className="d-flex gap-2 flex-wrap  align-items-center mb-3">
            {tryDemo && <a href={tryDemo} style={{textDecoration: "none"} } className="">{tryDemo}<i className="fa-solid fa-arrow-right ms-2"> </i></a>}
            {learnMore && <a href={learnMore} style={{textDecoration: "none", marginLeft: "140px"}} className="">{learnMore}<i className="fa-solid fa-arrow-right ms-2"></i></a>}
          </div>

          <div className="d-flex gap-3 flex-wrap">
            {googlePlay && (<a href={googlePlay}><img alt="Get it on Google Play" src="/media/googlePlayBadge.svg" height={40} /></a>
            )}
            {appStore && (
              <a href={appStore} style={{marginLeft: "85px"}}>
                <img alt="Download on the App Store" src="/media/appstoreBadge.svg" height={40} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImage;