import http from "http";
globalThis.http = http

const port = 8002

import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';

import serviceAccount from './regal-campaign-334804-firebase-adminsdk-diw5x-9e37631f62.json';
import admin from 'firebase-admin'

initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://regal-campaign-334804-default-rtdb.firebaseio.com/'
});

const db = getFirestore();

const home = process.cwd()
let ip = '10.138.0.3';
if (home.startsWith('/home/pi')) {
    ip = '192.168.1.88';
}

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hello, World!</h1>')
})

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})