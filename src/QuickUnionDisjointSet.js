class QuickUnionDisjointSet {
    
    constructor(vertices){
        this.disjointSet = vertices.slice();
    }


    // slow impl O(n)
    find(v){

        while(v != this.disjointSet[v]){
            v = this.disjointSet[v];
        }

        return this.disjointSet[v];
    }

    // fast impl <= O(n). Worst case O(n) when graph is constructed like a list, but not in every case.
    union(v1, v2){

        let v1Root = this.find(v1);
        let v2Root = this.find(v2);
        
        if(v1Root != v2Root){
            this.disjointSet[v2Root] = v1Root;
        }

    }

    isConnected(v1, v2){
        return this.find(v1) == this.find(v2);
    }

}


module.exports = {QuickUnionDisjointSet};