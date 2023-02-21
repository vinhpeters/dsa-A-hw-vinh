

# %%
class Graph:
    def __init__(self):
        self.adjList = {}

    def addVertex(self,v):
        if v not in self.adjList:
            self.adjList[v] = []

    def addEdge(self,v1,v2):
        if v2 not in self.adjList[v1]:
            self.adjList[v1].append(v2)
        if v1 not in self.adjList[v2]:
            self.adjList[v2].append(v1)

    def removeEdge(self,v1,v2):
        if v2 in self.adjList[v1]:
            self.adjList[v1].remove(v2)
        if v1 in self.adjList[v2]:
            self.adjList[v2].remove(v1)

    def removeVertex(self,v):
        while len(self.adjList[v]):
            adjVertex = self.adjList[v].pop()
            self.removeEdge(v, adjVertex)

        del self.adjList[v]

    def dfsRecursive(self,start):
        result = []
        visited = {}

        adjList = self.adjList  

        def dfs(vertex):
            print('vertex ',vertex)
            if not vertex:
                return None
            visited[vertex] = True

            result.append(vertex)
            for neighbor in adjList[vertex]:
                print('neighbor ', neighbor)
                if not neighbor in visited :
                    return dfs(neighbor)
        dfs(start)
        return result

    


# %%
g = Graph()
g.addVertex("1")
g.addVertex("2")
g.addVertex("3")
g.addVertex("4")
g.addVertex("5")
g.addVertex("6")
g.addEdge("1","2")
g.addEdge("1","3")
g.addEdge("2","4")
g.addEdge("3","5")
g.addEdge("4","5")
g.addEdge("4","6")
g.addEdge("5","6")

# %%
g.adjList

# %%
print(g.dfsRecursive('1'))


