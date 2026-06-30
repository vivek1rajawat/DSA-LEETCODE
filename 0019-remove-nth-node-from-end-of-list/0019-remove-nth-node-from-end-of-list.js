/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let sentinal = new ListNode();
    sentinal.next = head;
    let slow = fast = sentinal; 
    for(let i = 0; i<n; i++){
        fast = fast.next;
    }
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next;
        
    }
    let prev = slow;
    prev.next = prev.next.next;
    return sentinal.next
};