// slide link : https://projects.100xdevs.com/tracks/public-private-keys/Public-Key-Cryptography-3

const bs58 = require('bs58');;

// Bytes to Ascii

// function bytesToAscii(arr) {
//     let res = [];
//     for (let i = 0; i < arr.length; i++) {
//         res.push(String.fromCharCode(arr[i]));
//     }
//     return res.join("");
    
// }

// const bytes = [83, 117, 106, 97, 108];
// const result = bytesToAscii(bytes);
// console.log(result);



// Ascii to Bytes

// function AsciiToBytes(arr) {
//     return arr.map( (value) => {
//         return value.charCodeAt(0)
//     })
// }

// const ascii = ["S", "u", "j", "a", "l"];
// const result = AsciiToBytes(ascii);
// console.log(result);



// Uint8Array to ascii

// function Uint8ArrayToAscii(arr) {
//     return arr.map( (value) => {
//         return String(value).charCodeAt(0);
//     })
// }

// const bytes = new Uint8Array([1, 2, 3, 4]);
// const result = Uint8ArrayToAscii(bytes);
// console.log(result);



// Ascii to Uint8Array

// function AsciiToUint8Array(arr) {
//     return new Uint8Array([...arr].map( (value) => {
//         return String(value).charCodeAt(0)
//     }))
// }
// const ascii = "hello";
// const result = AsciiToUint8Array(ascii);
// console.log(result);


// ----------------------------------------------------------------------------------------------------------------------

// Hex

// array to Hex

// first it converts into binary then Hex
// function ArrayToHex(arr) {
//     let hexString = "";
//     for (let i = 0; i < arr.length; i++) {
//         hexString += arr[i].toString(16).padStart(2, "0");
//     }
//     return hexString;
// }

// const arr = new Uint8Array([72, 101, 108, 108, 111]);
// const result = ArrayToHex(arr);
// console.log(result);

// Hex to array

// function HexToArray(hex) {
//     let hexString = new Uint8Array( hex.length / 2 );
//     for (let i = 0; i < hexString.length; i++) {
//         hexString[i] = parseInt(hex.substr( i * 2, 2 ), 16);
//     }
//     return hexString;
// };
// const hex = "48656c6c6f";
// const result = HexToArray(hex);
// console.log(result);


// ------------------------------------------------------------------------------------------

// Base64

// const Uintarray = new Uint8Array([72]);
// const result = Buffer.from(Uintarray).toString("base64");
// console.log(result);

// Base58

function decodeBase58(arr) {
    return bs58.default.decode(arr.toString());
}
console.log(bs58);

const uint8Array = new Uint8Array([1123]);
const result = decodeBase58(uint8Array);
console.log(result);
