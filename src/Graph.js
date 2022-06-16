const { Queue } = require('@datastructures-js/queue');

class Graph {

    constructor(){
        this.verticies = new Map();
        this.nodes = new Map();
    }

    addNode(k, v){
        if(!this.verticies.has(k)){
            this.verticies.set(k, []);
            this.nodes.set(k, v);
        }

        return this;
    }

    addEdge(k, kOther){

        if(!this.verticies.has(k) || !this.verticies.has(kOther)){
            return this;
        }

        this.verticies.get(k).push(kOther);
        this.verticies.get(kOther).push(k);

        return this;
    }

    getNeighbors(k){
        return this.verticies.get(k).slice()
            .map(key => ({k: key, v: this.nodes.get(key)}));

    }

    deleteNode(k){
        this.verticies.delete(k);
        this.nodes.delete(k);
    }

    toString(root){
        return this.bfs(root);
    }

    bfs(root){

        let level = 0;
        let visited = new Set();
        let q = new Queue();
        q.enqueue(root);

        let representation = "";

        while(!q.isEmpty()){

            let size = q.size();

            representation += `--- level ${level} ---\n`;

            for(let i = 0; i<size; i++){

                let cur = q.dequeue();
                visited.add(cur.k);
                representation += `k:${cur.k}, v:${cur.v}\n`;

                for(let neighbor of this.getNeighbors(cur.k)){
                    if(!visited.has(neighbor.k)){
                        q.enqueue(neighbor)
                    }
                }
            }

            level++;
            
        }

        return representation;
    }
}



module.exports = Graph;