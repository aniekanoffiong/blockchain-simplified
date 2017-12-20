const block_crypto = require('crypto')

const blockchain = (function () {
    const blocks = []

    const initBlockchain = () => {
        const data = 'Hello World!'
        const timestamp = new Date()
        const previousHash = 0
        const index = 0
        hashBlock(data, timestamp, previousHash, index)
    }


    const hashBlock = (data, timestamp, prevHash, index) => {
        let hash = '', nonce = 0

        while( !isHashValid(hash) ) {
            let input = `${data}${timestamp}${prevHash}${index}${nonce}`
            hash = String(block_crypto.createHmac('sha256', input))
            nonce += 1
            console.log(nonce)
        }
        console.log(nonce)
        blocks.push(hash)
    }

    const getLastHash = blocks => blocks.slice(-1)[0]

    const isHashValid = hash => {
        hash.startsWith('0000')
    }

    const addNewBlock = data => {
        const index = blocks.length
        const previousHash = getLastHash(blocks)
        hashBlock(data, new Date(), previousHash, index)
    }

    const getAllBlocks = () => blocks

    return {
        initBlockchain,
        getLastHash,
        blocks,
        getAllBlocks,
        addNewBlock
    }
})()

module.exports = blockchain