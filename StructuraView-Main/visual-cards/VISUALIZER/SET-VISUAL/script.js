
let display = document.getElementById("screen") ; 

let opa = document.getElementById("add-btn") ; 

let one = document.getElementById("spn") ; 
let two = document.getElementById("opara") ; 
let three = document.getElementById("tpara") ; 
let four = document.getElementById('imgs') ; 

class Set {
    constructor() {
        this.elements = [];
    }

    add(value) {
        if (!this.elements.includes(value)) {
            this.elements.push(value);
            this.elements.sort((a, b) => a - b);
            this.render();
        }
    }

    get(value) {
        const index = this.elements.indexOf(value);
        if (index !== -1) {
            return this.elements[index];
        } else {
            return null;
        }
    }

    getSmaller(value) {
        const smallerElements = this.elements.filter((element) => element < value);
        return smallerElements;
    }

    getGreater(value) {
        const greaterElements = this.elements.filter((element) => element > value);
        return greaterElements;
    }

    delete(value) {
        const index = this.elements.indexOf(value);
        if (index !== -1) {
            this.elements.splice(index, 1);
            this.render();
        }
    }

    render() {
        const setElement = document.querySelector(".set");
        setElement.innerHTML = "";
        this.elements.forEach((element) => {
            const elementElement = document.createElement("div");
            elementElement.classList.add("element");
            const valueElement = document.createElement("span");
            valueElement.classList.add("element-value");
            valueElement.textContent = element;
            elementElement.appendChild(valueElement);
            setElement.appendChild(elementElement);
        });
    }
}

const set = new Set();

document.getElementById("add-btn").addEventListener("click", () => {
    const value = parseInt(document.getElementById("value-input").value);
    set.add(value);
    document.getElementById("value-input").value = "";
});

document.getElementById("get-btn").addEventListener("click", () => {
    const value = parseInt(document.getElementById("value-input").value);
    const result = set.get(value);

    display.innerText = ` ${result !== null ? "Found" : "Not Found"}`;

    document.getElementById("value-input").value = "";
});

document.getElementById("get-smaller-btn").addEventListener("click", () => {
    const value = parseInt(document.getElementById("value-input").value);
    const result = set.getSmaller(value);

    display.innerText = `  ${result.join(" , ")}` ; 

    document.getElementById("value-input").value = "";
});

document.getElementById("get-greater-btn").addEventListener("click", () => {
    const value = parseInt(document.getElementById("value-input").value);
    const result = set.getGreater(value);

    display.innerText = ` ${result.join(", ")}`;

    document.getElementById("value-input").value = "";
});

document.getElementById("delete-btn").addEventListener("click", () => {
    const value = parseInt(document.getElementById("value-input").value);
    set.delete(value);
    document.getElementById("value-input").value = "";
});

opa.addEventListener('click', () => {

    one.style.opacity = "100%" ; 
    two.style.opacity = "100%" ; 
    three.style.opacity = "100%" ; 
    four.style.opacity = "100%" ; 

}); 