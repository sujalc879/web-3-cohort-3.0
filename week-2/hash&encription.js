// slides link : https://projects.100xdevs.com/tracks/public-private-keys/Public-Key-Cryptography-4

const crypto = require('crypto');

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

function encrypt(text) {
    const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
    let encrypted = cipher.update(text, "utf-8", "hex");
    encrypted += cipher.final("hex");
    return encrypted;
}


function decrypt(encryptedText) {
    const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
    let decrypted = decipher.update(encryptedText, "hex", "utf-8");
    decrypted += decipher.final("utf-8");
    return decrypted;
}

const text = "Hello, World!";
const encryptedText = encrypt(text);
const decryptedText = decrypt(encryptedText);

console.log("Orignal Text " + text);
console.log("encrypted Text " + encryptedText);
console.log("decrypted Text " + decryptedText);
