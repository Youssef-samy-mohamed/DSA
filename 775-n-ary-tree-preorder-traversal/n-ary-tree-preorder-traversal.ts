/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 * 
 *     constructor(val?: number, children?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */


function preorder(root: _Node | null): number[] {
    //  so we can solve it with stack or recursion 
    // i think stack is the right way to do it becuase it's very simple problem 


    const result:number [] = []
    if(!root) return result;

    const stack: _Node[] = [root]

    while( stack.length ){
        const node = stack.pop()
        result.push(node.val)



        for( let i = node.children.length - 1 ; i >= 0; i--){
            stack.push(node.children[i])
        }




    }


    return result 

};