
let scr = document.getElementById("screen") ; 

class Queue {
    constructor() {
        this.elements = [];
    }

    enqueue(value) {
        this.elements.push(value);
        this.updateQueueVisualization();
    }

    dequeue() {
        if (this.isEmpty()) {
            scr.innerText = "Queue is Empty" ; 

            return;
        }
        const dequeuedElement = this.elements.shift();
        this.updateQueueVisualization();
        return dequeuedElement;
    }

    peek() {
        if (this.isEmpty()) {
            scr.innerText = "Queue is Empty" ; 

            return;
        }
        return this.elements[0];
    }

    size() {
        return this.elements.length;
    }

    isEmpty() {
        return this.elements.length === 0;
    }

    updateQueueVisualization() {
        const queueContainer = document.querySelector('.queue');
        queueContainer.innerHTML = '';
        this.elements.forEach((element) => {
            const queueElement = document.createElement('div');
            queueElement.className = 'queue-element';
            queueElement.textContent = element;
            queueContainer.appendChild(queueElement);
        });
        document.querySelector('#queue-size').textContent = this.size();
        document.querySelector('#queue-elements').textContent = this.elements.join(', ');
    }
}

const queue = new Queue();

document.querySelector('.enqueue').addEventListener('click', () => {
    const inputValue = document.querySelector('#enqueue-input').value;
    if (inputValue) {
        queue.enqueue(inputValue);
        document.querySelector('#enqueue-input').value = '';
    }
});

document.querySelector('.dequeue').addEventListener('click', () => {
    queue.dequeue();
});

document.querySelector('.peek').addEventListener('click', () => {

    scr.innerText = `Peek: ${queue.peek()}` ; 

});

document.querySelector('.size').addEventListener('click', () => {
    scr.innerText = `Size: ${queue.size()}`

});

document.querySelector('.isempty').addEventListener('click', () => {
    scr.innerText = `Is Empty: ${queue.isEmpty()}` ; 

});

let area = document.getElementById("code") ; 

let btn = document.querySelector(".enqueue") ; 
btn.addEventListener('click', () => {
    area.style.opacity = "100%" ; 
}); 
