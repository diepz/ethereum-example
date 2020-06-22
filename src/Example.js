const Web3 = require('web3');
const web3 = new Web3();

web3.setProvider(
    new web3.providers.WebsocketProvider('wss://ropsten.infura.io/ws'));

let Example = {
  getAccountWallet: function() {
    const info = web3.eth.accounts.create();
    return info.address;
  },
};
module.exports = Example;