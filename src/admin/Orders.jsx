import React from "react";
import { Container, Row, Col } from "reactstrap";
import useGetData from "./../custom-hooks/useGetData";

import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";

const Orders = () => {
  const { data: OrdersData, loading } = useGetData("orders");

  const deleteOrder = async (id) => {
    await deleteDoc(doc(db, "orders", id));
    toast.success("deleted!");
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="fw-bold">Orders</h4>
          </Col>
          <Col lg="12" className="pt-5">
            <table className="table">
              <thead>
                <tr>
                  <th>Pemesan</th>
                  <th>Telp</th>
                  <th>Alamat</th>
                  <th>Kota</th>
                  <th>Kode Post</th>
                  <th>Negara</th>
                  {/* <th>Nama Barang</th> */}
                  <th>Total Barang</th>
                  <th>Total Bayar</th>
                  {/* <th>Waktu Pesan</th> */}
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <h5 className="pt-5 fw-bold">Loading.....</h5>
                ) : (
                  OrdersData?.map((order) => (
                    <tr key={order.id}>
                      <td>{order.customer}</td>
                      <td>{order.phone}</td>
                      <td>{order.address}</td>
                      <td>{order.city}</td>
                      <td>{order.postCode}</td>
                      <td>{order.country}</td>
                      {/* <td>{order.cartItems.productName}</td> */}
                      <td>{order.totalQty}</td>
                      <td>{order.totalAmount}</td>
                      {/* <td>{order.time}</td> */}
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            deleteOrder(order.id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Orders;
