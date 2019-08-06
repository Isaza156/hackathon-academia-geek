import React, { Component } from "react";
import Logo from "./images/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid bg-light text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-lg-4">
                <img
                  src={Logo}
                  alt=""
                  className="img-fluid w-75 d-block ml-4 mb-4"
                />
                <p>
                  (574) 4480374 <br />
                  (57) 3207610176 <br/> info@makaia.org <br/> Carrera 43 A # 34 – 155. Almacentro.<br/>
                  Oficina 701 Medellín, Colombia.
                </p>
              </div>
              <div className="col-md-8 col-lg-8 text-center">
                <h3 className="mt-5">Nuestras redes sociales</h3>
                <div className="align-items-center mt-3">
                  <a
                    className="text-white p-2"
                    target="_blanck"
                    href="https://www.facebook.com/Makaiaorg"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "facebook"]}
                      size="4x"
                      className="p-2"
                      color="blue"
                    />
                  </a>
                  <a
                    className="text-white p-2"
                    target="_blanck"
                    href="https://twitter.com/Makaiaorg"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "twitter"]}
                      size="4x"
                      className="p-2"
                      color="aqua"
                    />
                  </a>
                  <a
                    className="text-white p-3"
                    target="_blanck"
                    href="https://www.youtube.com/channel/UCSwYcQxM_DyO_VNqglgmvzQ"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "youtube"]}
                      size="4x"
                      className="p-2"
                      color="red"
                    />
                  </a>
                  <a
                    className="text-white p-3"
                    target="_blanck"
                    href="https://www.linkedin.com/company/makaia/"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "linkedin"]}
                      size="4x"
                      className="p-2"
                      color="blue"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid text-center bg-primary text-white">
          <div className="container py-3">
            <p>© 2019 Makaia. All Rights Reserved.</p>
          </div>
        </div> 

        {/* <div className="container-fluid bg-light">
            <div className="container">
            <img
                  src={Logo}
                  alt=""
                  className="img-fluid w-50 mx-auto d-block mb-4"
                />
                <div className="align-items-center mt-3 text-center pb-4">
                  <a
                    className="text-white p-2"
                    target="_blanck"
                    href="https://twitter.com/thezule1445"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "facebook"]}
                      size="4x"
                      className="p-2"
                      color="blue"
                    />
                  </a>
                  <a
                    className="text-white p-2"
                    target="_blanck"
                    href="https://github.com/juan1445"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "twitter"]}
                      size="4x"
                      className="p-2"
                      color="aqua"
                    />
                  </a>
                  <a
                    className="text-white p-3"
                    target="_blanck"
                    href="https://www.linkedin.com/in/juan1445"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "youtube"]}
                      size="4x"
                      className="p-2"
                      color="red"
                    />
                  </a>
                  <a
                    className="text-white p-3"
                    target="_blanck"
                    href="https://www.linkedin.com/in/juan1445"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "linkedin"]}
                      size="4x"
                      className="p-2"
                      color="blue"
                    />
                  </a>
                </div>
            </div>
        </div>
        <div className="container-fluid text-center bg-primary text-white">
          <div className="container py-3">
            <p>© 2019 Makaia. All Rights Reserved.</p>
          </div>
        </div> */}
      </React.Fragment>
    );
  }
}

export default Footer;