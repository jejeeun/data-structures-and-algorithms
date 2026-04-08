import { DoublyLinkedList } from "./DoublyLinkedList.mjs";

class HashData{
    constructor(key, value){
        this.key = key
        this.value = value
    }
}

class HashTable{
    constructor(){
        this.arr = []

        for(let i = 0; i < 10; i++){
            this.arr[i] = new DoublyLinkedList()
        }
    }

    hashFunction(number){
        return number % 10
    }

    set(key, value){
        this.arr[this.hashFunction(key)].insertAt(0, new HashData(key, value))
    }

    get(key){
        let currentNode = this.arr[this.hashFunction(key)].head

        while(currentNode != null){
            if(currentNode.data.key == key){
                return currentNode.data.value
            }
            currentNode = currentNode.next
        }

        return null;
    }

    remove(key){
        let currentNode = this.arr[this.hashFunction(key)].head
        let deletedIndex = 0;
        while(currentNode != null){
            if(currentNode.data.key == key) this.arr[this.hashFunction(key)].deleteAt(deletedIndex);
            currentNode = currentNode.next;
            deletedIndex++;
        }
        return null;
    }
}

export { HashTable };