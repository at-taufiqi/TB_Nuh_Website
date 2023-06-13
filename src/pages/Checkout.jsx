import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/checkout.css";
import { useSelector } from "react-redux";

import { toast } from "react-toastify";
import { db } from "../firebase.config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const [enterCustomer, setEnterCustomer] = useState("");
  const [enterPhone, setEnterPhone] = useState("");
  const [enterAddress, setEnterAddress] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [enterPostCode, setEnterPostCode] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const addOrder = async (e) => {
    e.preventDefault();
    setLoading(true);

    //======add product to database=====
    try {
      const docRef = await collection(db, "orders");

      await addDoc(docRef, {
        customer: enterCustomer,
        phone: enterPhone,
        address: enterAddress,
        city: enterCity,
        postCode: enterPostCode,
        country: enterCountry,
        cartItems,
        totalQty,
        totalAmount,
        time: Timestamp.fromDate(new Date()),
      });

      setLoading(false);
      toast.success("order succesfully added!");
      navigate("/invoice");
    } catch (err) {
      setLoading(false);
      toast.error("order not added!");
    }
  };

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              {loading ? (
                <h4 className="py-5">Loading.......</h4>
              ) : (
                <>
                  <h6 className="mb-4 fw-bold">Informasi Pesanan</h6>
                  <Form onSubmit={addOrder}>
                    <FormGroup className="form__group">
                      <input
                        type="text"
                        placeholder="Nama Pemesan"
                        value={enterCustomer}
                        onChange={(e) => setEnterCustomer(e.target.value)}
                        required
                      />
                    </FormGroup>

                    <FormGroup className="form__group">
                      <input
                        type="number"
                        placeholder="Nomor Telepon"
                        value={enterPhone}
                        onChange={(e) => setEnterPhone(e.target.value)}
                        required
                      />
                    </FormGroup>

                    <FormGroup className="form__group">
                      <input
                        type="text"
                        placeholder="Alamat lengkap"
                        value={enterAddress}
                        onChange={(e) => setEnterAddress(e.target.value)}
                        required
                      />
                    </FormGroup>

                    <FormGroup className="form__group">
                      <input
                        type="text"
                        placeholder="Kota/Kabupaten"
                        value={enterCity}
                        onChange={(e) => setEnterCity(e.target.value)}
                        required
                      />
                    </FormGroup>

                    <FormGroup className="form__group">
                      <input
                        type="text"
                        placeholder="Kode Pos"
                        value={enterPostCode}
                        onChange={(e) => setEnterPostCode(e.target.value)}
                        required
                      />
                    </FormGroup>

                    <FormGroup className="form__group">
                      <input
                        type="text"
                        placeholder="Negara"
                        value={enterCountry}
                        onChange={(e) => setEnterCountry(e.target.value)}
                        required
                      />
                    </FormGroup>

                    <button
                      className="buy__btn"
                      type="submit"
                      onClick={addOrder}
                    >
                      Buat Pesanan
                    </button>
                  </Form>
                </>
              )}
            </Col>

            <Col lg="4">
              <div className="checkout__cart">
                {cartItems.map((item) => (
                  <h6 key={item.id}>
                    Nama Barang: <span>{item.productName}</span>
                  </h6>
                ))}

                <h6>
                  Total Pesanan : <span>{totalQty} barang </span>
                </h6>

                <h6>
                  Subtotal: <span>Rp {totalAmount}</span>
                </h6>

                <h6>
                  <span>
                    Ongkos Kirim : <br />
                    Gratis Ongkir
                  </span>
                  <span>Rp 0</span>
                </h6>

                <h4>
                  Total : <span>Rp {totalAmount}</span>
                </h4>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
