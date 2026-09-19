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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let ans = null;
    function traverse(curr){
        if(curr.val === val){
            ans = curr;
        }
        else{
            if(val < curr.val){
                curr.left && traverse(curr.left)
            }
            else{
                curr.right && traverse(curr.right);
            }
        }
        
    }
    traverse(root);
    return ans;
};