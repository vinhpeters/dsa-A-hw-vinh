const data = {
  results: {
    payload: [
      {
        profile: {
          name: 'Tony',
          rank: 9,
          favorites: [
            {
              title: 'Spider-Man',
              rating: 5
            },
            {
              title: 'Spongebob',
              rating: 9
            }
          ]
        }
      },
      {
        profile: {
          name: 'John',
          rank: 2,
          favorites: [
            {
              title: 'Hulk',
              rating: 1
            },
            {
              title: 'Top Gun',
              rating: 8
            }
          ]
        }
      }
    ]
  }
};

// Problem 1
const merge = (arr1, arr2, opt) => {
  let merged = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length || j < arr2.length) {
    if (i < arr1.length && j < arr2.length) {

      if (opt == 1) {
        if (arr1[i].profile.rank < arr2[j].profile.rank) {
          merged.push(arr1[i]);
          i++;
        } else {
          merged.push(arr2[j]);
          j++;
        }
      }

      else if (opt == 2) {
        if (arr1[i].profile.favorites[0].rating < arr2[j].profile.favorites[0].rating || (arr1[i].profile.favorites[0].rating === arr2[j].profile.favorites[0].rating
          && arr1[i].profile.rank < arr2[j].profile.rank)) {
          merged.push(arr1[i]);
          i++;
        } else {
          merged.push(arr2[j]);
          j++;
        }
      }

    } else if (i < arr1.length) {
      merged.push(arr1[i]);
      i++;

    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  return merged;
}

const mergeSort = (arr, opt) => {

  if (arr.length <= 1) {
    return arr;
  }


  let mid = ~~arr.length / 2;

  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right, opt);
}

//By rank
console.log(mergeSort(data.results.payload, 1));
//By ratings and rank
console.log(mergeSort(data.results.payload, 2));



// Problem 2

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;

  }

}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;

  }

  push(val) {
    newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++
    return this;
  }

  pop() {

    if (!this.head) {
      return this.head;
    }

    let curr = this.head
    let newTail = curr

    while (curr.next) {
      newTail = curr
      curr = curr.next
    }

    this.tail = newTail
    this.tail.next = null;
    this.length--

    if (length === 0) {
      this.head = null;
      this.tail = null;
    }

    return curr
  }
}


// Problem 3

/* Use 2 pointers and keep running total of the max area */

const maxArea = (height) => {
  let left = 0;
  let right = height.length;
  let area = 0;
  let distance = right - left;
  let maxA = area;

  while (left < right) {

    distance = right - left;
    area = Math.min(height[left], height[right]) * distance;


    if (area > maxA) {
      maxA = area;
    }

    left++;
    right--;

  }

  return maxA;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log('Problem 3')
console.log(maxArea(height))

