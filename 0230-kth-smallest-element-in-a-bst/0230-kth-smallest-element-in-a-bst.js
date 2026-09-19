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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let ans = null;
    let count = k;
    function traverse(curr){
        curr.left && traverse(curr.left);
        count--;
        if(count == 0){
            ans = curr.val;
        }
        curr.right && traverse(curr.right);
    }
    traverse(root);
    return ans;
};