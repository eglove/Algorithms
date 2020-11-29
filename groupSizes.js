const groupThePeople = function(groupSizes) {
  let grouped = new Map();
  let matrixArray = [];
  let maxSize = 0;
  for(let i = 0; i < groupSizes.length; i++) {
    if (!grouped.has(groupSizes[i])) {
      grouped.set(groupSizes[i], i.toString());
    } else {
      grouped.set(groupSizes[i], grouped.get(groupSizes[i]) + ',' + i.toString())
    }

    if(groupSizes[i] > maxSize) {
      maxSize = groupSizes[i];
    }
  }

  const keysSorted = Array.from(grouped.keys()).sort();
  keysSorted.forEach(key => {
    const group = grouped.get(key).split(',');
    if(group.length <= key) {
      matrixArray.push(group);
    } else {
      let counter = 0;
      let subArray = [];
      for (let i = 0; i < group.length; i++) {
        if (counter < key) {
          subArray.push(group[i]);
        } else {
          matrixArray.push(subArray);
          counter = 0;
          subArray = [group[i]];
        }
        counter++;

        if(i === group.length - 1) {
          matrixArray.push(subArray);
        }
      }
    }
  })

  return matrixArray;
};

// Input: groupSizes = [3,3,3,3,3,1,3]
// Output: [[5],[0,1,2],[3,4,6]]
console.log(groupThePeople([3,3,3,3,3,1,3]))

// Input: groupSizes = [2,1,3,3,3,2]
// Output: [[1],[0,5],[2,3,4]]
console.log(groupThePeople([2,1,3,3,3,2]))
