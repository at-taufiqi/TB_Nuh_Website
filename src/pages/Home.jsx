import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import "../styles/home.css";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
import Services from "../services/Services";
import Productlist from "../components/UI/Productlist";

import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../components/UI/Clock";

import useGetData from "../custom-hooks/useGetData";

const Home = () => {
  const { data: products, loading } = useGetData("products");

  const [materialProducts, setMaterialProducts] = useState([]);
  const [elektronikProducts, setElektronikProducts] = useState([]);
  const [perabotProducts, setPerabotProducts] = useState([]);
  const [perkakasProducts, setPerkakasProducts] = useState([]);
  const [lainProducts, setLainProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredMaterialProducts = products.filter(
      (item) => item.category === "material"
    );
    const filteredElektronikProducts = products.filter(
      (item) => item.category === "elektronik"
    );
    const filteredPerabotProducts = products.filter(
      (item) => item.category === "perabot rumah"
    );
    const filteredPerkakasProducts = products.filter(
      (item) => item.category === "perkakas"
    );
    const filteredLainProducts = products.filter(
      (item) => item.category === "lain-lain"
    );

    setMaterialProducts(filteredMaterialProducts);
    setElektronikProducts(filteredElektronikProducts);
    setPerabotProducts(filteredPerabotProducts);
    setPerkakasProducts(filteredPerkakasProducts);
    setLainProducts(filteredLainProducts);
  }, [products]);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">
                  Temukan berbagai produk terbaru {year}
                </p>
                <h2>Solusi Tepat bagi Anda</h2>
                <p>
                  Toko Bangunan NUH adalah salah satu toko bangunan terkemuka di
                  kota Purbalingga. Kami menyediakan berbagai jenis material
                  bangunan dan peralatan konstruksi berkualitas tinggi untuk
                  kebutuhan renovasi dan pembangunan rumah Anda.
                </p>
                {/* <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">BELANJA SEKARANG</Link>
                </motion.button> */}
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="material__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Bahan Material</h2>
            </Col>

            {loading ? (
              <h5 className="fw-bold">Loading.....</h5>
            ) : (
              <Productlist data={materialProducts} />
            )}
          </Row>
        </Container>
      </section>
      <section className="elektronik__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Elektronik</h2>
            </Col>

            {loading ? (
              <h5 className="fw-bold">Loading.....</h5>
            ) : (
              <Productlist data={elektronikProducts} />
            )}
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Penawaran Terbatas</h4>
                <h3 className="text-white fs-5 mb-3">
                  Bahan Material dan Perkakas
                </h3>
              </div>
              <Clock />

              {/* <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__btn store__btn"
              >
                <Link to="/shop">Belanja Sekarang</Link>
              </motion.button> */}
            </Col>
            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="perabot__perkakas">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Perabot Rumah dan Perkakas</h2>
            </Col>

            {loading ? (
              <h5 className="fw-bold">Loading.....</h5>
            ) : (
              <Productlist data={perabotProducts} />
            )}

            {loading ? (
              <h5 className="fw-bold">Loading.....</h5>
            ) : (
              <Productlist data={perkakasProducts} />
            )}
          </Row>
        </Container>
      </section>

      <section className="lain">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Lain-lain</h2>
            </Col>

            {loading ? (
              <h5 className="fw-bold">Loading.....</h5>
            ) : (
              <Productlist data={lainProducts} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
