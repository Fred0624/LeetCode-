// Given the head of a singly linked list, reverse the list, and return the reversed list.

var reverseList = function(head) {
    let curr = head
    let prev = null
    let tmp; // holds the next iteration

    while(curr !== null){
        tmp = curr.next
        curr.next = prev
        prev = curr  
        curr = tmp     
    }
    
    return prev
};