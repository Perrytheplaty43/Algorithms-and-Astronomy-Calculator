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

let users = []

const reseter = async () => {
    setTimeout(() => {
        users.forEach(async (username) => {
            const docRef = db.collection('users').doc(username);
            await docRef.update({
                id: null
            })
        })
    }, 1800000)
}
reseter()
const server = http.createServer((req, res) => {
    const { method, url } = req;
    let surl = new URL(url, 'http://10.138.0.3:8002/');
    if (home.startsWith('/home/pi')) {
        surl = new URL(url, 'http://192.168.1.88:8002/');
    }

    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.~';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }

    const reset = async (user) => {
        const docRef = db.collection('users').doc(user);
        if (docRef != undefined) {
            users.push(user)
            let doc = await docRef.get()
            await docRef.update({
                id: makeid(40)
            })
        }
    }

    if (method == 'POST' && surl.pathname == '/add') {
        let searchParams = surl.searchParams
        let user = searchParams.get('user')

        return reset(user)
    }
})

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})