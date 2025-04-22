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

function isSymmetric(root: TreeNode | null): boolean {
    //  am going to solve it with recursion
    if (!root) return true;
    return isMirror(root.left , root.right )
}



     function isMirror( left: TreeNode | null , right: TreeNode | null ): boolean {
        // base case 
        if (!left && !right ) return true 
        if (!left || !right ) return false 
        if ( left.val !== right.val ) return false 


     
     return isMirror(left.left , right.right ) && isMirror( left.right , right.left )
};