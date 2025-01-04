    // Create a hashmap to be used as our adjacency list
    const graph = new Map();
    
    // Create a set to store our visited nodes
    const visited = new Set();
    
    // Build adjacency list (undirected)
    for (const [v, e] of edges) {
        if (graph.has(v)) {
            graph.get(v).push(e);
        } else {
            graph.set(v, [e]);
        }
        
        if (graph.has(e)) {
            graph.get(e).push(v);
        } else {
            graph.set(e, [v]);
        }
    }

//method2
    let adList = {};
    let numNodes = Math.max(...edges.flat());

    for (let [from, to] of edges) {
        adList[from] = [];
    }

    for (let [from, to] of edges) {
        adList[from].push(to);
    }

INPUT:
edges:[[0,1],[0,2],[3,5],[5,4],[4,3],[1,3]]

OUTPUT:
{ '0': [ 1, 2 ], '1': [ 3 ], '3': [ 5 ], '4': [ 3 ], '5': [ 4 ] }
