'use strict';
const express = require('express');

var Example = require('./Example');
// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
//index
app.get('/', (req, res) => {
  res.send('Example page.');
});

/**
 * Create wallet.
 *
 * @link http://localhost:3000/create-wallet
 */
app.get('/create-wallet', (req, res) => {
  const wallet = Example.getWallet();
  let html = '<h2>Create wallet</h2>';
  html += 'Wallet address: ' + wallet.address;
  res.send(html);
  res.send();
});

/**
 * Create transaction.
 *
 * @link http://localhost:3000/create-transaction
 */
app.get('/create-transaction', (req, res) => {
  let html = '<h2>Create transaction</h2>';
  const wallet = Example.getWallet();
  html += '<p><b>Wallet address: </b>' + wallet.address + '</p>';

  html += JSON.stringify(Example.createTransaction(wallet));

  res.send(html);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
