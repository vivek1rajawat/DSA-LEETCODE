/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let maxDepth = 0;
    function calculateDepth(curr){
        if(!curr) return 0;
        let leftDepth = calculateDepth(curr.left);
        let rightDepth = calculateDepth(curr.right);
        let currDepth = leftDepth + rightDepth;
        maxDepth = Math.max(currDepth, maxDepth);
        return 1+Math.max(leftDepth, rightDepth);
    }
    calculateDepth(root);
    return maxDepth;
};