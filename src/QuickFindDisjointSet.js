class QuickFindDisjointSet {

    constructor(vertices){
        this.disjointSet = vertices.slice();
    }

    // fast impl O(1)
    find(v){
        return this.disjointSet[v];
    }

    // slow impl O(n)
    // To full construct disjointSet, it takes O(N) for n operations, so O(n^2)
    union(v1, v2){
        if(v1 == v2){
            return;
        }
        
        for(let i = 0; i<this.disjointSet.length; i++){
            if(this.disjointSet[i] == v2){
                this.disjointSet[i] = v1;
            }
        }
    }

    isConnected(v1, v2){
        return this.disjointSet[v1] == this.disjointSet[v2];
    }

}


module.exports = {QuickFindDisjointSet};