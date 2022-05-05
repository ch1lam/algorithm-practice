/*
 * @Description  : 插入排序
 * @Author       : ch1lam
 * @Date         : 2022-05-05 15:29:07
 * @LastEditTime : 2022-05-05 16:18:42
 * @LastEditors  : chilam
 * @FilePath     : \algorithm-practice\sort\insertionSort.js
 */

const testArray = [1, 5, 9, 4, 7, 3, 6, 0, 2, 8];

/**
 * 基本实现
 */
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    // 待排序序列第一个元素
    const temp = arr[i];
    // 有序序列最后一个元素下标
    let preIndex = i - 1;
    // 找适当的插入位置
    while (temp < arr[preIndex]) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex -= 1;
    }
    // 即使值相同也是插在arr[preIndex]后面
    arr[preIndex + 1] = temp;
  }
  return arr;
};

console.log(insertionSort(testArray));
