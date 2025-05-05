/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    // i think if i can solve it when i prove that a node and b node pointing at the same node 

    if ( !headA || !headB) return null;

    let pointerA: ListNode | null = headA;
    let pointerB: ListNode | null = headB;

    while ( pointerA !== pointerB){


        pointerA = pointerA ? pointerA.next : headB;
        pointerB = pointerB ? pointerB.next : headA
    }


    return pointerB;

};