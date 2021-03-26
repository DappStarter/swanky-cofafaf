require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict roast fortune street name random rural slow grid arctic metal gas'; 
let testAccounts = [
"0xc23b63169fcb61e001a2a8482fb06d6950dbd08cbe3aa4f3457281832bd37123",
"0xc7f0fc1ac0309d20cfe5ce470f341dbcbe769c02239baecd371e95dab7d6632d",
"0x60b3684f9f3557fb3d165e472439e96a61be6297e0d7b71ba7bca08a2065b758",
"0xa6be06ce32914b5901e41da29ce76f98fa983980d994e4c9e7d05197d57f7a40",
"0x4e22c5a58c9c7dce439712833a3b0f30f81f93353afc13741feeffe218f36928",
"0x7ad9468a79ba29d627c21e1389d2e5fce63a572206043be4aba1c1fca5065716",
"0x8a84f8e884bd2581f3bced843625a27e91bbde6b140ce8101cf93e821df11ca0",
"0x248f1971f0b3ce1b0081bc630b2965d6915945f5833a9d17f31999554cf8dd40",
"0x165ea165c8290e13531555670069ea4f71eb664c730454249011bc2bea05b7e1",
"0x4437533da552e4e6cecf88d3e5df503c28b64bdf123159a31f5f9b7402c51ff0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
