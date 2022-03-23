/**题目二 promise*/
const sleep = duration => {
	console.log('123');
	new Promise(resolve => {
		setTimeout(() => {
			resolve();
		}, duration);
	}).then(() => {
		console.log('456');
	});
};
sleep(300);

const anyFunc = async () => {
	console.log('123'); // 输出 123
	await sleep(300); // 暂停 300 毫秒
	console.log('456'); // 输出 456，但是距离上面输出的 123 时间上相隔了 300 毫秒
};
