/*
 * @Description  : 选择排序
 * @Author       : ch1lam
 * @Date         : 2022-05-03 18:49:26
 * @LastEditTime : 2022-05-05 16:18:28
 * @LastEditors  : chilam
 * @FilePath     : \algorithm-practice\sort\selectSort.js
 */

const testArray = [1, 5, 9, 4, 7, 3, 6, 0, 2, 8];

const selectSort = (arr) => {
  const len = arr.length;
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


console.log(selectSort(testArray));