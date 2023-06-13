import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { currentOrderSelector } from "../redux/slices/cartSlice";

const Invoice = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => state.cart.cartItems);
  // const order = useSelector(currentOrderSelector);

  return (
    <Helmet title="Invoice">
      <CommonSection title="Pesanan anda berhasil" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h1 className="mb-4 fw-bold">
                Terimakasih telah melakukan pemesanan
              </h1>
              <span>
                {/* <h5 className="mb-4 fs-4">Ringkasan pesanan</h5>
                <h6>Nama Pemesan : {order.customer}</h6> <br />
                <h6>Nomor Telepon : {order.phone}</h6> <br />
                <h6>Alamat Pengiriman : {order.address}</h6> <br />
                <h6>Kota/Kabupaten : {order.city}</h6> <br />
                <h6>Kode Pos : {order.postCode}</h6> <br />
                <h6>Negara : {order.country}</h6> */}
                <p className="mt-4">
                  {" "}
                  * Pesanan akan kami proses paling lama 2x24 jam setelah
                  pembayaran{" "}
                </p>
                <p>
                  {" "}
                  * Pembayaran dilakukan dengan metode transfer rekening bank{" "}
                </p>
                <p> * Screenshoot halaman ini untuk konfirmasi pesanan </p>
                <p>
                  {" "}
                  * Konfirmasi pesanan dan pembayaran dilakukan via Whatsapp{" "}
                </p>
              </span>
            </Col>

            <Col lg="4">
              <br />
              <div className="checkout__cart">
                {cartItems.map((item) => (
                  <h6 key={item.id}>
                    Nama Barang: <span>{item.productName}</span>
                  </h6>
                ))}
                <h6>
                  Total Pesanan Anda : <span>{totalQty} barang </span>
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
                <button className="buy__btn auth__btn w-100">
                  <Link to="/home">Beranda</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Invoice;
