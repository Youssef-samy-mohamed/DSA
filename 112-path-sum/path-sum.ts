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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    // to get the targetSum path , it's up to leaf , [5,4,8,11,null,13,4,7,2,null,null,null,1] , after 2 in this array is null , null mean that 13 is leaf this how am going to solve it 
    if ( !root) return false;



    function getHeight( node: TreeNode | null , currentSum:number ): boolean {
            if (!node) return false;

            currentSum = currentSum + node.val;

            // check if it's a leaf node and targetSum

            if (!node.left && !node.right){
                return currentSum === targetSum;
            }

            // recursive time check left and right subtrees
            return getHeight(node.left, currentSum) || getHeight(node.right , currentSum)


    }

return getHeight(root , 0 )





};