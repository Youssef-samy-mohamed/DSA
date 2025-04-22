/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function minDepth(root: TreeNode | null): number {
    // when i get the short path am going to add the root 

    function getMin( node: TreeNode | null ): number {
        if(!node) return Infinity;
        if (!node.left && !node.right) return 1; // Leaf node detection 

        return Math.min(getMin(node.left) , getMin(node.right)) + 1 
    }
    if(!root) return 0;

    return getMin(root);


};