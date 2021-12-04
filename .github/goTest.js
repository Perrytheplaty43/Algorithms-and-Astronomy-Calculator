import fetch from "node-fetch";
globalThis.fetch = fetch

import path from "path";
globalThis.path = path

import child from 'child_process';
globalThis.child = child

let finished = false

const expectedOutput = "[[2281 75.7878970437577 5 Open star cluster Auriga] [2403 71.88227858380942 8 Galaxy Camelopardalis] [2683 72.56397122427474 9 Galaxy Lynx] [2841 76.28676890208362 9 Galaxy Ursa Major]]"

console.log("Starting Go server...")
child.exec('go run /home/runner/work/Algorithms-and-Astronomy-Calculator/Algorithms-and-Astronomy-Calculator/Go/server.go test', (err, stdout, stderr) => {
    if (err) {
        throw err
    }
    if (stdout == expectedOutput) {
        console.log("Success")
    } else {
        throw stdout
    }
    finished = true
    return;
});

setInterval(() => { if(finished) process.exit(); }, 1000)