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

function maxDepth(root: TreeNode | null): number {
    //  solving it with recursion again
    // level order , level by level or Depth - First Search 
    if ( root === null  ) return 0 ;


    const leftDepth = maxDepth(root.left)
    const rightDepth = maxDepth(root.right)

    return Math.max(leftDepth ,rightDepth ) + 1 



    
};