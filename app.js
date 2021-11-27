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

const delimiter = "/";
const __dirname = path.resolve();
//const delimiter = "\\";

const home = process.cwd()
//const home = "C:\\"
const frameworkPath1 = "/MineSweeper/MineSweeperWWW/_framework";
const frameworkPath2 = "/_framework";

//const hostname = '10.172.195.3';

let lineCount;
fs.readFile(home + delimiter + 'Logs' + delimiter + 'lineCount.txt', function (err, html) {
    lineCount = parseInt(html)
})
let fileCount = 0;

function myServer(req, res) {
    const { method, url } = req;
    fs.writeFile(home + delimiter + 'Logs' + delimiter + 'lineCount.txt', lineCount.toString(), err => {
        if (err) {
            console.log(err);
            fs.appendFile(home + delimiter + 'Logs' + delimiter + 'error.txt', "\n" + (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + req.socket.remoteAddress + "::::::::" + err, (err) => {
                if (err) console.log(err);
                return;
            })
            return;
        }
    })
    if (lineCount > 500) {
        fileCount++;
        fs.writeFile(home + delimiter + 'Logs' + delimiter + 'log' + fileCount + '.txt', (err) => {
            if (err) {
                console.log(err);
                fs.appendFile(home + delimiter + 'Logs' + delimiter + 'error.txt', "\n" + (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + req.socket.remoteAddress + "::::::::" + err, (err) => {
                    if (err) console.log(err);
                    return;
                })
                return;
            }
        })
        lineCount = 0;
    }
    //const surl = new URL(url, 'http://10.172.195.3');
    const surl = new URL(url, 'https://192.168.1.88/');
    let date = new Date();
    if (req.socket.remoteAddress == "98.232.109.230") console.log((parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "::" + " Rish visit")
    if (method == 'GET' && surl.pathname == '/app.js' || surl.pathname == '/') {
        fs.readFile(home + delimiter + 'index.html', function (err, html) {
            if (err) {
                console.log(err);
                fs.appendFile(home + delimiter + 'Logs' + delimiter + 'error.txt', "\n" + (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + req.socket.remoteAddress + "::::::::" + err, (err) => {
                    if (err) console.log(err);
                    return;
                })
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            let date = new Date();
            let write = (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "::" + "_______" + req.socket.remoteAddress + " Home" + "_______";
            res.write(html);
            res.end();
            fs.appendFile(home + delimiter + 'Logs' + delimiter + 'log' + fileCount + '.txt', "\n" + write, (err) => {
                if (err) console.log(err);
                lineCount++;
                return;
            })
        });
        return;
    }
    if (method == 'GET' && surl.pathname == '/style.css') {
        fs.readFile(home + delimiter + 'style.css', function (err, html) {
            if (err) {
                console.log(err);
                fs.appendFile(home + delimiter + 'Logs' + delimiter + 'error.txt', "\n" + (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + req.socket.remoteAddress + "::::::::" + err, (err) => {
                    if (err) console.log(err);
                    return;
                })
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
                fs.appendFile(home + delimiter + 'Logs' + delimiter + 'error.txt', "\n" + (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + req.socket.remoteAddress + "::::::::" + err, (err) => {
                    if (err) console.log(err);
                    return;
                })
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
                fs.appendFile(home + delimiter + 'Logs' + delimiter + 'error.txt', "\n" + (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + req.socket.remoteAddress + "::::::::" + err, (err) => {
                    if (err) console.log(err);
                    return;
                })
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
                fs.appendFile(home + delimiter + 'Logs' + delimiter + 'error.txt', "\n" + (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + req.socket.remoteAddress + "::::::::" + err, (err) => {
                    if (err) console.log(err);
                    return;
                })
                return;
            }
            let date = new Date();
            let write = (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "::" + "_______" + req.socket.remoteAddress + " Astro" + "_______";
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(html);
            res.end();
            fs.appendFile(home + delimiter + 'Logs' + delimiter + 'log' + fileCount + '.txt', "\n" + write, (err) => {
                if (err) console.log(err);
                lineCount++;
                return;
            })
        });
        return;
    }
    if (method == 'GET' && surl.pathname == '/astroTargetFinder/script.js') {
        fs.readFile(home + delimiter + 'astroTargetFinder' + delimiter + 'script.js', function (err, html) {
            if (err) {
                console.log(err);
                fs.appendFile(home + delimiter + 'Logs' + delimiter + 'error.txt', "\n" + (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + req.socket.remoteAddress + "::::::::" + err, (err) => {
                    if (err) console.log(err);
                    return;
                })
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
                fs.appendFile(home + delimiter + 'Logs' + delimiter + 'error.txt', "\n" + (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + req.socket.remoteAddress + "::::::::" + err, (err) => {
                    if (err) console.log(err);
                    return;
                })
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
                fs.appendFile(home + delimiter + 'Logs' + delimiter + 'error.txt', "\n" + (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + req.socket.remoteAddress + "::::::::" + err, (err) => {
                    if (err) console.log(err);
                    return;
                })
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
                fs.appendFile(home + delimiter + 'Logs' + delimiter + 'error.txt', "\n" + (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + req.socket.remoteAddress + "::::::::" + err, (err) => {
                    if (err) console.log(err);
                    return;
                })
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
                fs.appendFile(home + delimiter + 'Logs' + delimiter + 'error.txt', "\n" + (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + req.socket.remoteAddress + "::::::::" + err, (err) => {
                    if (err) console.log(err);
                    return;
                })
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
                fs.appendFile(home + delimiter + 'Logs' + delimiter + 'error.txt', "\n" + (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + req.socket.remoteAddress + "::::::::" + err, (err) => {
                    if (err) console.log(err);
                    return;
                })
                return;
            }
            let date = new Date();
            let write = (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":: " + req.socket.remoteAddress + ":" + " " + name;
            res.writeHead(200, { 'Content-Type': 'image/jpg' });
            res.write(html);
            res.end();
            fs.appendFile(home + delimiter + 'Logs' + delimiter + 'log' + fileCount + '.txt', "\n" + write, (err) => {
                if (err) console.log(err);
                lineCount++;
                return;
            })
        });
        return;
    }
    if (method == 'GET' && surl.pathname == '/MineSweeper') {
        fs.readFile(home + delimiter + 'MineSweeper' + delimiter + 'MineSweeperWWW' + delimiter + 'index.html', function (err, html) {
            if (err) {
                console.log(err);
                fs.appendFile(home + delimiter + 'Logs' + delimiter + 'error.txt', "\n" + (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + req.socket.remoteAddress + "::::::::" + err, (err) => {
                    if (err) console.log(err);
                    return;
                })
                return;
            }
            let date = new Date();
            let write = (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "::" + "_______" + req.socket.remoteAddress + " Minesweeper" + "_______";
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(html);
            res.end();
            fs.appendFile(home + delimiter + 'Logs' + delimiter + 'log' + fileCount + '.txt', "\n" + write, (err) => {
                if (err) console.log(err);
                lineCount++;
                return;
            })
        });
        return;
    }
    if (method == 'GET' && surl.pathname == '/MineSweeper/MineSweeperWWW/css/index.css') {
        fs.readFile(home + delimiter + 'MineSweeper' + delimiter + 'MineSweeperWWW' + delimiter + 'css' + delimiter + 'index.css', function (err, html) {
            if (err) {
                console.log(err);
                fs.appendFile(home + delimiter + 'Logs' + delimiter + 'error.txt', "\n" + (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + req.socket.remoteAddress + "::::::::" + err, (err) => {
                    if (err) console.log(err);
                    return;
                })
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
                fs.appendFile(home + delimiter + 'Logs' + delimiter + 'error.txt', "\n" + (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + req.socket.remoteAddress + "::::::::" + err, (err) => {
                    if (err) console.log(err);
                    return;
                })
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
                fs.appendFile(home + delimiter + 'Logs' + delimiter + 'error.txt', "\n" + (parseInt(date.getMonth()) + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + req.socket.remoteAddress + "::::::::" + err, (err) => {
                    if (err) console.log(err);
                    return;
                })
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
    if (method == 'GET' && surl.pathname == '/astro') {
        let searchParams = surl.searchParams
        let lat = searchParams.get('lat')
        let long = searchParams.get('long')
        let tol = searchParams.get('tol')
        let tolMag = searchParams.get('tolMag')
        let types = searchParams.get('type')

        //console.log(lat, long)
        fetch(
            'http://192.168.1.88:8001/astro?lat=' + lat + '&long=' + long + '&tol=' + tol + '&tolMag=' + tolMag + '&type=' + types,
            { method: 'GET' }
        )
            .then(response => response.text())
            .then(finalData => {
                //console.log(finalData)
                res.writeHead(200, { 'Content-Type': 'text/json' });
                res.write(finalData);
                res.end();
            })
            .catch(error => console.log('error:', error));
        return;
    }
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
        fs.appendFile(home + delimiter + 'Logs' + delimiter + 'log' + fileCount + '.txt', "\n" + write, (err) => {
            if (err) console.log(err);
            lineCount++;
            return;
        })
    });
    return;
}


const server = home.startsWith('/home/runner/') ?
    http.createServer(myServer).listen(8000, '127.0.0.1', () => {
        console.log(`Server running`);
        process.exit();
    }) :
    https.createServer({
        key: fs.readFileSync(home + delimiter + 'privkeyKey.pem'),
        cert: fs.readFileSync(home + delimiter + 'fullchainCert.pem')
    }, myServer).listen(8000, '192.168.1.88', () => {
        console.log(`Server running`);
    });
