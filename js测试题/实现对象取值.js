/**题目三 */
const deepGet = (obj, prop) => {
	let call_arr = prop.split('.');
	while (call_arr.length) {
		obj = obj[call_arr.shift()];
		if (!obj) {
			return undefined;
		}
	}
	return obj;
};

/** 以下为测试代码 */
deepGet(
	{
		school: {
			student: { name: 'Tomy' },
		},
	},
	'school.student.name'
); // => 'Tomy'

deepGet(
	{
		school: {
			students: [{ name: 'Tomy' }, { name: 'Lucy' }],
		},
	},
	'school.students[1].name'
); // => 'Lucy'

// 对于不存在的属性，返回 undefined
deepGet({ user: { name: 'Tomy' } }, 'user.age'); // => undefined
deepGet({ user: { name: 'Tomy' } }, 'school.user.age'); // => undefined
