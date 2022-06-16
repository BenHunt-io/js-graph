const Graph = require('../src/Graph');


test('Populate graph', () => {

    let graph = new Graph();
    graph.addNode('v1', 7)
        .addNode('v2', 5)
        .addNode('v3', 2)
        .addNode('v4', 1)
        .addNode('v5', 13)
        .addNode('v6', 3)
        .addNode('v7', 10)
        .addNode('v8', 12)
        .addNode('v9', 6)
        .addNode('v10', 11)
        // Depth 1
        .addEdge('v1', 'v2')
        .addEdge('v1', 'v6')
        .addEdge('v1', 'v9')
        // Depth 2
        .addEdge('v2', 'v3')
        .addEdge('v2', 'v5')
        .addEdge('v6', 'v7')
        .addEdge('v6', 'v8')
        .addEdge('v9', 'v10')
        // Depth 3
        .addEdge('v3', 'v4');

    let graphRepresentation = graph.toString({k:'v1', v:7});

    let expectedRepresentation = 
`--- level 0 ---
k:v1, v:7
--- level 1 ---
k:v2, v:5
k:v6, v:3
k:v9, v:6
--- level 2 ---
k:v3, v:2
k:v5, v:13
k:v7, v:10
k:v8, v:12
k:v10, v:11
--- level 3 ---
k:v4, v:1
`;

    expect(graphRepresentation).toBe(expectedRepresentation);


})
