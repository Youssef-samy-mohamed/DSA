/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */


// becuase it's singly so i can't use the tail 
// we  need to check using two pointers( slow and fast )to find the middle 
// then reverse the second half in place 
//  then we compare the first half and the reversed second half


var isPalindrome = function(head) {

    if(!head || !head.next) return true 

    let slow = head 
    let fast = head 

    // find the middle 
    while( fast && fast.next ){
        slow = slow.next 
        fast = fast.next.next 
    }

    // reverse second half 
    let prev = null 
    while( slow ) {
        let nextNode = slow.next // to store the next values
        slow.next = prev; // now we are reversing 
        prev = slow; // prev forward 
        slow = nextNode // now the slow have the reversed elements 
    }

    //  now it's time to compare the first half with the second half 

    let left = head // this is our first half 
    let right = prev // this is the reversed second half 

    while(right){
        if( left.val !== right.val){
            return false 
        }
        // retore my list 
        left = left.next
        right = right.next
    }

    return true
     
};