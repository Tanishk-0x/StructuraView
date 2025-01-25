
//kuchh kuchh variables declare krenge .. 
const push = document.querySelector(".push") ; 
const pop = document.querySelector(".pop") ; 
const reset = document.querySelector(".reset") ; 
const bucket = document.querySelector(".main-stack-bucket") ; 
const input = document.querySelector(".text") ; 
const massage = document.querySelector(".massage") ; 
const massageBox = document.querySelector(".massage-box") ;
const box = document.querySelectorAll(".box") ; 

// declare krenge stack ko .. 
const stack = [] ; 

// initially sari buttons ko disabled (off) kr denge .. 
const buttonDisable = () => {
    push.disabled = true ; 
    push.classList.add("disable-button") ; 
    pop.disabled = true ; 
    pop.classList.add("disable-buttons") ; 
    reset.disabled = true ; 
    reset.classList.add("disable-button") ; 
    input.disabled = true ; 
}; 


// Enable all the buttons .. 
const buttonEnable = () => {
    push.disabled = false ;
    push.classList.remove("disable-button")  ; 
    pop.disabled = false ;
    pop.classList.remove("disable-button")  ; 
    reset.disabled = false ;
    reset.classList.remove("disable-button")  ; 
    input.disabled = false ; 
}; 


// jab push button ko click krenge to ek function banayenge .. 
push.addEventListener("click", () => {



    // agar stack pura bhara jaye .. (stack overflow) . 
    if( stack.length == 5 ) {
        input.value = "" ; 
        massage.innerHTML = "Stack_OverFlow" ; 
        massageBox.classList.add("error-massage") ; 
        setTimeout( () => {
            massageBox.classList.remove("error-massage") ; 
        }, 1200); 
        return ; 
    }


    const itemValue = Math.floor(Math.random() * 50) ; // storing the input value .. 
    stack.push(itemValue) ; // pushing into stack .. 

    // new element ko create krenge .. 
    const element = document.createElement("div") ; 
    element.classList.add("ele") ; 
    element.innerText = stack[stack.length - 1] ; 
    bucket.appendChild(element) ; 

    // update kr denge top ko .. 
    box[0].innerHTML = stack[stack.length - 1] ; 

    // clear the input box .. 
    input.value = "" ; 

    // pushed element ke liye animation denge .. 
    element.classList.add("ele-add") ; 

    // diable all buttons .. 
    buttonDisable() ; // calling .... 

    // element push krne ke baad .. 
    setTimeout(() => {

        // animation removed .. 
        element.classList.remove("ele-add") ; 

        // updating the last pushed item 
        box[1].innerHTML = itemValue ; 

        // massage ko display krenge screen pe .. 
        massage.innerHTML = ` ${itemValue} is Pushed.` ;

        // on all the buttons 
        buttonEnable() ; 
    }, 1500) ; 
});


// jab user pop button ko click krega .. 
pop.addEventListener("click", () => {

    // agar stack empty he to .. 
    if ( stack.length == 0 ) {
        massageBox.classList.add("error-massage");
        massage.innerHTML = "Stack UnderFlow (stack is already empty)" ; 
        setTimeout(() => {
            massageBox.classList.remove("error-massage") ; 
        }, 1200) ; 
        return ; 
    }

    // adding pop animation 
    bucket.lastElementChild.classList.add("ele-remove") ; 

    buttonDisable() ; 

    setTimeout(() => { 

    // deleting .. 
    bucket.removeChild(bucket.lastElementChild) ; 

    const itemValue = stack.pop() ; 
    
    // updating poped .. 
    box[2].innerHTML = itemValue ; 
    // update krenge top ko .. 
    if ( stack.length == 0 ) {
        box[0].innerHTML = "" ; 
    }
    else{
        box[0].innerHTML = stack[stack.length - 1] ; 
    }

    // screen 
    massage.innerHTML = `${itemValue} is Poped.`

    buttonEnable() ; 
}, 1500) ; 
}); 


// reset .. 
reset.addEventListener("click", () => {

    // array ko clear denge .. 
    while (stack.length > 0){
        stack.pop() ; 
    }

    // sari screen ko empty point out kr denge .. 
    box[0].innerHTML = "" ; 
    box[1].innerHTML = "";
    box[2].innerHTML = "";
    massage.innerHTML = "";

    // bucket se hata denge ..
    while ( bucket.firstChild) {
        bucket.removeChild(bucket.firstChild) ; 
    }
});
