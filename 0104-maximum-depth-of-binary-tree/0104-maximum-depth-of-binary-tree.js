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
var maxDepth = function(curr) {
    if(!curr) return 0;
    let leftMax = maxDepth(curr.left);
    let rightMax = maxDepth(curr.right);
    return 1+ Math.max(leftMax, rightMax);
};