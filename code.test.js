const fs = require('fs');
eval(fs.readFileSync('code.js')+'');

//Test 1
let graph =
  dijkstra([
    [[1, 2], [2, 1], [3, 4]],       //node A
    [[2, 1], [4, 10], [5, 2]],      //node B
    [[0, 9], [4, 8]],               //node C
    [[2, 2]],                       //node D
    [[3, 7], [6, 1]],               //node E
    [[7, 3]],                       //node F
    [[4, 4], [5, 2]],               //node G
    [[6, 1]],                       //node H
  ], 2);

if ((JSON.stringify(graph) != JSON.stringify([9, 11, 0, 13, 8, 11, 9, 14]))) {
  throw "The test failed!";
}
