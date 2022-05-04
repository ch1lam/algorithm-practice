/*
 * @Description  : 快速排序
 * @Author       : ch1lam
 * @Date         : 2022-05-04 14:30:34
 * @LastEditTime : 2022-05-05 01:33:35
 * @LastEditors  : chilam
 * @FilePath     : \algorithm-practice\sort\quickSort.js
 */
let testArray = [1, 5, 9, 4, 7, 3, 6, 0, 2, 8];

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

/**
 * 基本实现
 */
const quickSort = (arr) => {
  const left = [];
  const right = [];
  const pivot = arr.shift();

  if (arr.length < 2) return arr;

  arr.forEach((element) => {
    element < pivot ? left.push(element) : right.push(element);
  });

  return quickSort(left).concat(pivot, quickSort(right));
};

console.log(quickSort(testArray));

/**
 * 优化内存空间的消耗
 */
const quickSort2 = (arr, low = 0, high = arr.length - 1) => {
  if (low < high) {
    const pivot = partition(arr, low, high);

    quickSort2(arr, low, pivot - 1);
    quickSort2(arr, pivot + 1, high);
  }
  return arr;
};

const partition = (arr, low, high) => {
  let pivot = low;
  // 下标
  let index = low + 1;
  for (let i = index; i <= high; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      // 保证index是左边乱序中第一个元素的下标
      index += 1;
    }
  }
  swap(arr, pivot, index - 1);
  // 交换了位置，所以作为 pivot 的下标应该是 index - 1
  return index - 1;
};

console.log(quickSort2(testArray));
