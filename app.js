import fetch from "node-fetch";
globalThis.fetch = fetch

import https from "https";
globalThis.https = https

import http from "http";
globalThis.http = http

import fs from "fs";
globalThis.fs = fs

import path from "path";
globalThis.path = path

import child from 'child_process';
globalThis.child = child

import dotenv from 'dotenv'
dotenv.config()

const delimiter = "/";

let testing = false;
const home = process.cwd()

const frameworkPath1 = "/MineSweeper/MineSweeperWWW/_framework";
const frameworkPath2 = "/_framework";
let fileCount;

let KEY = process.env.KEY
let ip = '10.138.0.3';
if (home.startsWith('/home/pi')) {
    ip = '192.168.1.88';
}

if (!home.startsWith('/home/runner')) {
    fs.readFile(home + delimiter + 'Logs' + delimiter + 'fileCount.txt', function (err, html) {
        fileCount = parseInt(html)
    })
}

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
    if (method == 'GET' && surl.pathname == '/app.js' || surl.pathname == '/') {
        fs.readFile(home + delimiter + 'index.html', function (err, html) {
            if (err) {
                console.log(err);
                errorLog(testing, err, "1")
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            let date = new Date();
            let write = (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "::" + "_______" + req.socket.remoteAddress + " Home" + "_______";
            res.write(html);
            res.end();
            logging(testing, write)
        });
        return;
    }
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
    if (method == 'GET' && surl.pathname == '/style.css') {
        fs.readFile(home + delimiter + 'style.css', function (err, html) {
            if (err) {
                console.log(err);
                errorLog(testing, err, "2")
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.write(html);
            res.end();
        });
        return;
    }
    if (method == 'GET' && surl.pathname == '/script.js') {
        fs.readFile(home + delimiter + 'script.js', function (err, html) {
            if (err) {
                console.log(err);
                errorLog(testing, err, "3")
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/js' });
            res.write(html);
            res.end();
        });
        return;
    }
    if (method == 'GET' && surl.pathname == '/favicon.ico') {
        fs.readFile(home + delimiter + 'favicon.ico', function (err, html) {
            if (err) {
                console.log(err);
                errorLog(testing, err, "4")
                return;
            }
            res.writeHead(200, { 'Content-Type': 'image/x-icon' });
            res.write(html);
            res.end();
        });
        return;
    }
    if (method == 'GET' && surl.pathname == '/astroTargetFinder') {
        fs.readFile(home + delimiter + 'astroTargetFinder' + delimiter + 'index.html', function (err, html) {
            if (err) {
                console.log(err);
                errorLog(testing, err, "5")
                return;
            }
            let date = new Date();
            let write = (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "::" + "_______" + req.socket.remoteAddress + " Astro" + "_______";
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(html);
            res.end();
            logging(testing, write)
        });
        return;
    }
    if (method == 'GET' && surl.pathname == '/astroTargetFinder/script.js') {
        fs.readFile(home + delimiter + 'astroTargetFinder' + delimiter + 'script.js', function (err, html) {
            if (err) {
                console.log(err);
                errorLog(testing, err, "6")
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/js' });
            res.write(html);
            res.end();
        });
        return;
    }
    if (method == 'GET' && surl.pathname == '/astroTargetFinder/style.css') {
        fs.readFile(home + delimiter + 'astroTargetFinder' + delimiter + 'style.css', function (err, html) {
            if (err) {
                console.log(err);
                errorLog(testing, err, "7")
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.write(html);
            res.end();
        });
        return;
    }
    if (method == 'GET' && surl.pathname == '/astroTargetFinder/ngc2000Final.txt') {
        fs.readFile(home + delimiter + 'astroTargetFinder' + delimiter + 'ngc2000Final.txt', function (err, html) {
            if (err) {
                console.log(err);
                errorLog(testing, err, "8")
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/txt' });
            res.write(html);
            res.end();
        });
        return;
    }
    if (method == 'GET' && surl.pathname == '/enterInput.html') {
        fs.readFile(home + delimiter + 'enterInput.html', function (err, html) {
            if (err) {
                console.log(err);
                errorLog(testing, err, "9")
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(html);
            res.end();
        });
        return;
    }
    if (method == 'GET' && surl.pathname == '/404.css') {
        fs.readFile(home + delimiter + '404.css', function (err, html) {
            if (err) {
                console.log(err);
                errorLog(testing, err, "10")
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.write(html);
            res.end();
        });
        return;
    }
    if (method == 'GET' && surl.pathname.search(".jpg") !== -1) {
        let path = surl.pathname.split("");
        let id = [];
        var i;
        for (i = surl.pathname.search(".jpg") - 1; i > 0; i--) {
            if (path[i] == "/") {
                break;
            } else {
                id.push(path[i]);
            }
        }
        id = id.reverse();
        let name = id.join("")
        fs.readFile(home + delimiter + 'Images' + delimiter + name + '.jpg', function (err, html) {
            if (err) {
                console.log(err);
                errorLog(testing, err, "11")
                return;
            }
            let date = new Date();
            let write = (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":: " + req.socket.remoteAddress + ":" + " " + name;
            res.writeHead(200, { 'Content-Type': 'image/jpg' });
            res.write(html);
            res.end();
            logging(testing, write)
        });
        return;
    }
    if (method == 'GET' && surl.pathname == '/MineSweeper') {
        fs.readFile(home + delimiter + 'MineSweeper' + delimiter + 'MineSweeperWWW' + delimiter + 'index.html', function (err, html) {
            if (err) {
                console.log(err);
                errorLog(testing, err, "12")
                return;
            }
            let date = new Date();
            let write = (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "::" + "_______" + req.socket.remoteAddress + " Minesweeper" + "_______";
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(html);
            res.end();
            logging(testing, write)
        });
        return;
    }
    if (method == 'GET' && surl.pathname == '/MineSweeper/MineSweeperWWW/css/index.css') {
        fs.readFile(home + delimiter + 'MineSweeper' + delimiter + 'MineSweeperWWW' + delimiter + 'css' + delimiter + 'index.css', function (err, html) {
            if (err) {
                console.log(err);
                errorLog(testing, err, "13")
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.write(html);
            res.end();
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
    function save(inputs, timesUNIX) {
        console.log("indi")
        theJSON = inputs
        theJSON = JSON.parse(theJSON)
        let clouds = [];
        for (let i = 0; i <= theJSON.list.length - 1; i++) {
            if (timesUNIX[0] <= theJSON.list[i].dt) {
                if (timesUNIX[1] <= theJSON.list[i].dt) {
                    break;
                }
                clouds.push([theJSON.list[i].dt, theJSON.list[i].clouds.all])
            }
        }
        clouds = clouds.sort(compareSecondColumn)
        let goodWeather = []
        let bad = false
        for (let i = 0; i <= clouds.length - 1; i++) {
            if (clouds[clouds.length - 1][1] < 10) {
                goodWeather.push(clouds[i])
            }
            if (clouds[clouds.length - 1][1] > 10 || ((() => { let turning = 0; for (let i = 0; i <= clouds.length - 1; i++) { turning += clouds[i][1]; } return turning })()) / clouds.length > 30) {
                bad = true
            }
        }
        if (bad) {
            searchDate = goodWeather[Math.floor((goodWeather.length - 1) / 2)]
        } else {
            searchDate = 0
        }
        if (clouds[clouds.length - 1][1] < 10) {
            return "Perfect";
        } else if (((() => { let turning = 0; for (let i = 0; i <= clouds.length - 1; i++) { turning += clouds[i][1]; } return turning })()) / clouds.length < 30) {
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
    const isWeatherGood = async (lat, long, reqDate) => {
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
        console.log("isWeatherGood 1")
        return fetch(
            'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + long + '&APPID=' + KEY,
            { method: 'GET' }
        )
            .then(response => {
                console.log("isWeatherGood 1.5")

                return response.text();
            })
            .then(r => {
                console.log("isWeatherGood 2")
                let saved = save(r, timesUNIX)
                res.write(JSON.stringify({ conditions: saved }))
                res.end();
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
    let no404 = false;
    if (method == 'GET' && surl.pathname == '/api/weather') {
        no404 = true;
        let searchParams = surl.searchParams
        let lat = searchParams.get('lat')
        let long = searchParams.get('lon')
        let date = searchParams.get('date')
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        isWeatherGood(lat, long, date)
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
        logging(testing, write)
        return;
    }
    const astro = async (searchParams) => {
        let lat = searchParams.get('lat')
        let long = searchParams.get('long')
        let tol = searchParams.get('tol')
        let tolMag = searchParams.get('tolMag')
        let types = searchParams.get('type')
        let dateToSend = searchParams.get('date')
        console.log("searchDate 1", searchDate)
        await isWeatherGood(lat, long, dateToSend)
        console.log("searchDate 2", searchDate)
       if (!home.startsWith('/home/runner/')) {
            fetch(
                'http://' + ip + ':8001/astro?lat=' + lat + '&long=' + long + '&tol=' + tol + '&tolMag=' + tolMag + '&type=' + types + "&date=" + dateToSend + "&weatherTime=" + searchDate,
                { method: 'GET' }
            )
                .then(response => response.text())
                .then(finalData => {
                    res.writeHead(200, { 'Content-Type': 'text/json' });
                    res.write(finalData);
                    res.end();
                })
                .catch(error => console.log('error:', error));
            return;
        } else {
            fetch(
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
            return;
        }
    }
    if (method == 'GET' && surl.pathname == '/astro') {
        astro(surl.searchParams)
        while (true) {
            if (searchDate != undefined) {
                return;
            }
        }
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

    if (!no404) {
        fs.readFile(home + delimiter + 'notfound.html', function (err, html) {
            if (err) {
                console.log(err);
                return;
            }
            let date = new Date();
            let write = (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + req.socket.remoteAddress + ":" + " 404";
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.statusCode = 404;
            res.write(html);
            res.end();
            logging(testing, write)
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
        fs.appendFile(home + delimiter + 'Logs' + delimiter + 'error.txt', "\n" + (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + req.socket.remoteAddress + "::::::::" + err + " ID=" + id, (err) => {
            if (err) console.log(err);
            return;
        })
    } else {
        throw err
    }
}

function logging(testing, write) {
    if (!testing) {
        fs.appendFile(home + delimiter + 'Logs' + delimiter + 'log' + fileCount + '.txt', "\n" + write, (err) => {
            if (err) console.log(err);

            return;
        })
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