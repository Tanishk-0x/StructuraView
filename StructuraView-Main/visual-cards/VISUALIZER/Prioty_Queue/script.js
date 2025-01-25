let priorityQueue = [];
let dis = document.getElementById("display") ; 


function enqueue(priority, value) {
    priorityQueue.push({ priority, value });
    priorityQueue.sort((a, b) => b.priority - a.priority);
    renderQueue();
    animateEnqueue();
}

function dequeue() {
    if (priorityQueue.length === 0) {
        dis.innerText = "Queue is Empty"
        return;
    }
    priorityQueue.shift();
    renderQueue();
    animateDequeue();
}

function peek() {
    if (priorityQueue.length === 0) {
        dis.innerText = "Queue is Empty"

        return;
    }
    dis.innerText = `Priority: ${priorityQueue[0].priority}, Value: ${priorityQueue[0].value}` ; 
}

function renderQueue() {
    const queueContainer = document.querySelector(".queue");
    queueContainer.innerHTML = "";
    priorityQueue.forEach((element) => {
        const queueElement = document.createElement("div");
        queueElement.className = "queue-element";

        //-------------------------------------------
        queueElement.innerText = `P: ${element.priority}, V: ${element.value}`;


        queueContainer.appendChild(queueElement);
    });
}

function animateEnqueue() {
    const queueElements = document.querySelectorAll(".queue-element");
    queueElements.forEach((element) => {
        element.classList.add("animate");
        setTimeout(() => {
            element.classList.remove("animate");
        }, 500);
    });
}

function animateDequeue() {
    const queueElements = document.querySelectorAll(".queue-element");
    queueElements[0].classList.add("animate-dequeue");
    setTimeout(() => {
        queueElements[0].classList.remove("animate-dequeue");
    }, 500);
}

document.getElementById("enqueue-btn").addEventListener("click", () => {
    const priority = parseInt(document.getElementById("priority").value);
    const value = document.getElementById("value").value;
    if (priority && value) {
        enqueue(priority, value);
        document.getElementById("priority").value = "";
        document.getElementById("value").value = "";
    } else {
        dis.innerText = "Please Enter" ; 

    }
});

document.getElementById("dequeue-btn").addEventListener("click", dequeue);

document.getElementById("peek-btn").addEventListener("click", peek);


let area = document.getElementById("code") ; 

area.textContent = `

    // C++ program to demonstrate the use of priority_queue

    #include <iostream>
    #include <queue>
    using namespace std;

    // driver code
    int main(){

	int arr[6] = { 10, 2, 4, 8, 6, 9 };

	    // defining priority queue ..
	    priority_queue<int> pq;

	    // printing array ..
	    cout << "Array: ";
	    for (auto i : arr) {
		    cout << i << ' ';
	    }

	    cout << endl;

    // pushing array sequentially one by one

	    for (int i = 0; i < 6; i++) {
		    pq.push(arr[i]);
	    }


	// printing priority queue ..

	    cout << "Priority Queue: ";

	    while (!pq.empty()) {
		    cout << pq.top() << ' ';
		    pq.pop();
	    }

	    return 0;
    }


` ; 