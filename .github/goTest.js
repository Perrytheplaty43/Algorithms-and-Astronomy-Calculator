import fetch from "node-fetch";
globalThis.fetch = fetch

import path from "path";
globalThis.path = path

import child from 'child_process';
globalThis.child = child

let finished = false

console.log("Starting Go server...")
child.exec('go run /home/runner/work/Algorithms-and-Astronomy-Calculator/Algorithms-and-Astronomy-Calculator/Go/server.go test', (err, stdout, stderr) => {
    if (err) {
        throw err
    }
    console.log(stdout)
    finished = true
    return;
});

setInterval(() => { if(finished) process.exit(); }, 1000)