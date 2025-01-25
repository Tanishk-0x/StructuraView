
// variable declaration ..
const input = document.getElementById("input");
const addBtn = document.getElementById("add_button");
const removeBtn = document.getElementById("remove_button");
const clearBtn = document.getElementById("clear_button");
const tableCells = document.querySelectorAll("th");
const header = document.querySelector(".header");
const controls = document.querySelector(".controls");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");



const displayHeight = (val = -1) => {;
    let x = 120;
    let y = 515;
    if (val === -1) {
        x = 12;
        y = 520;
    };

    //-----------------------------------------------------------
    ctx.font = "normal 12pt Calibri";
    ctx.fillStyle = "#9e9e9e";
    ctx.stroke();
};


const addedElems = (result) => {
    tableCells.forEach((cell, i) => {
        cell.textContent = result[i] >= 0 ? result[i] < 100 ? result[i] : "" : "";
    });
};



class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    };
};



class MinHeap  {

 };

//--------------------------------------------------------------------

class BST extends MinHeap {
    constructor() {
        super()
        this.display = "bt";
        this.root = null;
        this.btResult = null;
        this.btMaxReached = false;
    };
    
//----------------------------------------------------------------------------------------------

    add(data) {
        let node = this.root;
        let count = -1;

        if(!node) {
            this.root = new Node(data);
            count++;
            this.drawTree();
            return this.root;

        } else {
            const searchTree = (node, count) => {
                if (data < node.data) {
                    if (node.left === null) {
                        if (count < 3) {
                            node.left = new Node(data);
                        };
                        return;

                    } else {
                        searchTree(node.left, count+1);
                    };

                } else if (data > node.data) {
                    if (node.right === null) {
                        if (count < 3) {
                            node.right = new Node(data);
                        };
                        return;

                    } else {
                        searchTree(node.right, count+1);
                    };
                } else{
                    return null;
                };
            };
            searchTree(node, count);
            this.drawTree();
            return this.root
        };
    };

    //----------------------------------------------------------------------------------------------

    remove(data) {
        const removeNode = (node, data) => {
            if (node === null) {
                return null;
            };

            if (data === node.data) {
                if (node.left === null && node.right === null) {
                    return null;

                } else if (node.left === null) {
                    return node.right;

                } else if (node.right === null) {
                    return node.left;

                } else {
                    let tempNode = node.right;

                    while (tempNode.left !== null){
                        tempNode = tempNode.left;
                    };

                    node.data = tempNode.data;
                    node.right = removeNode(node.right, tempNode.data);
                    return node;
                };  
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;

            } else if (data > node.data) {
                node.right = removeNode(node.right, data);
                return node;
            };
        };
        this.root = removeNode(this.root, data);
        this.drawTree();
    };

    //--------------------------------------------------------------------------------------
    drawTree() {
        ctx.clearRect(0, 0, 1900, 533);
        let height = 0;
        let radius = window.innerWidth < 850 ? 12 : 20;
    	
        const draw = (data, level, direction, x , y) => {
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI*2, false);
            ctx.lineWidth = 3;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = "bold 12pt Calibri";

            //------------------------------
            ctx.fillStyle = "white";
            ctx.fillText(data, x, y);
            ctx.stroke();

	    let xStart;
            let squeezeBy = 0;
	    if (level-1 > height) height = level-1;

            if (1180-window.innerWidth > 0) {
                squeezeBy = (1180-window.innerWidth)/((level-1)*5)
            };

            if (level > 1) {
                
                if (level===2) {
                    if (direction === "left") {xStart=x+280-squeezeBy*1.2}
                    if (direction === "right") {xStart=x-280+squeezeBy*1.2}
                };

                if (level===3) {
                    if (direction === "left") {xStart=x+140-squeezeBy*1.2}
                    if (direction === "right") {xStart=x-140+squeezeBy*1.2}
                };

                if (level===4) {
                    if (direction === "left") {xStart=x+70-squeezeBy*0.9}
                    if (direction === "right") {xStart=x-70+squeezeBy*0.9}
                };

                if (level===5) {
                    if (direction === "left") {xStart=x+30-squeezeBy*0.5}
                    if (direction === "right") {xStart=x-30+squeezeBy*0.5}
                };
    
                ctx.moveTo(xStart, y-(100-radius));
                ctx.lineTo(x, y-radius);
                ctx.stroke();
            };
        };
        

        if (this.display === "bt") {
            if (this.root === null) {
                addedElems(0);
                return null;
            };
        } 

        let result = [];
        const traversePreOrder = (node, level, direction, x, y) => {
            if (level <= 5) {
                result.push(node.data);
                draw(node.data, level, direction, x, y);
                let squeezeBy = 0;

                 if (1180-window.innerWidth > 0) {
                    squeezeBy = (1180-window.innerWidth)/(level*5)
                };

                let xPlusMinus = 280;

                if (level===1) {xPlusMinus = 280-squeezeBy*1.2} 
                if (level===2) {xPlusMinus = 140-squeezeBy*1.2} 
                if (level===3) {xPlusMinus = 70-squeezeBy*0.9} 
                if (level===4) {xPlusMinus = 30-squeezeBy*0.5}

                node.left && traversePreOrder(node.left, level+1, "left", x-xPlusMinus, y+100);
                node.right && traversePreOrder(node.right, level+1, "right", x+xPlusMinus, y+100);
            };
        };
        if (this.display === "bt") {
            traversePreOrder(this.root, 1,  null, canvas.width/2, 50);
            this.btResult = result;
            displayHeight(height);
        } 
        addedElems(result);
    };
};



const bst = new BST();

function onLoad() {
    canvas.width = window.innerWidth-20;
};

onLoad();

function onResize() {
    canvas.width = window.innerWidth-20;
    bst.drawTree();
};

window.addEventListener("resize", onResize)


const displayBT = () => {
    
    controls.removeChild(controls.childNodes[0]);
    tableCells.forEach((cell) => {
        cell.textContent = "";
    });
    removeBtn.textContent = "Remove";

    const btBullets = [""];

    const infoBullets = document.getElementById("info_bullets");



    infoBullets.childNodes.forEach((bullet, i) => {
        bullet.textContent = btBullets[i];
    });

    ctx.clearRect(0, 0, 1900, 533);
    if (bst.root) {
        bst.drawTree();
    };
};

displayBT();

input.addEventListener("change", (e) => {
    if (e.target.value < 0 || e.target.value > 99) {
        input.value = 0;
    };
});

addBtn.addEventListener("click", () => {
    if (bst.display === "bt") {
        bst.add(Number(input.value));
    }
});

removeBtn.addEventListener("click", () => {
    if (bst.display === "bt") {
        bst.remove(Number(input.value));
    } 
});

clearBtn.addEventListener("click", () => {
    if (bst.display === "bt") {
        bst.root = null;
        bst.drawTree();
    } 
});

