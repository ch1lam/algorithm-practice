/*
 * @Description  : 选择排序
 * @Author       : ch1lam
 * @Date         : 2022-05-03 18:49:26
 * @LastEditTime : 2022-05-04 14:33:46
 * @LastEditors  : chilam
 * @FilePath     : \algorithm-practice\sort\selectSort.js
 */

const selectSort = (arr) => {
  let len = arr.length;
  let minIndex;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        // mark down minIndex
        minIndex = j;
      }
    }
    // swap
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
};

let testArray = [1, 5, 9, 4, 7, 3, 6, 0, 2, 8];

console.log(selectSort(testArray));
