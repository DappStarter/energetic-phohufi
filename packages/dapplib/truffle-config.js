require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'grace industry frame solution firm cruise million puppy half kitten bubble snow'; 
let testAccounts = [
"0xeaf552ceadd459a34894e5775463aa491ff324acdf4e934d7246887ce069fa9c",
"0xbdb8d2115b1c6a24daa429334d124ea6bf23d811619c9021a3360f971c6dc381",
"0x921e28cd103108e914e56b9e978e48baae45a83ef9fd594d0a3723c73152d777",
"0x7445f6d99c38eb504c5fd872db56a580a41c20d0f44d48d6ab241c202692b450",
"0xb37b2e95ee77fd5414f95775672c6cebdb6d466b5b9d37863df8166597f25507",
"0x87340516897a1c9ce5f0ec3b7aa749808c79daa869faea958d2c8b70d05c9dc8",
"0x4d1e2026ddffc6c1c92b14c8154f9366aca0de0471ada62852e7d1542d3a4665",
"0xecc4f5a2a2978b0975ab8b2011168c151556629ff860013242013125c2e96286",
"0xb7de18db43a7ba405cb977ad69563ebce058b979d49c7e5be249ab2896836a4d",
"0x38d6bebc6f3ade3eb1e65c75be7d1182327c683058102e0958c9dd1de2d7b012"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

