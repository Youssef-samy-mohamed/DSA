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

function isBalanced(root: TreeNode | null): boolean {
    // the problem here is that the both nodes can't have more than one child
    // so if i prove that there's more than one brach or child then return false if not    return true 
    // let me try to get the max for each side left and right and let's see by creating new fucntion 


    function getHeight ( node: TreeNode | null ): number {
        if (!node ) return 0;

        return Math.max(getHeight(node.left) , getHeight( node.right)) + 1 

    }
    // if the root is empty 
    if ( !root ) return true;

    // checking right and left subtrees 

    const leftHeight = getHeight(root.left)
    const rightHeight = getHeight(root.right)

    // recurion time 
    // am checking if the difference between left and right <= 1 as he told me 
    

    return ( Math.abs(leftHeight - rightHeight) <= 1 && isBalanced(root.left) && isBalanced(root.right)
    
    
    )


  



    
};