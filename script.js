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
    //add new Node to end
    if (this.head === null) {
      this.addFirst(value);
    } else {
      let currentNode = this.head;

      while (currentNode.nextNode !== null) currentNode = currentNode.nextNode;
      currentNode.nextNode = new Node(value, null);
      console.log("AddEnd:", currentNode.nextNode.value);
      return currentNode.nextNode;
    }
  }

  addFirst(value) {
    //add new node to start of listIndex
    this.head = new Node(value, this.head);
    console.log("AddFirst:", this.head.value);
  }

  totalNodes() {
    //return total number of nodes in list
    let currentNode = this.head;
    let count = 0;

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
    if (this.head === null) {
        console.log("HeadNode: Node list is empty");
    return;
  }
    console.log("HeadNode:", this.head.value);
    return this.head.value;
  }

  tailNode() {
    //return last node
    if (this.head === null) {
      console.log("TailNode: Node list is empty");
      return null;
    }

    let currentNode = this.head;

    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    console.log("TailNode:", currentNode.value);
    return currentNode.value;
  }

  nodeAtIndex(index) {
    //return node at given index
    if (this.head === null) {
      console.log("NodeAtIndex: no nodes to index");
      return;
    }

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode !== null && currentIndex < index) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    if (currentIndex === index) {
      console.log("Node At Index:", currentNode.value);
      return currentNode.value;
    } else {
      console.log(`Node At Index: No node at index ${index}`);
      return;
    }
  }

  removeLastNode() {
    //remove last element from list
    if (this.head === null) {
      console.log("RemoveLastNode: No Node to remove.");
      return null;
    }

    if (this.head.nextNode === null) {
      this.head = null;
      console.log("RemoveLastNode: No Nodes left");
      return null;
    }

    let previousNode = null;
    let currentNode = this.head;

    while (currentNode.nextNode !== null) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    previousNode.nextNode = null;
    console.log("RemoveLastNode: Last Node is now:", previousNode.value);
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

  indexValue(value) {
    //returns index of node containing value
    if (this.head === null) {
      console.log("IndexValue: no nodes to search");
      return -1; //-1 means there is no index to search.
    }

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        console.log("IndexValue:", value, "At Index:", currentIndex);
        return currentIndex;
      }
      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    console.log("IndexValue: value not found in nodes");
    return -1;
  }

  toString() {
    //console.log nodes value as a list
    if (this.head === null) {
      console.log("ToString: no node present.");
      return null;
    }

       let currentNode = this.head;
       let stringArray = [];

    while (currentNode !== null) {
      stringArray.push(currentNode.value);
      currentNode = currentNode.nextNode;
    }
    console.log("ToString:", stringArray.join(", ")); //able to insert at join point IE ', ' where toString() concatenates with comma only.
  }

  // //*extra credit* tip: consider how insert/remove will impact remainder of nodes, update as appropriate
  insertAfter(value, index) {
    //insert node after index
    if (this.head === null) {
      console.log("InsertAfter: no node present.");
      return;
    }

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode !== null && currentIndex < index) {
      if (currentIndex === index - 1) {
        let newNode = new Node(value, null);

        newNode.nextNode = currentNode.nextNode;
        currentNode.nextNode = newNode;
        console.log("InsertAfter newNode:", newNode.value);
        return newNode.value;
      }
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    console.log(`InsertAfter: No node at index ${index}`);
    return;
  }

  removeAt(index) {
    // remove node at index
    if (this.head === null) {
      console.log("RemoveAt: No Node to remove.");
      return;
    }

    let previousNode = null;
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode !== null && currentIndex < index) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    if (currentIndex === index) {
      if (previousNode === null) {
        this.head = currentNode.nextNode;
      } else {
        previousNode.nextNode = currentNode.nextNode;
      }
      console.log(`RemoveAt: index ${index} removed`);
    } else {
      console.log(`RemoveAt: ${index} is greater than node list. `);
    }
  }
}

let testList = new LinkedList();
testList.addEnd(1);
testList.addEnd(2);
testList.addEnd(3);
testList.addEnd(4);
testList.toString();
console.log("NodeList:", testList);
testList.totalNodes();
testList.headNode();
testList.tailNode();
testList.nodeAtIndex(3);
testList.removeLastNode();
testList.toString();
testList.contains(3);
testList.indexValue(2);
testList.insertAfter("X", 2);
testList.toString();
testList.removeAt(2);
console.log("NodeList:", testList);
testList.toString();
