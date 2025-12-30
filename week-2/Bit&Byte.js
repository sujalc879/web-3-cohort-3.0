// slides link : https://projects.100xdevs.com/tracks/public-private-keys/Public-Key-Cryptography-2

// Bit representations
// const x = 0;
// console.log(x);

// Byte representations
// const x = 202;
// console.log(x);

// Array of Bytes representations
// const bytes = [2, 34, 56];
// console.log(bytes);


// Unit8Array representations
// upto 255
// const bytes = new Uint8Array([2, 34, 56]);
// console.log(bytes);

let uint8Arr = new Uint8Array([0, 255, 127, 128]);
uint8Arr[1] = 300;
console.log(uint8Arr);
