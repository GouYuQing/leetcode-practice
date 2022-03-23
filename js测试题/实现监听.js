class People {
	constructor(name) {
		this.name = name;
		this.eventList = {};
	}

	//监听
	on(type, callback) {
		if (this.eventList[type] === undefined) {
			this.eventList[type] = [callback];
		} else {
			this.eventList[type].push(callback);
		}
	}

	//执行函数
	emit(type, option) {
		if (this.eventList && this.eventList[type]) {
			for (let i in this.eventList[type]) {
				this.eventList[type][i](option);
			}
		}
	}

	//移除监听
	off(type, callback) {
		if (this.eventList && this.eventList[type]) {
			for (let i in this.eventList[type]) {
				if (this.eventList[type][i] === callback) {
					this.eventList[type].splice(i, 1);
				}
			}
		}
	}

	sayHi() {
		console.log(`Hi, I am ${this.name}`);
	}
}

/* 以下为测试代码 */
const say1 = greeting => {
	console.log(`${greeting}, nice meeting you.`);
};

const say2 = greeting => {
	console.log(`${greeting}, nice meeting you, too.`);
};

const jerry = new People('Jerry');
jerry.sayHi();
// => 输出：'Hi, I am Jerry'

jerry.on('greeting', say1);
jerry.on('greeting', say2);

jerry.emit('greeting', 'Hi');
// => 输出：'Hi, nice meeting you.' 和 'Hi, nice meeting you, too'

jerry.off('greeting', say1);
jerry.emit('greeting', 'Hi');
// => 只输出：'Hi, nice meeting you, too'
