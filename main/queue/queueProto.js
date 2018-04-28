/**
 * A queue is a first-in first-out storage data sturcture
 * functions: enqueue, dequeue, isEmpty, first and size 
 **/

module.exports = function Queue() {
    this.collection = [];

    // pushes an element to the bottom
    this.enqueue = (data) => {
        this.collection.push(data);
    }

    //removes an element from the top
    this.dequeue = () =>{
        this.collection.shift();
    }

    //
};