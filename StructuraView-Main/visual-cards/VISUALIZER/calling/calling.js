
let value = document.getElementById("value") ; 

let ref = document.getElementById("reference") ; 

let area = document.getElementById("code") ; 

let comp = document.getElementById("comp") ; 

let head = document.getElementById("heading") ;

head.innerText = "Call by Value in C++" ; 

comp.innerText = `
In the call-by-value method, function arguments are passed by copying the value of the actual parameter, ensuring the original values remain unchanged. The value is copied to the formal parameter.

One is the original copy and the other is the function copy. Any changes made to the parameters within the function do not change the original values outside the function
`  ; 


area.textContent = `
    
    
    // C++ program to demonstrate call by value 

        #include <iostream> 
        using namespace std; 

    // function to update the original value ..

        void increment(int num) { 

            num++; 
            cout << num << endl; 

        } 


        int main() 
        { 
            int number = 5; 

            // Passing 'number' by value 
            increment(number); 

            cout << number << endl; 
            return 0; 
        }   

`



value.addEventListener('click', () => {

    comp.innerText = `
    In the call-by-value method, function arguments are passed by copying the value of the actual parameter, ensuring the original values remain unchanged. The value is copied to the formal parameter.

    One is the original copy and the other is the function copy. Any changes made to the parameters within the function do not change the original values outside the function
`  ; 

    head.innerText = "Call by Value in C++" ; 

    area.textContent = `
    
    
    // C++ program to demonstrate call by value 
  
        #include <iostream> 
        using namespace std; 
  
    // function to update the original value ..

        void increment(int num) { 
    
            num++; 
            cout << num << endl; 

        } 
  

        int main() 
        { 
            int number = 5; 

            // Passing 'number' by value 
            increment(number); 

            cout << number << endl; 
            return 0; 
        }   

    `




}); 




ref.addEventListener('click', () => {

    comp.innerText = `

    In the call-by-reference method, the memory address (reference) of the actual parameter is passed to the function, allowing direct access and modification of the original values. The actual and the formal parameters point to the same memory address. Any changes made to the parameters within the function are directly reflected in the original values outside the function.

    ` ; 

    head.innerText  = "Call by Reference in C++" ; 

    area.textContent = `
    
    
    // C++ program to demonstrate the working of call by 
    // reference 
  
        #include <iostream> 
        using namespace std; 
  
    // function to update the original value ..

        void increment(int& num) { 

            num++; 
            cout << num << endl; 

        } 

  
        int main() 
        { 
            int number = 5; 

            // Passing 'number' by reference 
            increment(number); 

            cout << number << endl; 
            return 0; 
        }
    
    `


}); 