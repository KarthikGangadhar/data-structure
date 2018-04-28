/** 
 * These are first-in last-out type of service
 * functions: push, pop, peek, length(size)
 * An arrow function expression has a shorter syntax than a function expression and does not have its own this, arguments, super, or new.target. 
 * These function expressions are best suited for non-method functions, and they cannot be used as constructors.
 **/

module.exports = function stackProto() {
    this.count = 0;
    this.storage = {};


    // Add value on to the end of th stack
    this.push = (data) => {
        this.storage[this.count] = data;
        this.count++;
    };

    //Remove and return value at the end of the stack
    this.pop = () => {
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    // Returns the value at the end of the stack 
    this.peek = () => {
        if (this.count === 0) {
            return undefined;
        }
        return this.storage[this.count - 1];
    };

    this.length = () => {
        return this.count;
    };
};