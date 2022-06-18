import fetch from "node-fetch";
globalThis.fetch = fetch

import https from "https";
globalThis.https = https

import http from "http";
globalThis.http = http

import fs from "fs";
globalThis.fs = fs

import path, { parse } from "path";
globalThis.path = path

import child from 'child_process';
globalThis.child = child

import dotenv from 'dotenv'
dotenv.config()

import OS from 'os'
process.env.UV_THREADPOOL_SIZE = OS.cpus().length

import nodemailer from 'nodemailer';

import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue, GeoPoint } from 'firebase-admin/firestore';

import bcrypt from 'bcrypt'

const delimiter = "/";

let testing = false;
const home = process.cwd()

const frameworkPath1 = "/MineSweeper/MineSweeperWWW/_framework";
const frameworkPath2 = "/_framework";
let fileCount;

let KEY = process.env.KEY
let ip = '10.138.0.3';
let addr = "athesto.ddns.net"
if (home.startsWith('/home/pi')) {
    ip = '192.168.1.88';
    addr = "athesto-dev.ddns.net"
}

if (!home.startsWith('/home/runner')) {
    fs.readFile(home + delimiter + 'Logs' + delimiter + 'fileCount.txt', function (err, html) {
        fileCount = parseInt(html)
    })
}

import serviceAccount from './regal-campaign-334804-5d515362c7e2.json';
import admin from 'firebase-admin'

initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://regal-campaign-334804-default-rtdb.firebaseio.com/'
});

const db = getFirestore();
var transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    secureConnection: false,
    port: 587,
    tls: {
        ciphers: 'SSLv3'
    },
    auth: {
        user: process.env.USERNAME,
        pass: process.env.PASS
    }
});

function myServer(req, res) {
    const { method, url } = req;
    if (!testing) {
        fs.stat(home + delimiter + 'Logs' + delimiter + 'log' + fileCount + '.txt', (err, stats) => {
            if (err) {
                console.log(err);
                errorLog(testing, err, "16")
                return;
            }
            if (stats.size > 10000) {
                fileCount++;
                fs.writeFile(home + delimiter + 'Logs' + delimiter + 'fileCount.txt', fileCount.toString(), {}, (err) => {
                    if (err) {
                        console.log(err);
                        errorLog(testing, err, "17")
                        return;
                    }
                })
                fs.writeFile(home + delimiter + 'Logs' + delimiter + 'log' + fileCount + '.txt', "", {}, (err) => {
                    if (err) {
                        console.log(err);
                        errorLog(testing, err, "18")
                        return;
                    }
                })
            }
            return
        })
    }
    let surl = new URL(url, 'https://10.138.0.3/');
    if (home.startsWith('/home/pi')) {
        surl = new URL(url, 'https://192.168.1.88/');
    }
    let date = new Date();
    if (req.socket.remoteAddress == "98.232.109.230") console.log((parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "::" + " Rish visit")
    if (serveFile("GET", "/", "index.html", "text/html", surl, res, req)) return;

    if (method == 'POST' && surl.pathname == '/astroBlank') {
        let idBlank = surl.searchParams
        let id = idBlank.get('id')
        if (id != null && !testing) {
            fs.appendFile(home + delimiter + 'Logs' + delimiter + 'todo.txt', "\n" + id, (err) => {
                if (err) {
                    console.log(err);
                    errorLog(testing, err, "20")
                    return;
                }
                return;
            })
            res.end();
        }
        return;
    }

    if (serveFile("GET", "/style.css", "style.css", "text/css", surl, res, req)) return;
    if (serveFile("GET", "/robots.txt", "robots.txt", "text", surl, res, req)) return;
    if (serveFile("GET", "/script.js", "script.js", "text/js", surl, res, req)) return;
    if (serveFile("GET", "/privacyPolicy", "privacyPolicy" + delimiter + "index.html", "text/html", surl, res, req)) return;
    if (serveFile("GET", "/signup/style.css", "signup" + delimiter + "style.css", "text/css", surl, res, req)) return;
    if (serveFile("GET", "/signup/script.js", "signup" + delimiter + "script.js", "text/js", surl, res, req)) return;
    if (serveFile("GET", "/signup/", "signup" + delimiter + "index.html", "text/html", surl, res, req)) return;
    if (serveFile("GET", "/reset/style.css", "reset" + delimiter + "style.css", "text/css", surl, res, req)) return;
    if (serveFile("GET", "/reset/script.js", "reset" + delimiter + "script.js", "text/js", surl, res, req)) return;
    if (serveFile("GET", "/reset/", "reset" + delimiter + "index.html", "text/html", surl, res, req)) return;
    if (serveFile("GET", "/login/style.css", "login" + delimiter + "style.css", "text/css", surl, res, req)) return;
    if (serveFile("GET", "/login/script.js", "login" + delimiter + "script.js", "text/js", surl, res, req)) return;
    if (serveFile("GET", "/login/", "login" + delimiter + "index.html", "text/html", surl, res, req)) return;
    if (serveFile("GET", "/forgotReset/suc.css", "forgot" + delimiter + "suc.css", "text/css", surl, res, req)) return;
    if (serveFile("GET", "/forgotReset", "forgot" + delimiter + "suc.html", "text/html", surl, res, req)) return;
    if (serveFile("GET", "/forgotReset/suc.js", "forgot" + delimiter + "suc.js", "text/js", surl, res, req)) return;
    if (serveFile("GET", "/api/err.css", "forgot" + delimiter + "err.css", "text/css", surl, res, req)) return;
    if (serveFile("GET", "/api/err.js", "forgot" + delimiter + "err.js", "text/js", surl, res, req)) return;
    if (serveFile("GET", "/forgot/style.css", "forgot" + delimiter + "style.css", "text/css", surl, res, req)) return;
    if (serveFile("GET", "/forgot/script.js", "forgot" + delimiter + "script.js", "text/js", surl, res, req)) return;
    if (serveFile("GET", "/forgot/", "forgot" + delimiter + "index.html", "text/html", surl, res, req)) return;
    if (serveFile("GET", "/favicon.ico", "favicon.ico", "image/x-icon", surl, res, req)) return;
    if (serveFile("GET", "/astroTargetFinder", "astroTargetFinder" + delimiter + "index.html", "text/html", surl, res, req)) return;
    if (serveFile("GET", "/astroTargetFinder/style.css", "astroTargetFinder" + delimiter + "style.css", "text/css", surl, res, req)) return;
    if (serveFile("GET", "/astroTargetFinder/script.js", "astroTargetFinder" + delimiter + "script.js", "text/js", surl, res, req)) return;
    if (serveFile("GET", "/astroTargetFinder/ngc2000Final.txt", "astroTargetFinder" + delimiter + "ngc2000Final.txt", "text/plain", surl, res, req)) return;
    if (serveFile("GET", "/enterInput.html", "enterInput.html", "text/html", surl, res, req)) return;
    if (serveFile("GET", "/404.css", "404.css", "text/css", surl, res, req)) return;
    if (serveFile("GET", "/MineSweeper", 'MineSweeper' + delimiter + 'MineSweeperWWW' + delimiter + 'index.html', "text/html", surl, res, req)) return;
    if (serveFile("GET", '/MineSweeper/MineSweeperWWW/css/index.css', 'MineSweeper' + delimiter + 'MineSweeperWWW' + delimiter + 'css' + delimiter + 'index.css', "text/css", surl, res, req)) return;

    if (method == 'GET' && surl.pathname.search(".jpg") !== -1) {
        let id = [];
        for (let i = surl.pathname.search(".jpg") - 1; i > 0; i--) {
            if (surl.pathname[i] == "/") {
                break;
            } else {
                id.push(surl.pathname[i]);
            }
        }
        id = id.reverse();
        let name = id.join("").replace(/%20/gm, "")
        fs.readFile(home + delimiter + 'Images' + delimiter + name + '.jpg', function (err, html) {
            if (err) {
                console.log(err);
                errorLog(testing, err, "11")
                fs.appendFile(home + delimiter + 'Logs' + delimiter + 'todo.txt', "\n" + id.join(""), (err) => {
                    if (err) {
                        console.log(err);
                        errorLog(testing, err, "20")
                    }
                })
                res.end();
                return;
            }
            let date = new Date();
            let write = (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":: " + req.socket.remoteAddress + ":" + " " + name;
            res.writeHead(200, { 'Content-Type': 'image/jpg' });
            res.write(html);
            res.end();
            logging(testing, write, req)
        });
        return;
    }
    if (surl.pathname.startsWith(frameworkPath1)) {
        let fileName = surl.pathname.substring(frameworkPath1.length);
        let extention = fileName.substring(fileName.lastIndexOf('.'));
        fs.readFile(home + delimiter + 'MineSweeper' + delimiter + 'MineSweeperWWW' + delimiter + '_framework' + delimiter + fileName, function (err, html) {
            if (err) {
                console.log(err);
                errorLog(testing, err, "14")
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/' + extention });
            res.write(html);
            res.end();
        });
        return;
    }
    if (surl.pathname.startsWith(frameworkPath2)) {
        let fileName = surl.pathname.substring(frameworkPath2.length);
        let extention = fileName.substring(fileName.lastIndexOf('.'));
        fs.readFile(home + delimiter + 'MineSweeper' + delimiter + 'MineSweeperWWW' + delimiter + '_framework' + delimiter + fileName, function (err, html) {
            if (err) {
                console.log(err);
                errorLog(testing, err, "15")
                return;
            }
            if (fileName == "/dotnet.wasm") {
                res.writeHead(200, { 'Content-Type': 'application/' + 'wasm' });
            } else {
                res.writeHead(200, { 'Content-Type': 'text/' + extention });
            }
            res.write(html);
            res.end();
        });
        return;
    }

    let theJSON;
    let condition = "unknown";
    let searchDate;
    function save(inputs, timesUNIX, moon) {
        theJSON = inputs
        theJSON = JSON.parse(theJSON)
        if (moon[2] < 45 || moon[2] > 55) {
            if (timesUNIX[1] > moon[0]) {
                timesUNIX[1] = moon[0]
            }
            if (moon[0] < timesUNIX[0] && moon[1] < timesUNIX[1]) {
                timesUNIX[0] = moon[1]
            }
        }
        let clouds = [];
        for (let i = 0; i <= theJSON.list.length - 1; i++) {
            if (timesUNIX[0] <= theJSON.list[i].dt) {
                if (timesUNIX[1] <= theJSON.list[i].dt) {
                    break;
                }
                let dew;
                let temp = parseFloat(theJSON.list[i].main.temp) - 273.15
                let rHumid = parseFloat(theJSON.list[i].main.humidity)
                let a = 17.62
                let b = 243.12
                dew = (b * (Math.log(rHumid / 100) + a * temp / (b + temp)) / (a - (Math.log(rHumid / 100) + a * temp / (b + temp))))
                clouds.push([theJSON.list[i].dt, theJSON.list[i].clouds.all, Math.abs(dew - temp)])
            }
        }
        clouds = clouds.sort(compareSecondColumn)
        let goodWeather = []
        let bad = false
        let oneGood = false
        for (let i = 0; i <= clouds.length - 1; i++) {
            if (clouds[i][1] < 10 && clouds[i][2] > 1.5) {
                goodWeather.push(clouds[i])
                oneGood = true
            }
            if (clouds[clouds.length - 1][1] > 10 || ((() => { let turning = 0; for (let i = 0; i <= clouds.length - 1; i++) { turning += clouds[i][1]; } return turning })()) / clouds.length > 30 || clouds[i][2] < 1.5) {
                bad = true
            }
        }
        if (bad && oneGood) {
            searchDate = goodWeather[Math.floor((goodWeather.length - 1) / 2)]
        } else {
            searchDate = 0
        }
        let ii;
        if (((() => { for (let i = 0; i <= clouds.length - 1; i++) { if (clouds[i][1] > 10) { return true } } return false })()) && ((() => { for (let i = 0; i <= clouds.length - 1; i++) { if (clouds[i][2] > 1.5) { return true } } return false })())) {
            return "Perfect";
        } else if (((() => { let turning = 0; for (ii = 0; ii <= clouds.length - 1; ii++) { turning += clouds[ii][1]; } return turning })()) / clouds.length < 30 && clouds[ii][2] > 1.5) {
            return "Fair";
        } else if (clouds.length == 0) {
            return "Unknown";
        } else {
            return "Bad";
        }
    }

    function toRadians(angle) {
        return angle * (Math.PI / 180)
    }

    function toDegrees(angle) {
        return angle * (180 / Math.PI)
    }

    function sunsetriseTime(lat, long, targetDate) {
        lat = parseFloat(lat)
        long = parseFloat(long)
        let now = new Date(targetDate)
        let start = new Date(now.getFullYear(), 0, 0);
        let diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
        let oneDay = 1000 * 60 * 60 * 24;
        let day = Math.floor(diff / oneDay);

        let y = ((2 * Math.PI) / 365) * (day - 365)

        let eqtime = 229.18 * (0.000075 + 0.001868 * Math.cos(y) - 0.032077 * Math.sin(y) - 0.014615 * Math.cos(2 * y) - 0.040849 * Math.sin(2 * y))
        let decl = 0.006918 - 0.399912 * Math.cos(y) + 0.070257 * Math.sin(y) - 0.006758 * Math.cos(2 * y) + 0.000907 * Math.sin(2 * y) - 0.002697 * Math.cos(3 * y) + 0.00148 * Math.sin(3 * y)

        let haP = Math.acos(((Math.cos(toRadians(90.833))) / (Math.cos(toRadians(lat)) * Math.cos(decl))) - Math.tan(toRadians(lat)) * Math.tan(decl))
        haP = toDegrees(haP)

        let haM = -1 * Math.acos(((Math.cos(toRadians(90.833))) / (Math.cos(toRadians(lat)) * Math.cos(decl))) - Math.tan(toRadians(lat)) * Math.tan(decl))
        haM = toDegrees(haM)

        let sunRiseSet1 = 720 - 4 * (long + haP) - eqtime
        let sunRiseSet2 = 720 - 4 * (long + haM) - eqtime
        let output = [sunRiseSet1, sunRiseSet2]
        return output
    }
    const isWeatherGood = async (lat, long, reqDate, astro, moon) => {
        if (reqDate == "") {
            let curDate = new Date();
            reqDate = (curDate.getMonth() + 1) + "-" + curDate.getDate() + "-" + curDate.getFullYear()
        }
        let runriseSet = sunsetriseTime(lat, long, reqDate)
        runriseSet = runriseSet.sort();
        let rise = new Date(reqDate)
        let seting = new Date(reqDate)
        let hours = (runriseSet[0] / 60);
        let rhours = Math.floor(hours);
        let minutes = (hours - rhours) * 60;
        let rminutes = Math.round(minutes);
        rise.setHours(rhours, rminutes, 0)

        let hours1 = (runriseSet[1] / 60);
        let rhours1 = Math.floor(hours1);
        let minutes1 = (hours1 - rhours1) * 60;
        let rminutes1 = Math.round(minutes1);
        seting.setHours(rhours1, rminutes1, 0)

        let timesUNIX = [rise.getTime() / 1000, seting.getTime() / 1000];
        timesUNIX = timesUNIX.sort()
        return fetch(
            'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + long + '&APPID=' + KEY,
            { method: 'GET' }
        )
            .catch(error => console.log('error:', error))
            .then(response => {
                return response.text();
            })
            .then(r => {
                let saved = save(r, timesUNIX, moon)
                if (!astro) {
                    res.write(JSON.stringify({ conditions: saved }))
                    res.end();
                }
                return
            })
            .catch(error => console.log('error:', error));
    }

    if (method == 'GET' && surl.pathname == '/astroTargetFinder/weatherAPI') {
        let searchParams = surl.searchParams
        let lat = searchParams.get('lat')
        let long = searchParams.get('lon')
        fetch(
            'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + long + '&APPID=' + KEY,
            { method: 'GET' }
        )
            .then(response => response.text())
            .then(data => {
                res.writeHead(200, { 'Content-Type': 'text/json' });
                res.write(data);
                res.end();
            })
            .catch(error => console.log('error:', error));
        return;
    }
    const signup = async (user, pass, reseting, email) => {
        const snapshot = await db.collection('users').get();
        let same = false
        if (pass.length <= 7) {
            res.writeHead(200, { 'Content-Type': 'text/json' });
            res.write(JSON.stringify({ res: "shortPass" }));
            res.end();
            same = true;
            return
        }
        if (!validateEmail(email)) {
            res.writeHead(200, { 'Content-Type': 'text/json' });
            res.write(JSON.stringify({ res: "invalidEmail" }));
            res.end();
            same = true;
            return
        }
        if (!reseting) {
            await snapshot.forEach((doc) => {
                if (doc.id == user) {
                    res.writeHead(200, { 'Content-Type': 'text/json' });
                    res.write(JSON.stringify({ res: "same" }));
                    res.end();
                    same = true;
                    return
                } else if (doc.data().email == email) {
                    res.writeHead(200, { 'Content-Type': 'text/json' });
                    res.write(JSON.stringify({ res: "sameemail" }));
                    res.end();
                    same = true;
                    return
                }
            })
        }
        let salt = await bcrypt.genSalt()
        let hashedPass = await bcrypt.hash(pass, salt)

        const docRef = db.collection('users').doc(user);
        if (!same) {
            if (!reseting) {
                return await docRef.set({
                    user: user,
                    pass: hashedPass,
                    fav: [],
                    type: ["Gx", "OC", "Gb", "Nb", "Pl", "CpN", "Ast", "Kt", "TS", "DS", "SS", "Q", "U", "D", "PD"],
                    tol: 70,
                    magTol: 10,
                    token: null,
                    tokenEx: null,
                    email: email,
                    home: null
                }).then(() => {
                    res.writeHead(200, { 'Content-Type': 'text/json' });
                    res.write(JSON.stringify({ res: "suc" }));
                    res.end();
                    return
                });
            } else {
                return await docRef.update({
                    pass: hashedPass
                }).then(() => {
                    res.writeHead(200, { 'Content-Type': 'text/json' });
                    res.write(JSON.stringify({ res: "suc" }));
                    res.end();
                    return
                });
            }
        }
    }
    if (method == 'POST' && surl.pathname == '/api/signup') {
        let searchParams = surl.searchParams
        let user = searchParams.get('user')
        let pass = searchParams.get('pass')
        let email = searchParams.get('email')

        return signup(user, pass, false, email)
    }

    let none = true
    let theLoginRes;
    const login = async (user, pass, only) => {
        const snapshot = await db.collection('users').get();
        return await snapshot.forEach(async (doc) => {
            if (doc.id == user) {
                if (await bcrypt.compare(pass, doc.data().pass)) {
                    none = false
                    if (!only) {
                        res.writeHead(200, { 'Content-Type': 'text/json' });
                        res.write(JSON.stringify({ res: "correct" }));
                        res.end();
                    } else {
                        theLoginRes = "suc"
                    }
                    return "correct"
                } else {
                    none = false
                    if (!only) {
                        res.writeHead(200, { 'Content-Type': 'text/json' });
                        res.write(JSON.stringify({ res: "wrong" }));
                        res.end();
                    } else {
                        theLoginRes = "wrong"
                    }
                    return "true"
                }
            }
        });
    }

    if (method == 'POST' && surl.pathname == '/api/reset') {
        let searchParams = surl.searchParams
        let user = searchParams.get('user')
        let pass = searchParams.get('pass')
        let email = searchParams.get('email')
        let passNew = searchParams.get('passNew')

        return login(user, pass, true)
            .then(() => {
                setTimeout(async () => {
                    if (theLoginRes == "suc") {
                        return await signup(user, passNew, true, email)
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/json' });
                        res.write(JSON.stringify({ res: "err" }));
                        res.end();
                        return
                    }
                }, 1000)
            })
    }

    if (method == 'GET' && surl.pathname == '/api/login') {
        let searchParams = surl.searchParams
        let user = searchParams.get('user')
        let pass = searchParams.get('pass')

        return login(user, pass)
            .then(() => {
                setTimeout(() => {
                    if (none) {
                        res.writeHead(200, { 'Content-Type': 'text/json' });
                        res.write(JSON.stringify({ res: "nouser" }));
                        res.end();
                        return
                    } else {
                        return
                    }
                }, 500);
            })
    }

    const addFav = async (id, user) => {
        const docRef = db.collection('users').doc(user);
        let doc = await docRef.get()
        id = id.toUpperCase()

        if (id != "NGC0000") {
            let vals = Object.values(doc.data().fav)
            vals.push(id)
            return await docRef.update({
                fav: vals
            })
        } else if (id == "NGC0000") {
            return await docRef.update({
                fav: []
            })
        }
    }

    if (method == 'POST' && surl.pathname == '/api/fav') {
        let searchParams = surl.searchParams
        let user = searchParams.get('user')
        let pass = searchParams.get('pass')
        let id = searchParams.get('id')

        return login(user, pass, true)
            .then(() => {
                setTimeout(() => {
                    if (theLoginRes == "suc") {
                        res.writeHead(200, { 'Content-Type': 'text/json' });
                        res.write(JSON.stringify({ res: "done" }));
                        res.end();
                        return addFav(id, user)
                    } else {

                    }
                }, 1000)
            })
    }

    const addLoc = async (lat, long, user) => {
        const docRef = db.collection('users').doc(user);

        return await docRef.update({
            home: new GeoPoint(parseFloat(lat), parseFloat(long))
        })
    }

    if (method == 'POST' && surl.pathname == '/api/loc') {
        let searchParams = surl.searchParams
        let user = searchParams.get('user')
        let pass = searchParams.get('pass')
        let lat = searchParams.get('lat')
        let long = searchParams.get('long')

        return login(user, pass, true)
            .then(() => {
                setTimeout(() => {
                    if (theLoginRes == "suc") {
                        res.writeHead(200, { 'Content-Type': 'text/json' });
                        res.write(JSON.stringify({ res: "done" }));
                        res.end();
                        return addLoc(lat, long, user)
                    } else {

                    }
                }, 1000)
            })
    }

    const addParam = async (type, tol, magTol, user) => {
        const docRef = db.collection('users').doc(user);
        let typeArr = type.split(",")

        return await docRef.update({
            type: typeArr,
            tol: parseInt(tol),
            magTol: parseInt(magTol)
        })
    }

    if (method == 'POST' && surl.pathname == '/api/params') {
        let searchParams = surl.searchParams
        let user = searchParams.get('user')
        let pass = searchParams.get('pass')
        let type = searchParams.get('type')
        let tol = searchParams.get('tol')
        let magTol = searchParams.get('magTol')

        return login(user, pass, true)
            .then(() => {
                setTimeout(() => {
                    if (theLoginRes == "suc") {
                        res.writeHead(200, { 'Content-Type': 'text/json' });
                        res.write(JSON.stringify({ res: "done" }));
                        res.end();
                        return addParam(type, tol, magTol, user)
                    } else {

                    }
                }, 1000)
            })
    }

    if (method == 'GET' && surl.pathname == '/api/params') {
        let searchParams = surl.searchParams
        let user = searchParams.get('user')
        let pass = searchParams.get('pass')

        return login(user, pass, true)
            .then(() => {
                setTimeout(async () => {
                    if (theLoginRes == "suc") {
                        const docRef = db.collection('users').doc(user);
                        let doc = await docRef.get()

                        res.writeHead(200, { 'Content-Type': 'text/json' });
                        let lat;
                        let long;
                        if (doc.data().home != null) {
                            lat = doc.data().home.latitude
                            long = doc.data().home.longitude
                        }
                        res.write(JSON.stringify({ type: doc.data().type.join(","), tol: doc.data().tol, magTol: doc.data().magTol, lat: lat, long: long = long }));
                        res.end();
                        return
                    } else {

                    }
                }, 1000)
            })
    }

    if (method == 'GET' && surl.pathname == '/api/moon') {
        let searchParams = surl.searchParams
        let lat = searchParams.get('lat')
        let long = searchParams.get('lon')
        let date = searchParams.get('date')
        fetch(
            'https://api.met.no/weatherapi/sunrise/2.0/.json?lat=' + lat + '&lon=' + long + '&date=' + date + '&offset=-00:00',
            { method: 'GET' }
        )
            .then(response => response.text())
            .then(data => {
                res.writeHead(200, { 'Content-Type': 'text/json' });
                let moonsetIndex = 0
                try {
                    if (JSON.parse(data).location.time[0].moonset != undefined) {
                        moonsetIndex = JSON.parse(data).location.time[0].moonset
                    }
                    let moonriseIndex = 0
                    if (JSON.parse(data).location.time[0].moonrise != undefined) {
                        moonriseIndex = JSON.parse(data).location.time[0].moonrise
                    }
                    res.write(JSON.stringify({ moonrise: moonriseIndex, moonset: moonsetIndex, phase: JSON.parse(data).location.time[0].moonphase.value }));
                } catch {
                    console.log("Moon API Query Failed")
                    res.write(JSON.stringify({ error: "Moon API Query Failed" }));
                }
                res.end();
            })
            .catch(error => console.log('error:', error));
        return;
    }
    let no404 = false;
    if (method == 'GET' && surl.pathname == '/api/weather') {
        no404 = true;
        let searchParams = surl.searchParams
        let lat = searchParams.get('lat')
        let long = searchParams.get('lon')
        let date = searchParams.get('date')
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        isWeatherGood(lat, long, date, false)
    }
    if (method == 'GET' && surl.pathname == '/api/astroTarget') {
        let searchParams = surl.searchParams
        let lat = searchParams.get('lat')
        let long = searchParams.get('long')
        let tol = searchParams.get('tol')
        let tolMag = searchParams.get('tolMag')
        let types = searchParams.get('type')
        let dateToSend = searchParams.get('date')
        fetch(
            'http://' + ip + ':8001/astro?lat=' + lat + '&long=' + long + '&tol=' + tol + '&tolMag=' + tolMag + '&type=' + types + "&date=" + dateToSend,
            { method: 'GET' }
        )
            .then(response => response.text())
            .then(finalData => {
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                let data = JSON.parse(finalData);
                let writing = []
                for (i = 0; i <= data.length - 1; i++) {
                    writing.push({ id: data[i][0], alt: data[i][1], mag: data[i][2], type: data[i][3], constellation: data[i][4] })
                }
                res.write(JSON.stringify(writing));
                res.end();
            })
            .catch(error => console.log('error:', error));
        return;
    }
    if (method == 'GET' && surl.pathname == '/api/images') {
        let searchParams = surl.searchParams
        let id = searchParams.get('id')
        let date = new Date();
        let write = (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":: " + req.socket.remoteAddress + ":" + " " + id;
        res.writeHead(302, { 'Location': 'Images/' + id + '.jpg', 'Content-Type': 'image/jpg' });
        res.end();
        logging(testing, write, req)
        return;
    }
    const astro = (searchParams) => {
        let lat = searchParams.get('lat')
        let long = searchParams.get('long')
        let tol = searchParams.get('tol')
        let tolMag = searchParams.get('tolMag')
        let types = searchParams.get('type')
        let dateToSend = searchParams.get('date')
        let debugging = searchParams.get('debugging')

        let correct;
        let userReq = searchParams.get('user')
        let passReq = searchParams.get('pass')
        let amITesting = searchParams.get('testing')

        let amTesting = false
        if (amITesting == process.env.LOG_KEY) amTesting = true

        let write = (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":: " + req.socket.remoteAddress;
        logging(testing, write, req, amTesting)

        if (userReq != undefined && userReq != undefined) {
            correct = login(userReq, passReq, true)
                .then(() => {
                    setTimeout(() => {
                        if (none) {
                            return false
                        } else {
                            return
                        }
                    }, 500);
                })
        }

        let dateMoon = dateToSend

        if (dateMoon == "") {
            let month;
            let day;
            let now = new Date()
            if ((now.getMonth() + 1) >= 1 && (now.getMonth() + 1) <= 9) {
                month = "0" + (now.getMonth() + 1)
            } else {
                month = (now.getMonth() + 1)
            }
            if (now.getDate() >= 1 && now.getDate() <= 9) {
                day = "0" + now.getDate()
            } else {
                day = now.getDate()
            }
            dateMoon = now.getFullYear() + "-" + (month) + "-" + day
        }
        if (debugging == null) {
            return fetch(
                'https://' + addr + '/api/moon?lat=' + lat + '&lon=' + long + "&date=" + dateMoon,
                { method: 'GET' }
            )
                .then(response => response.text())
                .then(finalData => {
                    let riseset = JSON.parse(finalData)
                    let rise = new Date(riseset.moonrise.time || 0)
                    let set = new Date(riseset.moonset.time || 0)
                    return [(rise.getTime() / 1000).toFixed(0) || 0, (set.getTime() / 1000).toFixed(0) || 0, riseset.phase || 0]
                })
                .catch(error => console.log('error:', error))
                .then(moon => {
                    if (moon[0] != undefined) {
                        if (moon.length >= 3) {
                            return isWeatherGood(lat, long, dateToSend, true, moon).then(() => {
                                if (!home.startsWith('/home/runner/')) {
                                    return fetch(
                                        'http://' + ip + ':8001/astro?lat=' + lat + '&long=' + long + '&tol=' + tol + '&tolMag=' + tolMag + '&type=' + types + "&date=" + dateToSend + "&weatherTime=" + searchDate + "&moonrise=" + moon[0] + "&moonset=" + moon[1] + "&phase=" + moon[2],
                                        { method: 'GET' }
                                    )
                                        .then(response => response.text())
                                        .then(async finalData => {
                                            res.writeHead(200, { 'Content-Type': 'text/json' });
                                            if (theLoginRes == "suc") {
                                                const docRef = db.collection('users').doc(userReq);
                                                let doc = await docRef.get()
                                                if (doc.data().fav != null) {
                                                    let raw = JSON.parse(finalData)
                                                    let theFinal = []
                                                    let favArr = doc.data().fav
                                                    for (let i = 0; i <= favArr.length - 1; i++) {
                                                        let favArr2 = favArr[i].split('')
                                                        if (favArr2.includes("I")) {
                                                            favArr2 = favArr2.join('').split("IC")
                                                            if (favArr2[1].length > 3) {
                                                                favArr2[0] = "I"
                                                                favArr[i] = favArr2.join('')
                                                            } else {
                                                                favArr2[0] = "I "
                                                                favArr[i] = favArr2.join('')
                                                            }
                                                        } else {
                                                            favArr[i] = favArr[i].substring(3)
                                                        }
                                                    }
                                                    for (let i = 0; i <= raw.length - 1; i++) {
                                                        for (let y = 0; y <= favArr.length - 1; y++) {
                                                            if (raw[i][0] == favArr[y]) {
                                                                theFinal.push(raw[i])
                                                            }
                                                        }
                                                    }
                                                    res.write(JSON.stringify([finalData, theFinal]));
                                                    res.end();
                                                } else {
                                                    res.write(JSON.stringify([finalData, []]));
                                                    res.end();
                                                }
                                            } else {
                                                res.write(JSON.stringify([finalData, []]));
                                                res.end();
                                            }
                                        })
                                        .catch(error => console.log('error:', error));
                                } else {
                                    return fetch(
                                        'http://127.0.0.1:8001/astro?lat=' + lat + '&long=' + long + '&tol=' + tol + '&tolMag=' + tolMag + '&type=' + types + "&date=" + dateToSend,
                                        { method: 'GET' }
                                    )
                                        .then(response => response.text())
                                        .then(finalData => {
                                            res.writeHead(200, { 'Content-Type': 'text/json' });
                                            finalData.join(",")
                                            res.write(finalData);
                                            res.end();
                                        })
                                        .catch(error => console.log('error:', error));

                                }
                            });
                        } else {
                            console.log("moon error")
                        }
                    } else {
                        console.log("moon error")
                    }
                })
        } else {
            console.log("Debugging")
            if (!home.startsWith('/home/runner/')) {
                return fetch(
                    'http://' + ip + ':8001/astro?lat=' + lat + '&long=' + long + '&tol=' + tol + '&tolMag=' + tolMag + '&type=' + types + "&date=" + dateToSend + "&weatherTime=" + 0 + "&moonrise=" + 0 + "&moonset=" + 0 + "&phase=" + 0,
                    { method: 'GET' }
                )
                    .then(response => response.text())
                    .then(async finalData => {
                        res.writeHead(200, { 'Content-Type': 'text/json' });
                        if (theLoginRes == "suc") {
                            const docRef = db.collection('users').doc(userReq);
                            let doc = await docRef.get()
                            if (doc.data().fav != null) {
                                let raw = JSON.parse(finalData)
                                let theFinal = []
                                let favArr = doc.data().fav
                                for (let i = 0; i <= favArr.length - 1; i++) {
                                    let favArr2 = favArr[i].split('')
                                    if (favArr2.includes("I")) {
                                        favArr2 = favArr2.join('').split("IC")
                                        if (favArr2[1].length > 3) {
                                            favArr2[0] = "I"
                                            favArr[i] = favArr2.join('')
                                        } else {
                                            favArr2[0] = "I "
                                            favArr[i] = favArr2.join('')
                                        }
                                    } else {
                                        favArr[i] = favArr[i].substring(3)
                                    }
                                }
                                for (let i = 0; i <= raw.length - 1; i++) {
                                    for (let y = 0; y <= favArr.length - 1; y++) {
                                        if (raw[i][0] == favArr[y]) {
                                            theFinal.push(raw[i])
                                        }
                                    }
                                }
                                res.write(JSON.stringify([finalData, theFinal]));
                                res.end();
                            } else {
                                res.write(JSON.stringify([finalData, []]));
                                res.end();
                            }
                        } else {
                            res.write(JSON.stringify([finalData, []]));
                            res.end();
                        }
                    })
                    .catch(error => console.log('error:', error));
            } else {
                return fetch(
                    'http://127.0.0.1:8001/astro?lat=' + lat + '&long=' + long + '&tol=' + tol + '&tolMag=' + tolMag + '&type=' + types + "&date=" + dateToSend,
                    { method: 'GET' }
                )
                    .then(response => response.text())
                    .then(finalData => {
                        res.writeHead(200, { 'Content-Type': 'text/json' });
                        finalData.join(",")
                        res.write(finalData);
                        res.end();
                    })
                    .catch(error => console.log('error:', error));

            }
        }

    }
    if (method == 'GET' && surl.pathname == '/astro') {
        return astro(surl.searchParams)
    }
    const score = (searchParams) => {
        return console.log(astro(searchParams)).then(() => {return astro(searchParams)})
    }
    if (method == 'GET' && surl.pathname == '/score') {
        return score(surl.searchParams)
    }
    if (method == 'GET' && surl.pathname == '/api/scrambler') {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        })
        req.on('end', () => {
            try {
                JSON.parse(data)
            } catch (e) {
                res.write(JSON.stringify({ error: "Invalid JSON format" }))
                res.end();
                return;
            }
            if (JSON.parse(data).text == undefined || JSON.parse(data).text == null) {
                res.write(JSON.stringify({ error: "invalid input format" }))
                res.end();
            } else if (JSON.parse(data).text.length > 500000) {
                res.write(JSON.stringify({ error: "input to large" }))
                res.end();
            } else {
                res.write(JSON.stringify({ text: unscrambler(JSON.parse(data).text) }))
                res.end();
            }
        })
        return;
    }

    if (method == 'GET' && surl.pathname == '/api/randomcase') {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        })
        req.on('end', () => {
            try {
                JSON.parse(data)
            } catch (e) {
                res.write(JSON.stringify({ error: "Invalid JSON format" }))
                res.end();
                return;
            }
            if (JSON.parse(data).text == undefined || JSON.parse(data).text == null) {
                res.write(JSON.stringify({ error: "invalid input format" }))
                res.end();
            } else if (JSON.parse(data).text.length > 500000) {
                res.write(JSON.stringify({ error: "input to large" }))
                res.end();
            } else {
                res.write(JSON.stringify({ text: randomCase(JSON.parse(data).text) }))
                res.end();
            }
        })
        return;
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

    let userFromEmail;

    const forgot = async (email) => {
        let user;
        if (email != undefined) {
            const snapshot = await db.collection('users').get();
            snapshot.forEach((doc) => {
                if (doc.data().email == email) {
                    user = doc.id
                }
            });
            userFromEmail = user
            const docRef = db.collection('users').doc(user);
            if (docRef != undefined) {
                let currentDate = new Date()
                currentDate.setMinutes(currentDate.getMinutes() + 30)
                return await docRef.update({
                    token: makeid(40),
                    tokenEx: currentDate
                })
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write("nouser");
                res.end();
                return
            }
        }
    }

    if (method == 'POST' && surl.pathname == '/forgot') {
        let searchParams = surl.searchParams
        let email = searchParams.get('email')

        return forgot(email).then(async () => {
            const docRef = db.collection('users').doc(userFromEmail);
            let doc = await docRef.get()
            var mailOptions = {
                from: '"astronomycalculator" <astronomycalculator@outlook.com>',
                to: doc.data().email,
                subject: 'Reset Password ',
                html: 'Click <a href="https://' + addr + '/forgotReset?token=' + doc.data().token + '&user=' + userFromEmail + '">' + 'https://' + addr + '/api/forgot?token=' + doc.data().token + '&user=' + userFromEmail + '</a> to reset password'
            }
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    return console.log(error);
                }
            })
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("suc");
            res.end();
            return
        })
    }

    const forgotChecker = async (token, user, pass) => {
        if (user != undefined && token.length == 40 && pass != undefined) {
            const docRef = db.collection('users').doc(user);
            let doc = await docRef.get()
            let timeNow = new Date()
            let tokenEx = doc.data().tokenEx.toDate()
            if (tokenEx > timeNow && token == doc.data().token) {
                let salt = await bcrypt.genSalt()
                let hashedPass = await bcrypt.hash(pass, salt)
                return await docRef.update({
                    pass: hashedPass
                }).then(() => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(JSON.stringify({ res: "suc" }));
                    res.end();
                }).then(async () => {
                    return await docRef.update({
                        token: null,
                        tokenEx: null
                    })
                })
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(JSON.stringify({ res: "err" }));
                res.end();
            }
        }
    }

    if (method == 'GET' && surl.pathname == '/api/forgot') {
        let searchParams = surl.searchParams
        let token = searchParams.get('token')
        let user = searchParams.get('user')
        let pass = searchParams.get('pass')

        return forgotChecker(token, user, pass)
    }

    if (!no404) {
        fs.readFile(home + delimiter + 'notfound.html', function (err, html) {
            if (err) {
                console.log(err);
                return;
            }
            let date = new Date();
            let write = (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + req.socket.remoteAddress + ":" + " 404 :   " + surl.pathname;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.statusCode = 404;
            res.write(html);
            res.end();
            logging(testing, write, req)
        });
        return;
    }
}

const server = home.startsWith('/home/runner/') ?
    http.createServer(myServer).listen(8000, '127.0.0.1', () => {
        testing = true;
        console.log(`Server running`);
        curlTest("/")
        curlTest("/MineSweeper")
        curlTest("/astroTargetFinder")
        curlTest("/script.js")
        curlTest("/style.css")
        curlTest("/astroTargetFinder/script.js")
        curlTest("/astroTargetFinder/style.css")
        curlTest("/favicon.ico")
        curlTest("/astroTargetFinder/ngc2000Final.txt")
        curlTest("/404.css")
        curlTest("/Images/NGC4494.jpg")
        curlTest("/MineSweeper/MineSweeperWWW/css/index.css")
        setInterval(() => { if (finished == 12) process.exit(); }, 1000)
    }) :
    https.createServer({
        key: fs.readFileSync(home + delimiter + 'privkeyKey.pem'),
        cert: fs.readFileSync(home + delimiter + 'fullchainCert.pem')
    }, myServer).listen(ip == '192.168.1.88' ? 8000 : 443, ip, () => {
        console.log(`Server running`);
    });

function errorLog(testing, err, id) {
    if (!testing) {
        let date = new Date();
        fs.appendFile(home + delimiter + 'Logs' + delimiter + 'error.txt', "\n" + (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + "::::::::" + err + " ID=" + id, (err) => {
            if (err) console.log(err);
            return;
        })
    } else {
        console.log(err)
    }
}

function logging(testing, write, req, amTesting) {
    if (!testing && amTesting != true) {
        if (req.headers['user-agent'] != undefined) {
            fs.appendFile(home + delimiter + 'Logs' + delimiter + 'log' + fileCount + '.txt', "\n" + write + (req.headers['user-agent'].includes("Android") ? "::android" : ""), (err) => {
                if (err) console.log(err);

                return;
            })
        } else {
            fs.appendFile(home + delimiter + 'Logs' + delimiter + 'log' + fileCount + '.txt', "\n" + write + "::header_ERR", (err) => {
                if (err) console.log(err);

                return;
            })
        }
    }
}
let finished = 0;
function curlTest(path) {
    child.exec('curl http://127.0.0.1:8000' + path, (err, stdout, stderr) => {
        finished++;
        if (!stdout.startsWith("<!-- 404 -->") && err == null) {
            console.log("Geting \'" + path + "\': Success")
        } else {
            throw stderr;
        }
        return;
    });
}

function unscrambler(input) {
    let superFinal = [];
    let tempArr = input.trim().split(" ");
    tempArr = tempArr.join(' ');
    tempArr = tempArr.split("");
    let z = -2;
    while (true) {
        let out = [];
        for (let i = z + 2; i <= tempArr.length - 1; i++) {
            if (tempArr[i] == " ") {
                break;
            } else {
                out.push(tempArr[i]);
            }
        }
        let finished = [];
        let y = 1
        for (let i = out.length - 1; i >= 1; i--) {
            finished[y] = out[i]
            y++
        }
        finished[0] = out[0];
        for (let i = 0; i <= finished.length - 1; i++) {
            if (i == 0) {
                superFinal.push(" ", finished[i]);
            } else {
                superFinal.push(finished[i])
            }
        }
        if (superFinal.length == tempArr.length + 1) {
            return superFinal.reverse().join('');
        } else {
            z += out.length + 1;
        }
    }
}

function randomCase(input) {
    let rand = Math.round(Math.random() * 2);
    let inputArry = input.split("");
    for (let i = 0; i <= inputArry.length - 1; i++) {
        if (rand == 1) {
            inputArry[i] = inputArry[i].toUpperCase();
            rand = Math.round(Math.random() * 2);
        } else {
            rand = Math.round(Math.random() * 2);
        }
    }
    return inputArry.join('');
}

function compareSecondColumn(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
}

function serveFile(method, path, name, contentType, surl, res, req) {
    if (method == 'GET' && surl.pathname == path) {
        fs.readFile(home + delimiter + name, function (err, html) {
            if (err) {
                console.log(err);
                errorLog(testing, err, name)
                return true;
            }
            if (surl.pathname == "/") {
                let date = new Date();
                let write = (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "::" + "_______" + req.socket.remoteAddress + " Home" + "_______";
                logging(testing, write, req)
            } else if (surl.pathname == "/astroTargetFinder") {
                let date = new Date();
                let write = (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "::" + "_______" + req.socket.remoteAddress + " Astro" + "_______";
                logging(testing, write, req)
            } else if (surl.pathname == "/MineSweeper") {
                let date = new Date();
                let write = (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "::" + "_______" + req.socket.remoteAddress + " Minesweeper" + "_______";
                logging(testing, write, req)
            }
            res.writeHead(200, { 'Content-Type': contentType });
            res.write(html);
            res.end();
        });
        return true;
    }
    return false
}

function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}