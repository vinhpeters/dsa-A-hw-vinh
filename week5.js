class Graph {
    constructor() {
        this.adjList = {};
    }

    addVertex(v) {
        if (!this.adjList[v]) this.adjList[v] = [];

    }
    addEdge(v1, v2) {
        this.adjList[v1].push(v2);
        this.adjList[v2].push(v1);
    }
    removeEdge(v1, v2) {
        this.adjList[v1].filter(v => v !== v2)
        this.adjList[v2].filter(v => v !== v1)
    }


    removeVertex(v) {
        while (this.adjList[v].length) {
            adjVertex = this.adjList[v].pop()
            this.removeEdge(v, adjVertex)
        }
        delete this.adjList[v]
    }

    dfsRecursive(start) {
        let result = [];
        let visited = {};

        let adjList = this.adjList;

        (function dfs(vertex) {

            
            visited[vertex] = true;

            result.push(vertex)
            adjList[vertex].forEach(neighbor => {

                if (!visited[neighbor]) {
                    return dfs(neighbor)

                }
            });
        })(start)

        return result
    }
}

let g = new Graph();
g.addVertex("1");
g.addVertex("2");
g.addVertex("3");
g.addVertex("4");
g.addVertex("5");
g.addVertex("6");
g.addEdge("1","2");
g.addEdge("1","3");
g.addEdge("2","4");
g.addEdge("3","5");
g.addEdge("4","5");
g.addEdge("4","6");
g.addEdge("5","6");

console.log(g.dfsRecursive('1'))