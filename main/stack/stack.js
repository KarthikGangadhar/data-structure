/** 
 * These are first-in last-out type of service
 * functions: push, pop, peek, length(size)
 **/

module.exports = class Stack {
    constructor() {
        this.count = 0;
        this.storage = {};
    };

    //Remove and returns the top most data
    pop() {
        if (this.count === 0) {
            return undefined;
        };

        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    };

    //Add the data to the top
    push(data) {
        this.storage[this.count] = data;
        this.count++;
    };

    //Returns the top most data value
    peek() {
        if (this.count === 0) {
            return undefined;
        }
        return this.storage[this.count - 1];
    };

    //Returns size
    length() {
        return this.count;
    };

};