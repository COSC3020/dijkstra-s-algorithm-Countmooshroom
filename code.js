function dijkstra(graph, sourceNode) {
    var node;

    //initialize the dist to each vertex to infinity, source to 0
    var dist = new Array(graph.length).fill(Infinity);
    var distance = new Array(graph.length);
    dist[sourceNode] = 0;

    //while there are unmarked vertices left in the graph
    while (distance.includes(undefined)) {
        //select the unmarked vertex with the lowest dist
        let min = Infinity;
        for (let i = 0; i < dist.length; i++) {
            if (dist[i] < min && distance[i] == undefined) {
                min = dist[i];
                node = i;
            }
        }

        //mark v with distance dist
        distance[node] = dist[node];

        //for each edge (v, w), dist(w) = the minimum distance
        for (v of graph[node]) {
            dist[v[0]] = Math.min(v[1]+dist[node], dist[v[0]]);
        }
    }
    return distance;
}
