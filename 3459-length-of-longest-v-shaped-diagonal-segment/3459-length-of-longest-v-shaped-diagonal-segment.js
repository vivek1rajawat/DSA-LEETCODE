/**
 * @param {number[][]} grid
 * @return {number}
 */
var lenOfVDiagonal = function(grid) {
    const n = grid.length;
    const m = grid[0].length;

    // 4 diagonal directions: 
    // 0: Down-Right (+1, +1)
    // 1: Down-Left  (+1, -1)
    // 2: Up-Left    (-1, -1)
    // 3: Up-Right   (-1, +1)
    const dr = [1, 1, -1, -1];
    const dc = [1, -1, -1, 1];

    // Flat 1D typed array for fast O(1) state caching
    // Total states: n * m * 4 * 2
    const memo = new Int32Array(n * m * 8).fill(-1);

    function getIndex(r, c, dir, turned) {
        return (((r * m + c) * 4 + dir) * 2) + turned;
    }

    function dfs(r, c, dir, turned, expectedVal) {
        const stateIdx = getIndex(r, c, dir, turned);
        if (memo[stateIdx] !== -1) {
            return memo[stateIdx];
        }

        const nextVal = expectedVal === 2 ? 0 : 2;
        let maxLength = 1;

        // Option 1: Continue in same direction
        const nr = r + dr[dir];
        const nc = c + dc[dir];
        if (nr >= 0 && nr < n && nc >= 0 && nc < m && grid[nr][nc] === expectedVal) {
            maxLength = Math.max(maxLength, 1 + dfs(nr, nc, dir, turned, nextVal));
        }

        // Option 2: Clockwise 90-degree turn (if not turned yet)
        if (turned === 0) {
            const nextDir = (dir + 1) % 4;
            const tr = r + dr[nextDir];
            const tc = c + dc[nextDir];
            if (tr >= 0 && tr < n && tc >= 0 && tc < m && grid[tr][tc] === expectedVal) {
                maxLength = Math.max(maxLength, 1 + dfs(tr, tc, nextDir, 1, nextVal));
            }
        }

        return memo[stateIdx] = maxLength;
    }

    let maxLen = 0;

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            if (grid[r][c] === 1) {
                maxLen = Math.max(maxLen, 1);

                for (let d = 0; d < 4; d++) {
                    const nr = r + dr[d];
                    const nc = c + dc[d];
                    if (nr >= 0 && nr < n && nc >= 0 && nc < m && grid[nr][nc] === 2) {
                        maxLen = Math.max(maxLen, 1 + dfs(nr, nc, d, 0, 0));
                    }
                }
            }
        }
    }

    return maxLen;
};