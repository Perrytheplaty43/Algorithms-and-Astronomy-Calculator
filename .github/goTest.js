import fetch from "node-fetch";
globalThis.fetch = fetch

import path from "path";
globalThis.path = path

import child from 'child_process';
globalThis.child = child

let finished = false

const expectedOutput = "[[224 80 3 Galaxy Andromeda] [869 78 4 Open star cluster Perseus] [884 77 4 Open star cluster Perseus] [752 78 5 Open star cluster Andromeda] [1039 76 5 Open star cluster Perseus] [7686 71 5 Open star cluster Andromeda] [598 73 5 Galaxy Triangulum] [1027 72 6 Open star cluster Cassiopeia] [7789 74 6 Open star cluster Cassiopeia] [654 76 6 Open star cluster Cassiopeia] [129 75 6 Open star cluster Cassiopeia] [457 79 6 Open star cluster Cassiopeia] [659 77 7 Open star cluster Cassiopeia] [744 81 7 Open star cluster Perseus] [225 75 7 Open star cluster Cassiopeia] [663 76 7 Open star cluster Cassiopeia] [957 76 7 Open star cluster Perseus] [581 77 7 Open star cluster Cassiopeia] [7790 72 8 Open star cluster Cassiopeia] [205 80 8 Galaxy Andromeda] [1245 72 8 Open star cluster Perseus] [436 79 8 Open star cluster Cassiopeia] [221 80 8 Galaxy Andromeda] [189 75 8 Open star cluster Cassiopeia] [637 74 8 Open star cluster Cassiopeia] [185 82 9 Galaxy Cassiopeia] [559 74 9 Open star cluster Cassiopeia] [7788 71 9 Open star cluster Cassiopeia] [956 78 9 Open star cluster Andromeda] [133 73 9 Open star cluster Cassiopeia] [1023 74 9 Galaxy Perseus] [381 76 9 Open star cluster Cassiopeia] [146 73 9 Open star cluster Cassiopeia] [103 74 9 Open star cluster Cassiopeia] [147 81 9 Galaxy Cassiopeia]]"
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