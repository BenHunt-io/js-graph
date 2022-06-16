const {RankedQuickUnionDisjointSet} = require('../src/RankedQuickUnionDisjointSet');

test('Quick Union', () => {

    let disjointSet = new RankedQuickUnionDisjointSet(10);

    // graph 1
    disjointSet.union(0, 1);
    disjointSet.union(0, 2);
    disjointSet.union(0, 3);
    
    // graph 2
    disjointSet.union(4, 8);

    // graph 3
    disjointSet.union(5, 7);
    disjointSet.union(5, 6);


    // Test no graphs connected
    expect(disjointSet.isConnected(0, 4)).toBe(false);
    expect(disjointSet.isConnected(0, 5)).toBe(false);
    expect(disjointSet.isConnected(0, 9)).toBe(false);
    // Test connectivity
    expect(disjointSet.isConnected(0, 3)).toBe(true);
    expect(disjointSet.isConnected(0, 2)).toBe(true);
    expect(disjointSet.isConnected(0, 1)).toBe(true);
    // Test Union
    disjointSet.union(0, 4);
    expect(disjointSet.isConnected(0, 4)).toBe(true);
    expect(disjointSet.isConnected(0, 8)).toBe(true);

    expect(disjointSet.getNumSets()).toBe(3);



})