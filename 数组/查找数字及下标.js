/*
 * 今天也是有进步的一天
 * 每天起床第一句，先给自己打个气*/
function findNum(arr, num) {
	let low = 0,
		high = arr.length;
	while (low <= high) {
		let mid = Math.floor((low + high) / 2);
		if (num >= arr[mid]) {
			low = mid + 1;
		}
		if (num < arr[mid]) {
			high = mid - 1;
		}
	}
	if (high >= 0 && arr[high] == num) {
		return high;
	}
	return -1;
}
console.log(findNum([1, 2, 3, 4, 5, 6, 6, 6, 6, 7, 7, 8, 9, 10, 11], 7));
