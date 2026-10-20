/**
 * @param {number[][]} edges
 * @param {string} colors
 * @return {number}
 */
var findColoredRoot = function(edges, colors) {
    const COLORS = "WRB";
    const n = colors.length;
    const ins = new Array(n).fill(0);   // count incoming edges (parents)
    const outs = new Array(n).fill(0);  // count outgoing edges (children)
    
    for (const [u, v] of edges) {
        const uc = COLORS.indexOf(colors[u]);
        const vc = COLORS.indexOf(colors[v]);
        
        // Adjacent nodes cannot have the same color
        if (uc === vc) return -1;
        
        // Determine parent -> child relationship based on the color sequence: W -> R -> B -> W
        if ((uc + 1) % 3 === vc) {
            // u is parent of v (u -> v)
            ins[v]++;
            outs[u]++;
        } else if ((vc + 1) % 3 === uc) {
            // v is parent of u (v -> u)
            ins[u]++;
            outs[v]++;
        } else {
            return -1;
        }
        
        // Constraint checks: max 1 parent, max 2 children
        if (ins[v] > 1 || ins[u] > 1 || outs[u] > 2 || outs[v] > 2) {
            return -1;
        }
    }
    
    // Find the node with no parent (in-degree 0) and valid out-degree (<= 2)
    let root = -1;
    for (let i = 0; i < n; i++) {
        if (ins[i] === 0 && outs[i] <= 2) {
            if (root !== -1) return -1; // More than one root found
            root = i;
        }
    }
    
    return root;
};