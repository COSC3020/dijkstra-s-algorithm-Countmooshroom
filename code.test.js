const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const test1 =
jsc.property("graph1", function () {
    graph =
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
    return graph == [9, 11, 0, 13, 8, 11, 9, 14];
  });

jsc.assert(test1);