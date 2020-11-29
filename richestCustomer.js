const maximumWealth = function(accounts) {
  let max = 0, current = 0;
  for(let i = 0; i < accounts.length; i++) {
    for(let j = 0; j < accounts[i].length; j++) {
      current += accounts[i][j];
    }
    if(current > max) {
      max = current;
    }
    current = 0;
  }

  return max;
};

// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
let accounts = [[1,2,3],[3,2,1]];
console.log(maximumWealth(accounts))

// Input: accounts = [[1,5],[7,3],[3,5]]
// Output: 10
accounts = [[1,5],[7,3],[3,5]];
console.log(maximumWealth(accounts))

// Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
// Output: 17
accounts = [[2,8,7],[7,1,3],[1,9,5]];
console.log(maximumWealth(accounts))
