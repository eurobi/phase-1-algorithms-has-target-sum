function hasTargetSum(array, target) {
  for(element of array){
    let elementIndex = array.indexOf(element)
    for(let i = 0; i < array.length; i++){
      if(i !== elementIndex){
        if(element + array[i] === target){
          return true
        }
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  [3, 4, 7, 8, 11, 12] 10
  mid = 2

*/

/* 
1. .sort.reverse to get array ascending
2. mid point = floor(length / 2)
3. does mid point + mid+1 = target (return if does)
4. if the sum > target we need to look at the lower numbers (mid = mid-1) slice(-mid)
5. if the sum < target we need to look at higher numbers (mid = mid+1) slice(mid)

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
