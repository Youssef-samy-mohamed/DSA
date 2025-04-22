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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    //recursion
    // root is the value in the middle 
    // left array -10 , -3 and node 
    //right array 5 , 9 and node 

        if (nums.length === 0) return null;


    const middle = Math.floor( nums.length / 2 )
    const root = new TreeNode(nums[middle]);


    root.left = sortedArrayToBST(nums.slice(0 , middle));

    root.right = sortedArrayToBST(nums.slice(middle + 1))


return root

    



};