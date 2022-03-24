/**
 * 实现一个方法，找出数组中第k大的和第m大的数字相加之和
 */
const findTopSum = (arr, k, m) => {
	let new_arr = [...new Set(arr)].sort((a, b) => b - a);
	let a = new_arr[k - 1],
		b = new_arr[m - 1];
	let count = 0,
		count1 = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == a) count++;
		if (arr[i] == b) count1++;
	}
	return a * count + b * count1;
};
console.log(findTopSum([1, 2, 4, 4, 3, 5], 2, 4));
