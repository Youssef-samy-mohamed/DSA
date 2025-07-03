// last element enter he the first one leaving 


class MyStack {

    private queue1:number []
    private queue2:number []


    constructor() {
        this.queue1 = []
        this.queue2 = []
        
    }

    push(x: number): void {
        this.queue1.push(x)
    }

  pop(): number {
        while( this.queue1.length > 1 ){
            this.queue2.push(this.queue1.shift())
        }
    const popped = this.queue1.shift()
    //  swap queues 
    const temp = this.queue1
     this.queue1 = this.queue2
     this.queue2 = temp;

     return popped;

    }
  

    top(): number {
        while( this.queue1.length > 1 ){
            this.queue2.push(this.queue1.shift())
        }

    const topElement = this.queue1.shift();
    this.queue2.push(topElement)

// swap queues 
    const temp = this.queue1;
    this.queue1 = this.queue2;

    this.queue2 = temp;

    return topElement



    }

    empty(): boolean {
        return this.queue1.length === 0
    }


  
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */