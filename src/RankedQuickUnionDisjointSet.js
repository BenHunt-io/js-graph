class RankedQuickUnionDisjointSet {
    
    constructor(n){
        this.numSets = n;
        this.disjointSet = [];
        for(let i = 0; i<n; i++){
            this.disjointSet.push(i);
        }
        // can use an array here.
        this.heights = new Map();
        this.disjointSet.forEach(val => {
            this.heights.set(val, 0);
        });
    }


    // log(n) with path compression
    find(v){

        if(v == this.disjointSet[v]){
            return v;
        }

        return this.disjointSet[v] = this.find(this.disjointSet[v]);
    }

    // log(n)
    union(v1, v2){

        if(v1 == v2){
            return;
        }

        let v1Root = this.find(v1);
        let v2Root = this.find(v2);

        if(this.heights.get(v1Root) > this.heights.get(v2Root)){
            this.disjointSet[v2Root] = v1Root;
            this.heights.set(v2Root, 0);
        }else if(this.heights.get(v1Root) < this.heights.get(v2Root)){
            this.disjointSet[v1Root] = v2Root;
            this.heights.set(v1Root, 0);        
        }else{
            // When the heights are equal, the unioned tree grows in size
            this.disjointSet[v1Root] = v2Root;
            this.heights.set(v1Root, this.heights.get(v2Root)+1);    
        }

        this.numSets--;

    }

    isConnected(v1, v2){
        return this.find(v1) == this.find(v2);
    }

    getNumSets(){
        return this.numSets;
    }


}


module.exports = {RankedQuickUnionDisjointSet};