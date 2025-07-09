/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// am just will reverse it in place no need to make dummyHead 
// will use  prev , current , next becuase it's a singly list u can't go backward 

var reverseList = function(head) {
    let prev = null
    let current = head;

    while(current !== null ){
        
        let nextNode = current.next // to store the next values 
        current.next = prev;  // now we are reversing 
        prev = current;  // then move to the next element ( prev forward now)
        current = nextNode;
    }

    return prev;
};