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
    console.log("Stoping Go server...")
    return;
});

setInterval(() => { curlTest() }, 5000)

function curlTest() {
    child.exec('curl -H "Accept: test/json" "http://127.0.0.1:8000/astro?lat=47.740372&long=-122.222695&tol=70&tolMag=10&type=Gx,OC,Gb,Nb,Pl,CpN,Ast,Kt,TS,DS,SS,Q,U,D,PD&date=2100-10-16"', (err, stdout, stderr) => {
        finished = true;
        console.log("Geting algorithms__")
        if (!stdout.startsWith("<!-- 404 -->") && err == null) {
            console.log("Geting algorithms: Success")
        } else {
            throw stderr;
        }
        console.log(JSON.parse(stdout))
        return;
    });
}

setInterval(() => { if(finished) process.exit(); }, 1000)