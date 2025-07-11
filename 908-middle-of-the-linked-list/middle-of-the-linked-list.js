
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
  }

// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */


//  our problem is to return the middle node , the seconed half of it

// i need to know the length of my list 
//  find the middle index using math.floor ( count / 2 )
// take the head to the middle and then give me all the element from there 

var middleNode = function (head) {

    let count = 0;
    let current = head;

    while( current !== null ){
        count++;
        current = current.next
    }
    
    //  find the middle index

    let middle = Math.floor(count / 2 )

    //  move to the middle 
    current = head
    for( let i = 0 ; i < middle ; i++){
        current = current.next;
    }

return current

};


// const head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(4);
// head.next.next.next.next = new ListNode(5);

// const result = middleNode(head);
// console.log(result.val);  




//  i can use the two pointers as well 
// the slow one must be the middle 

// var middleNode = function(head) {
//   let slow = head;
//   let fast = head;

//   while (fast && fast.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }

//   return slow;
// };