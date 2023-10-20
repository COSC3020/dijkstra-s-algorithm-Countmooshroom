const fs = require('fs');
eval(fs.readFileSync('code.js')+'');

//This is the example from the video and slides
let graph1 = [
  [[1, 2], [2, 1], [3, 4]],       //node A
  [[2, 1], [4, 10], [5, 2]],      //node B
  [[0, 9], [4, 8]],               //node C
  [[2, 2]],                       //node D
  [[3, 7], [6, 1]],               //node E
  [[7, 3]],                       //node F
  [[4, 4], [5, 2]],               //node G
  [[6, 1]]                        //node H
];
let expected1 = [9, 11, 0, 13, 8, 11, 9, 14];

if ((JSON.stringify(dijkstra(graph1, 2)) != JSON.stringify(expected1))) {
  throw "Test 1 failed!";
}

  

//This graph example is from https://www.tutorialspoint.com/design_and_analysis_of_algorithms/design_and_analysis_of_algorithms_shortest_paths.htm
let graph2 = [
  [[1, 5], [2, 2]],
  [[3, 3], [4, 7]],
  [[1, 2], [6, 9]],
  [[2, 3], [4, 2], [6, 6]],
  [[5, 8], [6, 5], [7, 7]],
  [[8, 4]],
  [[7, 2]],
  [[5, 3]],
  []
];
let expected2 = [0, 4, 2, 7, 9, 16, 11, 13, 20];

if ((JSON.stringify(dijkstra(graph2, 0)) != JSON.stringify(expected2))) {
  throw "Test 2 failed!";
}



//This graph example is from http://siddarthareddy.weebly.com/blog/dijkstras-algorithm-example
let graph3 = [
  [[1, 10], [3, 5]],           //node S
  [[2, 1], [3, 2]],            //node A
  [[4, 4]],                    //node B
  [[1, 3], [2, 9], [4, 2]],    //node C
  [[0, 7], [2, 6]]             //node D
];
let expected3 = [0, 8, 9, 5, 7];

if ((JSON.stringify(dijkstra(graph3, 0)) != JSON.stringify(expected3))) {
  throw "Test 3 failed!";
}