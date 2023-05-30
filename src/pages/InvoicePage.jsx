import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import '../styles/invoice-page.css'

const InvoicePage = () => {
  // Simulasi data pesanan
  const order = {
    id: '123456789',
    date: '08 Mei 2023',
    items: [
      { name: 'Produk A', price: 100000, quantity: 2 },
      { name: 'Produk B', price: 75000, quantity: 1 },
    ],
    total: 275000,
    shippingAddress: 'Jalan Contoh No. 123, Kota Contoh',
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Invoice Pesanan #{order.id}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Tanggal Pesanan: {order.date}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Alamat Pengiriman: {order.shippingAddress}
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Produk</TableCell>
              <TableCell align="right">Harga</TableCell>
              <TableCell align="right">Jumlah</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {order.items.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell align="right">Rp {item.price}</TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
                <TableCell align="right">Rp {item.price * item.quantity}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={3} align="right">Total</TableCell>
              <TableCell align="right">Rp {order.total}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default InvoicePage;