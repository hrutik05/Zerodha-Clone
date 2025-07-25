import React from 'react';

function Rightimage({
  imgURL,
  ProductName,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  ProductDiscription
}) {
    return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6 " style={{padding: "0px 120px" , lineHeight: "1.8"}} >
          <h2>{ProductName}</h2>
          <p>{ProductDiscription}</p>

          <div className="d-flex gap-2 flex-wrap  align-items-center mb-3">
            <a href={learnMore} style={{textDecoration: "none"}} className="">{learnMore}<i className="fa-solid fa-arrow-right ms-2"></i></a>
          </div>
        </div>

        <div className="col-md-6 text-center">
          <img src={imgURL} alt={ProductName} className="img-fluid" />
        </div>

      </div>
    </div>
    );
}

export default Rightimage;
