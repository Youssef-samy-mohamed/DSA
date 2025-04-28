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

function preorderTraversal(root: TreeNode | null): number[] {
    // preorder [root] [left] [right]

    const result:number[] = []

    function traverse( node:TreeNode | null ):void{
        if(!node) return ;
        result.push(node.val) // to push the root 
        traverse(node.left)
        traverse(node.right)
    }
     traverse(root)
    return result;
};