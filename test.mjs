import { Node, LinkedList } from './LinkedList.mjs'

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

node1.next = node2;
node2.next = node3;

console.log(node1.data);
console.log(node1.next.data);
console.log(node1.next.next.data);

let linkedList1 = new LinkedList();

linkedList1.insertAt(0, 1);
linkedList1.insertAt(1, 2);
linkedList1.insertAt(2, 3);

linkedList1.printAll();

linkedList1.clearAll();

linkedList1.printAll();

linkedList1.insertLast(10);

linkedList1.printAll();

linkedList1.deleteAt(0);
linkedList1.printAll();

linkedList1.insertAt(0, 1);
linkedList1.insertAt(1, 2);
linkedList1.insertAt(2, 3);

let firstNode = linkedList1.getNodeAt(0);
console.log(firstNode)
