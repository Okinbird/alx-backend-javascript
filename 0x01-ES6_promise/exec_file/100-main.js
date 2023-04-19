import asyncUploadUser from "/home/okinamos/alx-backend-javascript/0x01-ES6_promise/100-await";

const test = async () => {
    const value = await asyncUploadUser();
    console.log(value);
};

test();
