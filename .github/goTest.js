import fetch from "node-fetch";
globalThis.fetch = fetch

import path from "path";
globalThis.path = path

import child from 'child_process';
globalThis.child = child

let finished = false

const expectedOutput = "[[2281 76 5 Open star cluster Auriga] [2403 72 8 Galaxy Camelopardalis] [2683 73 9 Galaxy Lynx] [2841 76 9 Galaxy Ursa Major]]"
const expectedOutput2 = "[[2281 76 5 Open star cluster Auriga] [2403 72 8 Galaxy Camelopardalis] [2841 76 9 Galaxy Ursa Major] [2683 73 9 Galaxy Lynx]]"

console.log("Starting Go server...")
child.exec('go run /home/runner/work/Algorithms-and-Astronomy-Calculator/Algorithms-and-Astronomy-Calculator/Go/server.go test', (err, stdout, stderr) => {
    if (err) {
        throw err
    }
    if (stdout == expectedOutput || stdout == expectedOutput2) {
        console.log("Success")
    } else {
        throw stdout
    }
    finished = true
    return;
});

setInterval(() => { if(finished) process.exit(); }, 1000)