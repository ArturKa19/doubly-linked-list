const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        let node = new Node();
        node.data = data;
        if(this.length == 0){
            this._head = node;
            this._tail = node;
        }
        else{
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        let node = this._head;

        let curPos = 0;

        while(curPos<index){
            node = node.next;
            curPos++;
        }
        return node.data;
    }

    insertAt(index, data) {
        let node  = new Node(data);
        let tempNextNode = this._head;

        if(this.length == 0){
            this._head = data;
            this.prev = null;
            this.next = null;
            this.length++;
        }
        else {
            for (let i = 0; i < index; i++) {
                tempNextNode = tempNextNode.next;
            }
            let tempPrevNode = tempNextNode.prev;
            tempNextNode.prev = node;
            tempPrevNode.next = node;
            node.next = tempNextNode;
            node.prev = tempPrevNode;
            this.length++;
        }
    }

    isEmpty() {
        if(this._head == null)
            return true;
        return false;
    }

    clear() {
        let len = this.length;
        let node = this._head;
        for(let i = 0;i<len;i++) {
            node.data = null;
            node = node.next;
            this.length--;
        }
        return this;
    }

    deleteAt(index) {
        let node = this._head;
        if(this.length<2){
            this.head.prev = null;
            this.head.next = null;
            this.length--;
        }
        else {
            for (let i = 0; i < index; i++) {
                node = node.next;
            }
            let tempNextNode = node.next;
            let tempPrevNode = node.prev;
            tempNextNode.prev = tempPrevNode;
            tempPrevNode.next = tempNextNode;
            this.length--;
        }
        return this;
    }

    reverse() {

        let prevNode  = this._head.next;
        let nextNode  = this._tail.prev;

        if(this.length == 2) {
            this._tail = prevNode.prev;
            this._head = nextNode.next;
            this._head.next = this._head.prev;
            this._head.prev = null;
            this._tail.prev = this._tail.next;
            this._tail.next = null;
        }
        else if(this.length>2)
        {
            this._tail = prevNode.prev;
            this._head = nextNode.next;
            this._head.next = this._head.prev;
            this._head.prev = null;
            this._tail.prev = this._tail.next;
            this._tail.next = null;
        let temp = this._head.next;
        for(let i = 1;i<this.length-1;i++) {
            let node = temp.next;
            temp.next = temp.prev;
            temp.prev = node;
            temp = temp.next;

        }

        }
        return this;
    }

    indexOf(data) {
        let node = this._head;
        let position = -1;
        for(let i = 0; i <this.length ; i++){
           if(node.data == data){
               position = i;
               break;
           }
           node = node.next;
        }
        return position;
    }
}

module.exports = LinkedList;

