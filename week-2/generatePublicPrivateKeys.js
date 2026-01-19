import * as ed from "@noble/ed25519";

async function main() {
    const privateKey = ed.utils.randomSecretKey();

    const messasge = new TextEncoder().encode("hello world");

    const publicKey = await ed.getPublicKeyAsync(privateKey);

    const signature = await ed.signAsync(messasge, privateKey);

    const isValid = await ed.verifyAsync(signature, messasge, publicKey);

    console.log(isValid);
    
}
main();