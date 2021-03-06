import fetch from "node-fetch";
globalThis.fetch = fetch

import path from "path";
globalThis.path = path

import child from 'child_process';
globalThis.child = child

let finished = false

const expectedOutput = "[[224 80 3 Galaxy Andromeda] [884 77 4 Open star cluster Perseus] [869 78 4 Open star cluster Perseus] [7686 71 5 Open star cluster Andromeda] [598 73 5 Galaxy Triangulum] [1039 76 5 Open star cluster Perseus] [752 78 5 Open star cluster Andromeda] [1027 72 6 Open star cluster Cassiopeia] [896 74 6 Bright emission or reflection nebula Cassiopeia] [7789 74 6 Open star cluster Cassiopeia] [129 75 6 Open star cluster Cassiopeia] [654 76 6 Open star cluster Cassiopeia] [457 79 6 Open star cluster Cassiopeia] [225 75 7 Open star cluster Cassiopeia] [957 76 7 Open star cluster Perseus] [663 76 7 Open star cluster Cassiopeia] [659 77 7 Open star cluster Cassiopeia] [581 77 7 Open star cluster Cassiopeia] [744 81 7 Open star cluster Perseus] [7790 72 8 Open star cluster Cassiopeia] [1245 72 8 Open star cluster Perseus] [637 74 8 Open star cluster Cassiopeia] [189 75 8 Open star cluster Cassiopeia] [436 79 8 Open star cluster Cassiopeia] [221 80 8 Galaxy Andromeda] [205 80 8 Galaxy Andromeda] [7788 71 9 Open star cluster Cassiopeia] [133 73 9 Open star cluster Cassiopeia] [146 73 9 Open star cluster Cassiopeia] [559 74 9 Open star cluster Cassiopeia] [103 74 9 Open star cluster Cassiopeia] [1023 74 9 Galaxy Perseus] [381 76 9 Open star cluster Cassiopeia] [956 78 9 Open star cluster Andromeda] [147 81 9 Galaxy Cassiopeia] [185 82 9 Galaxy Cassiopeia]]"

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