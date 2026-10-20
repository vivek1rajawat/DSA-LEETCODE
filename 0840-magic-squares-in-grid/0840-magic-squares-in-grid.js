/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    
    // If the grid is smaller than 3x3, no magic square can exist
    if (rows < 3 || cols < 3) return 0;
    
    let count = 0;
    
    // Helper function to check if a 3x3 subgrid starting at (r, c) is a magic square
    function isMagic(r, c) {
        const set = new Set();
        
        // 1. Check if all numbers are between 1 and 9 and unique
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const val = grid[r + i][c + j];
                if (val < 1 || val > 9 || set.has(val)) {
                    return false;
                }
                set.add(val);
            }
        }
        
        // 2. Check rows and columns sum (must be 15)
        // Rows
        for (let i = 0; i < 3; i++) {
            if (grid[r + i][c] + grid[r + i][c + 1] + grid[r + i][c + 2] !== 15) return false;
        }
        // Columns
        for (let j = 0; j < 3; j++) {
            if (grid[r][c + j] + grid[r + 1][c + j] + grid[r + 2][c + j] !== 15) return false;
        }
        
        // 3. Check diagonals sum (must be 15)
        const diag1 = grid[r][c] + grid[r + 1][c + 1] + grid[r + 2][c + 2];
        const diag2 = grid[r][c + 2] + grid[r + 1][c + 1] + grid[r + 2][c];
        
        if (diag1 !== 15 || diag2 !== 15) return false;
        
        return true;
    }
    
    // Iterate over all possible top-left corners of 3x3 subgrids
    for (let r = 0; r <= rows - 3; r++) {
        for (let c = 0; c <= cols - 3; c++) {
            if (isMagic(r, c)) {
                count++;
            }
        }
    }
    
    return count;
};