import React from "react";
import "./JoinUs.css";

const JoinUs = () => {
  return (
    <>
      <div className="joinUs">
        <div className="container">
          <div className="joinUsRow">
            <div className="joinUsTextCol">
              <div className="joinUsCurveText">
                <p>Feel The Excitement</p>
              </div>
              <div className="joinUsTextHeading">
                <h2>Join Us And Embark On New Adventures</h2>
              </div>
              <div className="joinUsMiddleText">
                <p>
                  Dolor sit amet consectetur adipiscing elits eiusmod tempor
                  incididunts laboreyse dolore mag aliqua. Quis ipsum supendise
                  ultrices gravid. Risus commodo viverra sed ipsum maecenas.
                </p>
              </div>
              <div className="joinUsTextBullet">
                <ul>
                  <li>
                    <p>Unde omnis iste natus error sit voluptatem dolore</p>
                  </li>
                  <li>
                    <p>Eaque ipsa quae ab illo inventore veritatis quasi que</p>
                  </li>
                  <li>
                    <p>Accusantium dolore que laudantium totamrem periam</p>
                  </li>
                </ul>
              </div>
              <div className="joinUsTextButton">
                <button>Discover More</button>
              </div>
            </div>
            <div className="joinUsImgOneCol">
              <img src="Images/Adventures.png" alt="Adventure" />
            </div>
            <div className="joinUsImgTwoCol">
              <img src="Images/Adventures2.png" alt="Adventure" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
