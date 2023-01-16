var topKFrequent = function (nums, k) {
  const freq = {};
  for (let i = 0; i < nums.length; i++) {
    if (!freq[nums[i]]) freq[nums[i]] = 0;
    freq[nums[i]]++;
  }
  const values = Object.entries(freq).sort((a, b) => b[1] - a[1]);
  const result = [];
  // console.log(freq, values);
  for (const value of values) {
    result.push(value[0]);
  }
  return result.slice(0, k).sort();
};
// The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.
// Object.entries() 메서드는 for...in와 같은 순서로 주어진 객체 자체의 enumerable 속성 [key, value] 쌍의 배열을 반환합니다.
/////////////////////////////////////////////////////////////////////////////////////////
// sol 1 -> fail
// var topKFrequent = function(nums, k) {
//     const freq = {};
//     for(let i = 0; i < nums.length; i++) {
//         if (!freq[nums[i]]) freq[nums[i]] = 0;
//         freq[nums[i]]++;
//     }
//     const values = Object.values(freq).sort((a, b) => freq[a] - freq[b]).slice(0, k);
//     return values.map(value => freq[value]);

// };
// => nums = [-1, -1], k=1
////////////////////////////////////////////////////////////////////////////////////
// sol 2 -> fail
// var topKFrequent = function(nums, k) {
//     if (k == 1) { // nums = [-1, -1], k=1에 걸려서 추가
//         return [nums[0]];
//     }
//     const freq = {};
//     // for(let i = 0; i < nums.length; i++) {
//     //     if (!freq[nums[i]]) freq[nums[i]] = 0;
//     //     freq[nums[i]]++;
//     // }
//     // console.log(freq); //{ '1': 3, '2': 2, '3': 1 }
//     // const values = Object.values(freq).sort((a, b) => freq[a] - freq[b]).slice(0, k);
//     const test = [1,2];
//     for(let i = 0; i< test.length; i++) {
//         if (!freq[test[i]]) freq[test[i]] = 0;
//         freq[test[i]]++;
//     }
//     const values = Object.keys(freq).sort((a, b) => freq[a] - freq[b]).slice(0, k);
//     // console.log(values);
//     return values
//     // return values.map(value => freq[value]);
//     // // nums=[1,2], k=2
//     // //     const values = Object.values([1,2]).sort((a, b) => [1,2][a] - [1,2][b]);
//     // //     console.log(values.slice(0,k)); // [1, 2]나오는데 왜...
// };
/////////////////////////////////////////////////////////////////////////////////////
// sol 3 -> fail : nums = [3,0,1,0], k = 1
// var topKFrequent = function(nums, k) {
//     if (k == 1) { // nums = [-1, -1], k=1에 걸려서 추가
//         return [nums[0]];
//     }
//     const freq = {};
//     for(let i = 0; i< nums.length; i++) {
//         if (!freq[nums[i]]) freq[nums[i]] = 0;
//         freq[nums[i]]++;
//     }
//     const values = Object.keys(freq).slice(0, k);
//     console.log(freq, values);
//     return values;
// };
///////////////////////////////////////////////////////////////////////////////////////
// sol 4 -> fail : nums = [4,1,-1,2,-1,2,3], k = 2
// var topKFrequent = function(nums, k) {
//     const freq = {};
//     for(let i = 0; i< nums.length; i++) {
//         if (!freq[nums[i]]) freq[nums[i]] = 0;
//         freq[nums[i]]++;
//     }
//     const values = Object.keys(freq).slice(0, k);
//     // console.log(freq, values);
//     return values;
// };
///////////////////////////////////////////////////////////////////////////////////
