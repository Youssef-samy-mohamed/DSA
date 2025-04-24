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

function postorderTraversal(root: TreeNode | null): number[] {
    // [left] [right] [root]
    // recursion time 

    const result: number[] = []

    function traverse( node: TreeNode | null){
        if ( !node ) return 
        traverse(node.left)
        traverse(node.right)
        result.push(node.val) // adding the root
    }
    


traverse(root)
return result;
    
};