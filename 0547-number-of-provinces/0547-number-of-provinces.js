/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let n = isConnected.length;
    let visited = new Array(n).fill(false);
    let count = 0;
    function dfs(city){
        visited[city] = true;
        for(let i = 0; i< n; i++){
            if(isConnected[city][i] === 1 && !visited[i]){
                dfs(i);
            }
        }
    }
    for(let i = 0; i<n; i++){
        if(!visited[i]){
             count++;
             dfs(i);
        }
    }
    return count;
};