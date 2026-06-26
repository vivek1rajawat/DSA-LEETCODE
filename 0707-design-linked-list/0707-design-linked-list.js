function Node(val) {
    this.val = val;
    this.next = null;
}

var MyLinkedList = function () {
    this.head = null;
    this.size = 0;
};

// Get value at index
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) return -1;

    let curr = this.head;

    for (let i = 0; i < index; i++) {
        curr = curr.next;
    }

    return curr.val;
};

// Add at head
MyLinkedList.prototype.addAtHead = function (val) {
    let newNode = new Node(val);

    newNode.next = this.head;
    this.head = newNode;

    this.size++;
};

// Add at tail
MyLinkedList.prototype.addAtTail = function (val) {
    let newNode = new Node(val);

    if (this.head === null) {
        this.head = newNode;
    } else {
        let curr = this.head;

        while (curr.next !== null) {
            curr = curr.next;
        }

        curr.next = newNode;
    }

    this.size++;
};

// Add at index
MyLinkedList.prototype.addAtIndex = function (index, val) {

    if (index < 0 || index > this.size) return;

    if (index === 0) {
        this.addAtHead(val);
        return;
    }

    if (index === this.size) {
        this.addAtTail(val);
        return;
    }

    let curr = this.head;

    for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
    }

    let newNode = new Node(val);

    newNode.next = curr.next;
    curr.next = newNode;

    this.size++;
};

// Delete at index
MyLinkedList.prototype.deleteAtIndex = function (index) {

    if (index < 0 || index >= this.size) return;

    if (index === 0) {
        this.head = this.head.next;
    } else {

        let curr = this.head;

        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }

        curr.next = curr.next.next;
    }

    this.size--;
};