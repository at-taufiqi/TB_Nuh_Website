import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md="6">
            <div className="logo"></div>
            <h1 className="text-white">Toko Bangunan Nuh</h1>
            <div></div>
            <p className="footer__text mt-4">
              Kunjungi Toko Bangunan Nuh sekarang untuk menemukan material dan
              peralatan konstruksi yang tepat untuk kebutuhan renovasi atau
              pembangunan rumah Anda.
            </p>
          </Col>

          <Col lg="3" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Material</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Elektronik</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Perabot Rumah</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Perkakas</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Lain-lain</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup className="mb-3">
                {/* <ListGroupItem className='ps-0 border-0'>
                                <Link to='/shop'>Shop</Link>
                            </ListGroupItem> */}
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/home">Home</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <a
                    href="https://goo.gl/maps/5U9QFT7WtLvW3hmd6"
                    target="_blank"
                  >
                    {" "}
                    <span>
                      <i class="ri-map-pin-line"></i>
                    </span>{" "}
                  </a>
                  <p>Lembon Karangcengis, Bukateja, Kabupaten Purbalingga</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <a href="https://wa.me/628156743627" target="_blank">
                    {" "}
                    <span>
                      <i class="ri-phone-line"></i>
                    </span>{" "}
                  </a>
                  <p>+62 815-6743-627</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <a href="https://shorturl.at/wBDOV" target="_blank">
                    {" "}
                    <span>
                      <i class="ri-mail-line"></i>
                    </span>{" "}
                  </a>
                  <p>tokobangunan.nuh@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="12">
            <p className="footer__copyright">
              Copyright {year} developed by TB.Nuh Information and Technology
              Team . All rights reserverd.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
