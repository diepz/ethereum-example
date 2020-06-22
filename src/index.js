'use strict';
const express = require('express');
const ejs = require('ejs');

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
 * Create wallet account.
 *
 * @link http://localhost:3000/create-wallet-account
 */
app.get('/create-wallet-account', (req, res) => {
  let info = web3.eth.accounts.create();
  if (web3) {
    res.send('Wallet account: ' + JSON.stringify(info));
  }
  else {
    res.send('Errors');
  }
  return false;
});

/**
 * Create transaction.
 *
 * @link http://localhost:3000/create-transaction
 */
app.get('/create-transaction', (req, res) => {
  const wallet = Example.getAccountWallet();
  console.info(wallet);
  // let ejs = require('ejs');
  // let people = ['geddy', 'neil', 'alex'];
  // let html = ejs.render('<%= people.join(", "); %>', {people: people});
  //
  // // let html = '';
  // // html += Example.info('xx');
  // //Create wallet address
  // let info = web3.eth.accounts.create();
  // html += '<p><b>Wallet address: </b>' + info.address + '</p>';
  res.send(wallet);

  return false;
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
