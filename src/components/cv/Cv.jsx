import React from "react";

import Service from "./Service/Service";
import Awards from "./Awards/Awards";
import Testimonials from "./Testimonials/Testimonials";
import about from "../../assets/about-me-2.jpg";
import border from "../../assets/border.png";
import TextTransition, { presets } from "react-text-transition";
import { jobs , CV} from "../../data/data";

function Cv({index}) {
  return (
    <section id="Cv" className="section  dark-bg">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img src={CV.profileImg} alt="about" />
                </div>
              </div>
              {/* End img */}
              <div className="info">
                <p>
                  <TextTransition
                    springConfig={presets.stiff}
                    className="justify-content-center"
                  >
                    {jobs[index % jobs.length]}
                  </TextTransition>
                </p>
                <h3 className="text-light">{CV.name}</h3>
              </div>
              {/* End info */}
            </div>
            {/* End about-me */}
          </div>
          {/* End col */}

          <div className="col-lg-7 ml-auto ">
          <div className="about-info">
              <div className="title">
                <h3>Biography</h3>
              </div>
              <div className="about-text text-light">
                <p>
                {CV.about_1}
                </p>
                <p>
                {CV.about_2}
                </p>
              </div>
              <div className="info-list">
                <div className="row">
                  <div className="col-sm-6 ">
                    <ul className='text-light' >
                      <li>
                        <label>Name: </label>
                        <span>{CV.name}</span>
                      </li>
                      <li>
                        <label>Birthday: </label>
                        <span>{CV.birthday}</span>
                      </li>
                      <li>
                        <label>Age: </label>
                        <span>{CV.age}</span>
                      </li>
                      <li>
                        <label>Address: </label>
                        <span>{CV.address}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul  className='text-light'>
                      <li>
                        <label>Phone: </label>
                        <span>{CV.phone}</span>
                      </li>
                      <li>
                        <label>Email: </label>
                        <span>{CV.email}</span>
                      </li>
                      <li>
                        <label>Freelance: </label>
                        <span>{CV.freelance}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End col */}
        </div>
        {/* separated */}
        <div
          className="separated"
          style={{
            backgroundImage: `url(${border})`,
          }}
        ></div>
        {/* End separated */}
        <div className="title">
          <h3>What I do?</h3>
        </div>
        <Service />
        {/* End .row */}
        {/* separated */}
        <div
          className="separated"
          style={{
            backgroundImage: `url(${border})`,
          }}
        ></div>
        {/* End separated */}

        <div className="title">
          <h3>Awards.</h3>
        </div>
        <Awards />
        {/* End Awards */}

        {/* separated */}
        <div
          className="separated"
          style={{
            backgroundImage: `url(${border})`,
          }}
        ></div>
        {/* End separated */}

        <div className="title">
          <h3>Testimonials.</h3>
        </div>
        <Testimonials />
        {/* End Testimonaial */}
      </div>
    </section>
  );
}

export default Cv;
