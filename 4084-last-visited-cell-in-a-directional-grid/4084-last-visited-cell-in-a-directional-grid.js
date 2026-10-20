/**
 * @param {character[][]} grid
 * @return {number[]}
 */
var lastVisitedCell = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    
    // Robust 2D boolean array initialization
    const visited = [];
    for (let i = 0; i < m; i++) {
        visited.push(new Array(n).fill(false));
    }
    
    let r = 0, c = 0;
    visited[0][0] = true;
    
    while (true) {
        let nr = r;
        let nc = c;
        
        const char = grid[r][c];
        if (char === 'L') nc--;
        else if (char === 'R') nc++;
        else if (char === 'U') nr--;
        else if (char === 'D') nr++;
        
        // Check boundaries and whether the next cell is already visited
        if (nr < 0 || nr >= m || nc < 0 || nc >= n || visited[nr][nc]) {
            break;
        }
        
        visited[nr][nc] = true;
        r = nr;
        c = nc;
    }
    
    return [r, c];
};