/*
 * @Description  : 冒泡排序
 * @Author       : ch1lam
 * @Date         : 2022-05-03 17:57:23
 * @LastEditTime : 2022-05-04 23:04:34
 * @LastEditors  : chilam
 * @FilePath     : \algorithm-practice\sort\bubbleSort.js
 */
// 基本实现
const bubbleSort = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

// 缓存pos
// 双向遍历


var testArray = [1, 5, 9, 4, 7, 3, 6, 0, 2, 8];

console.log(bubbleSort(testArray));
