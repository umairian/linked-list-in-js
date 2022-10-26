class LinkedList {
    constructor() {
        this.head = null; // Object storing the head element of the linked list
        this.tail = null; // Object storing the tail element of the linked list
    }

    prepend(value) {
        const newNode = { value, next: null };

        if(!this.tail) {
            this.tail = newNode;
        }

        if(this.head) {
            newNode.next = this.head;
        }
        this.head = newNode;
    }

    append(value) { // Add an element to the last of linked list
        const newNode = { value, next: null }; 
        
        if(!this.head) { // if the head is empty, assign the new node to head
            this.head = newNode;
        }

        if(this.tail) {
            this.tail.next = newNode; // Before overriding the tail, assign new node to the next property of old tail object
        }

        this.tail = newNode; // New node will be added to the tail of linked list
    }

    appendAfter(value, afterValue) {
        const newNode = { value, next: null };
        const afterNode = this.findFirst(afterValue);
        newNode.next = afterNode.next;
        afterNode.next = newNode;
    }

    findFirst(value) {
        if(!this.head) {
            return null;
        }

        let currentNode = this.head;
        while(currentNode) {
            if(currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }

        return null;
    }

    findAll(value) {
        if(!this.head) {
            return [];
        }

        let currentNode = this.head;
        const elements = [];
        while(currentNode) {
            if(currentNode.value === value) {
                elements.push(currentNode);
            }
            currentNode = currentNode.next;
        }

        return elements;
    }

    delete(value) {
        if(!this.head) { // Return null if head is empty
            return null;
        }

        while(this.head && this.head.value === value) { // Iterate and check if the value is present in head or not
            this.head = this.head.next;
        }

        let currentNode = this.head;
        while(currentNode.next) {
            if(currentNode.next.value === value) {
                currentNode.next = currentNode.next.next; // Save the pointer of the next node in next property of the current node object
            } else {
                currentNode = currentNode.next;
            }
        }
    }

    toArray() { // return all the elements of linked list in array
        const elements = [];

        let currentNode = this.head; // start from head
        while(currentNode) { // Continue the loop until the currentNode is null
            elements.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return elements;
    }
}

const ls = new LinkedList();

ls.append("Linked Lists");
ls.prepend("JavaScript");
ls.append("Everything has a creator, so the Universe has too!");
ls.append(1);
ls.prepend(3);
ls.appendAfter(3, 1);

console.log(ls.findAll(3));

console.log(ls.toArray());
