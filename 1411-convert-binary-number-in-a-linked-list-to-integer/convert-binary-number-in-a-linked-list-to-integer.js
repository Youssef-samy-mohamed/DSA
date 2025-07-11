/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

// so i need to put the numbers next to each and then converting them 

var getDecimalValue = function(head) {
    if( head === 0 ) return 0;
    let binary = ''
    current = head;

    while( current ) {
        binary = binary + current.val
        current = current.next
    }


    return parseInt(binary , 2 )
    
};