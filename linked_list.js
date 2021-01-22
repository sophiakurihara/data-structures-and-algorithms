"use strict";

// Node for a Singly Linked List -> has a reference to the next node

class Node {
    /*
    * Object to store single node of a linked list
    * Contains data and link to next node
    * */

    data;
    next_node;

    constructor(data) {
        this.data = data;
    }
}

// Node for Double Linked List -> has a reference to prev and next node

class LinkedNode {
    data;
    next_node;
    previous_node;

    constructor(data){
        this.data = data;
    }
}

/** Linked List
 *  Works with both types (singly/doubly linked)
 */

class LinkedList {
    head;

    is_empty(){
        return ( this.head === undefined );
    }

    size() {
        let current = this.head,
            count = 0;

        while(current){
            count++;
            current = current.next_node;
        }

        return count;
    }
}