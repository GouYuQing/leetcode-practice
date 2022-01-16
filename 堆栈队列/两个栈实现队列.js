var CQueue = function() {
    this.stack_one = [];
    this.stack_two = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stack_one.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if(this.stack_two.length){
        return this.stack_two.pop();
    }else{
        while(this.stack_one.length){
            this.stack_two.push(this.stack_one.pop())
        }
        if(!this.stack_two.length){
            return -1;
        }else{
            return this.stack_two.pop();
        }
    }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */