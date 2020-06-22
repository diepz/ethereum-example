const Web3 = require('web3');
const web3 = new Web3();

const socketHots = 'wss://ropsten.infura.io/ws';
web3.setProvider(new web3.providers.WebsocketProvider(socketHots));

let Example = {
  /**
   * Create and get wallet address.
   *
   * @returns string
   */
  getWallet: function() {
    return web3.eth.accounts.create();
  },
  /**
   * Create transaction.
   *
   * @param array wallet Account wallet.
   * @returns string
   */
  createTransaction: function(wallet) {
    return web3.eth.accounts.signTransaction({
      to: wallet.address,
      value: '2441406250',
      gas: '21000',
    }, wallet.privateKey).then(console.log);
  },
};

module.exports = Example;
