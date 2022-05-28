import ioClient from 'socket.io-client';
// const ENDPOINT = 'http://localhost:3000';
const ENDPOINT = import.meta.env.VITE_APP_ORIGIN;
// console.log('--------------');
// console.log(import.meta.env);
// console.log(import.meta.env.VITE_APP_ORIGIN);
// console.log(process.env.VITE_APP_ORIGIN);
// console.log('--------------');

const socket = ioClient(ENDPOINT);

export const io = socket;
