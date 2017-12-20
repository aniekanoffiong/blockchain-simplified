const blockchain = require('./blockchain');

blockchain.initBlockchain();
blockchain.addNewBlock('First New block');
blockchain.addNewBlock('Second New block');
blockchain.addNewBlock('Third New block');

console.log(blockchain.getAllBlocks());