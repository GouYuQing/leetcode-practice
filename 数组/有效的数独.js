/**
 * @param {character[][]} board
 * @return {boolean}
 * 数字 1-9 在每一行只能出现一次。
 * 数字 1-9 在每一列只能出现一次。
 * 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 */
let board = [
	["5", "3", ".", ".", "7", ".", ".", ".", "."],
	["6", ".", ".", "1", "9", "5", ".", ".", "."],
	[".", "9", "8", ".", ".", ".", ".", "6", "."],
	["8", ".", ".", ".", "6", ".", ".", ".", "3"],
	["4", ".", ".", "8", ".", "3", ".", ".", "1"],
	["7", ".", ".", ".", "2", ".", ".", ".", "6"],
	[".", "6", ".", ".", ".", ".", "2", "8", "."],
	[".", ".", ".", "4", "1", "9", ".", ".", "5"],
	[".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
var isValidSudoku = function (board) {
	let total_count = 0;
	let rows = Array.from(Array(9), () => new Set());
	let cols = Array.from(Array(9), () => new Set());
	let nine_arr = Array.from(Array(9), () => new Set());
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (board[i][j] !== ".") {
				rows[i].add(board[i][j]);
				cols[j].add(board[i][j]);
				nine_arr[Math.floor(i / 3) * 3 + Math.floor(j / 3)].add(board[i][j]);
				total_count++;
			}
		}
	}
	console.log(rows, cols, nine_arr); //将数分别放到set数组里面，横向，纵向，九宫格，只需要比较数量大小，因为set会主动去重
	function countNumber(arr) {
		let total = 0;
		for (let i = 0; i < arr.length; i++) {
			total += arr[i].size;
		}
		return total;
	}
	return (
		countNumber(rows) === total_count && countNumber(cols) === total_count && countNumber(nine_arr) === total_count
	);
};
console.log(isValidSudoku(board));
