/**题目四 函数组合*/
const combo = (...func) => {
	if (func.length === 0) {
		return arg => arg;
	}
	if (func.length === 1) {
		return func[0];
	}
	return func.reduce((a, b) => (...args) => a(b(...args)));
};
// const combo = (...args) => {
// 	return sub_args => {
// 		return args.reverse().reduce((acc, func) => {
// 			return func(acc);
// 		}, sub_args);
// 	};
// };

/* 以下为测试代码 */
const addOne = a => a + 1;
const multiTwo = a => a * 2;
const divThree = a => a / 3;
const toString = a => a + '';
const split = a => a.split('');

split(toString(addOne(multiTwo(divThree(666)))));
// => ["4", "4", "5"]

const testForCombo = combo(split, toString, addOne, multiTwo, divThree);
testForCombo(666);
// => ["4", "4", "5"]
