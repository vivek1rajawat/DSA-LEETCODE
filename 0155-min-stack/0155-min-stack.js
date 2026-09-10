
var MinStack = function() {
    this.s = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.s.length === 0){
        this.s.push([val,val])
    }
    else{
        let preVal = this.s[this.s.length-1][1];
        let minVal = Math.min(val, preVal);
        this.s.push([val, minVal]);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.s.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.s[this.s.length-1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.s[this.s.length-1][1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */