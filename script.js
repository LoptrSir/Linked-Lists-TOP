//LinkedLists TOP

//Course assignment working with linked lists.


class Node {
  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addEnd(value) {
    if (this.head === null) {
      this.addFirst(value);
    } else {
      let temp = this.head;
      while (temp.nextNode !== null) temp = temp.nextNode;

      temp.nextNode = new Node(value, null);
      console.log("AddEnd:", temp.nextNode);
      return temp.nextNode;
    }
  }
  addFirst(value) {
    //add new node to start of listIndex
    this.head = new Node(value, this.head);
    console.log("AddFirst:", this.head);
  }
  totalNodes() {
    //return total number of nodes in list
    let count = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      count++;
      if (currentNode.nextNode === null) break;
      currentNode = currentNode.nextNode;
    }
    console.log("TotalNodes:", count);
    return count;
  }
  headNode() {
    //return first node
    if (this.head === null) return console.log("HeadNode:", this.head);
    console.log("HeadNode:", this.head);
    return this.head;
  }
  tailNode() {
    //return last node
    if (this.head === null) {
        console.log("TailNode: No Node to remove");
        return null;
    }
    let currentNode = this.head;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    console.log("TailNode:", currentNode);
    return currentNode;
  }
  nodeAtIndex(index) {
    //return node at given index
    if (this.head === null){
      console.log("NodeAtIndex: no nodes to index");
      return null;
    }
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode !== null && currentIndex < index) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    if (currentIndex === index && currentNode !== null) {
      console.log("Node At Index:", currentNode);
      return currentNode;
    } else {
      console.log(`Node At Index: No node at index ${index}`);
      return index;
    }
  }
  removeLastNode() {
    //remove last element from list
    if (this.head === null){
      console.log("RemoveLastNode: No Node to remove.");
      return null;
    }

    if (this.head.nextNode === null) {
      this.head = null;
      console.log("RemoveLastNode: No Nodes left");
      return  null;
    }

    let previousNode = null;
    let currentNode = this.head;

    while (currentNode.nextNode !== null) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    previousNode.nextNode = null;
    console.log("RemoveLastNode: Last Node is now:", previousNode);
  }
  contains(value) {
    //determines if value is/is not present;}
    if (this.head === null) {
        console.log("contains: no nodes to search");
        return null;
    }

    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        console.log(`Contains: ${value}`);
        return value;
      }
      currentNode = currentNode.nextNode;
    }
    console.log("Contains: value not found");
  }
  find(value) {
    //returns index of node containing value
    if (this.head === null) {
        console.log("Find: no nodes to search");
        return -1; //No nodes in list, value not found
    }

    let currentNode = this.head;
    let currentIndex = 0;

     while (currentNode !== null) {
      if (currentNode.value === value){
        console.log("Find:", value, "At Index:", currentIndex);
        return currentIndex;
     }
      currentNode = currentNode.nextNode;
      currentIndex++;
    }

      console.log("Find: value not found in nodes");
      return -1
  }
  // toString() { //console.log the list  format: ( value ) -> ( value ) -> ( value ) -> null}
  // //extra credit tip: consider how insert/remove will impact remainder of nodes, update as appropriate
  // insertAfter(value, index) {//ec: insert new node with provided value at given index}
  // removeAt(index) { //ec: remove node at index}
}

let testList = new LinkedList();
testList.addEnd(1);
testList.addEnd(2);
testList.addEnd(3);
testList.addEnd(4);
console.log("NodeList:", testList);
testList.totalNodes();
testList.headNode();
testList.nodeAtIndex(2);
testList.removeLastNode();
testList.contains(3);
testList.find(2);


// let currentNode = testList.head;//
// while (currentNode !== null) {
//   console.log(currentNode.value);
//   currentNode = currentNode.nextNode;
// }
