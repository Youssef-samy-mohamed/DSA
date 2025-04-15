function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {



  const dummyHead = new ListNode(0); 
  let current = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    const val1 = l1?.val ?? 0;
    const val2 = l2?.val ?? 0;
    const sum = val1 + val2 + carry;

    carry = Math.floor(sum / 10); // to round the carry to integer value
    current.next = new ListNode(sum % 10); // this step to take the remainder of the division yes yes 
    current = current.next;

    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }

  return dummyHead.next;
}
