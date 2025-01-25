
let screen = document.getElementById('screen') ; 
var container = document.getElementById("array");

// function array ko generate krne ke liye .. 
function generatearray() {

// Creating  array
var bar = [];


// array ke anadar random values ko push kr denge 
for (var i = 0; i < 20; i++) {
	// 1 ----- 100 
	var val = Number(Math.ceil(Math.random() * 100));
	bar.push(val);
	
    // arr[i].style.backgroundColor = "#ffff00" ; 
}

// sort a bars 
bar.sort(function (a, b) {
	return a - b;
});


for (var i = 0; i < 12; i++) {
	var value = bar[i];

	// Creating element div
	var bars_element = document.createElement("div");

	// class dendenge 
	bars_element.classList.add("block");

	// styling 
	bars_element.style.height = `${60}px`;


	bars_element.style.transform = `translate(${i * 30}px)`;

	// size of particular block
	var bars_label = document.createElement("label");
	bars_label.classList.add("block_id");
	bars_label.innerText = value;

	bars_element.appendChild(bars_label);
	container.appendChild(bars_element);
}
}

//----------------BinarySearch function------------------------


async function BinarySearch(delay = 300) {
var blocks = document.querySelectorAll(".block");
var output = document.getElementById("text");

var num = document.getElementById("fname").value;

//colour kr denge usme 
for (var i = 0; i < blocks.length; i += 1) {
	blocks[i].style.backgroundColor = "#be39f7";
}

output.innerText = "";


var start = 0;
var end = 12;
var flag = 0;

while (start <= end) {

	//Mid nikal lenge formula se .. 
	var mid = Math.floor((start + end) / 2);
    // color kr denge mid ko .. 
	blocks[mid].style.backgroundColor = "#e5ff00";
	blocks[mid].style.height = "80px" ; 

	var value = Number(blocks[mid].childNodes[0].innerHTML);

	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, delay)
	);

    // if element found .. change the colour .. innerhtml , output screen 

	if (value == num) {
	output.innerText = "Element Found";
	blocks[mid].style.backgroundColor = "#37ff00";
	blocks[mid].style.height = "110px"
		
	screen.innerText = "Element Found"
    
	flag = 1;
	break;
	}

    // agar target chota he to right side search krna hoga .. 

	if (value > num) {

	end = mid - 1;

	blocks[mid].style.backgroundColor = "#ff0019";

	} 
    else {

	start = mid + 1;
	blocks[mid].style.backgroundColor = "#d400ff";

	}
}

    if (flag === 0) {
	    screen.innerText = "Element Not Found";
    }
}


async function LinearSearch(delay = 300) { 
	var blocks = document.querySelectorAll(".block"); 
	var output = document.getElementById("text"); 
	
	//Extracting the value entered by the user 
	var num = document.getElementById("fname").value; 
	

	for (var i = 0; i < blocks.length; i += 1) { 
	  blocks[i].style.backgroundColor = "#8800d1"; 
	} 
	
	output.innerText = ""; 
	
	var flag = 0; 
	for (var i = 0; i < blocks.length; i += 1) { 
	  blocks[i].style.backgroundColor = "#ffee00"; 
	
	  await new Promise((resolve) => 
		setTimeout(() => { 
		  resolve(); 
		}, delay) 
	  ); 
	
	  var value = Number(blocks[i].childNodes[0].innerHTML); 
	
	  if (value == num) { 
		flag = 1; 
		screen.innerText = "Element Found"; 
		blocks[i].style.backgroundColor = "#3cff00"; 
		blocks[i].style.height = "110px"
		break; 
	  } else { 
		blocks[i].style.backgroundColor = "#d24dff"; 
		blocks[i].style.height = "70px" ; 
	  } 

	  if (value == num) { 
		
		blocks[i].style.backgroundColor = "#0ffc03"; 
		break; 
	  } 



	} 
	if (flag == 0) { 
	  screen.innerText = "Element Not Found"; 
	} 


  } 


let deffi = document.getElementById('deffi') ; 
let complex = document.getElementById('complex') ;   
let btn1 = document.getElementById('btn1') ; 
let btn2 = document.getElementById('btn2') ; 

let area = document.getElementById("code") ; 


  	
	area.textContent = `
	
	// C++ code to linearly search 
	// x in arr[]. If x is present 
	// then return its location, 
	// otherwise return -1

	#include <iostream>
	using namespace std;

	int search(int arr[],int n, int x){

	int i;

	for (i = 0; i < n; i++)
			if (arr[i] == x)
				return i;
		return -1;
	}

	// Driver code
	int main(void){

		int arr[] = {2, 3, 4, 10, 40};
		int x = 10;
		int n = sizeof(arr) / sizeof(arr[0]);

		// Function call
		int result = search(arr, n, x);
		(result == -1) ? 
		cout << "Element is not present in array" : 
		cout << "Element is present at index " << 
			result;


		return 0;
	}

	`


	deffi.className = "dell" ; 
	deffi.innerText = "The linear search algorithm is defined as a sequential search algorithm that starts at one end and goes through each element of a list until the desired element is found; otherwise, the search continues till the end of the dataset. " ; 

	complex.className = "time"
	complex.innerText = "O(N)" ; 

	


	
btn1.addEventListener('click', () => {
	deffi.className = "dell" ; 
	deffi.innerText = "Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one." ; 

	complex.className = "time"
	complex.innerText = "O(log N)" ; 

	area.textContent = `
	
		
	// binary search ...... (monotonic) ..............

	#include<iostream>
	using namespace std ;


    	int binarysearch(int arr[] , int size  , int key ){

        // decalring and initialising start end and mid 

        	int start = 0 ; 
        	int end = size - 1 ; 

   		// formula for calculate mid ....
        	int mid = (start+end)/2 ; 

        	// optimised formulas ...............
            	// int mid = start + ( end - start) / 2 ; 

            while(start <= end){
            // checking the condition ....
                if(arr[mid]==key){
                    return mid ; 
                }

    // right wale part me jayenge agar key > mid he to ..

               	if(key > mid){
                	start = mid + 1 ; 
               	}      

               	else{
                	end = mid - 1 ; 
               	}

            mid = (start+end)/2 ; 

        }

        return -1 ; 
    }

//--------------------------------------------------------

	int main (){


    	// creating an array of even size ...
    		int even[6] = {2 , 5 , 7 , 9 , 13 , 25 }; 

    	// creating an array of odd size ....
    		int odd[5] = { 5 , 7 , 9 , 14 , 19 }; 
    
    	// caliing the binary search function ..

        int evenindex = binarysearch(even , 6 , 45 ); 
        cout<<"the index of the 13 is : " << evenindex << endl ; 

    	// calliing ..

        int oddindex = binarysearch(odd , 5 , 19); 
        cout<<"the index of the 19 is : " << oddindex << endl ; 


		return 0 ;
	}

	`



});



btn2.addEventListener('click', () => {
	deffi.className = "dell" ; 
	deffi.innerText = "The linear search algorithm is defined as a sequential search algorithm that starts at one end and goes through each element of a list until the desired element is found; otherwise, the search continues till the end of the dataset. " ; 

	complex.className = "time"
	complex.innerText = "O(N)" ; 

	area.textContent = `
	
	// C++ code to linearly search 
	// x in arr[]. If x is present 
	// then return its location, 
	// otherwise return -1

	#include <iostream>
	using namespace std;

	int search(int arr[],int n, int x){

	int i;

	for (i = 0; i < n; i++)
			if (arr[i] == x)
				return i;
		return -1;
	}

	// Driver code
	int main(void){

		int arr[] = {2, 3, 4, 10, 40};
		int x = 10;
		int n = sizeof(arr) / sizeof(arr[0]);

		// Function call
		int result = search(arr, n, x);
		(result == -1) ? 
		cout << "Element is not present in array" : 
		cout << "Element is present at index " << 
			result;


		return 0;
	}


	`

}); 


// Call kr denge generate array functioon ko .. 
generatearray();




let algo0 = document.getElementById('algo0') ; 
let algo1 = document.getElementById('algo1') ; 
let algo2 = document.getElementById('algo2') ; 
let algo3 = document.getElementById('algo3') ; 
let algo4 = document.getElementById('algo4') ; 
let algo5 = document.getElementById('algo5') ; 
let algo6 = document.getElementById('algo6') ; 
let algo7 = document.getElementById('algo7') ; 


algo0.innerText = "Linear Search Algorithm:" ; 

algo1.innerText = "1.  Start from the first element (index 0) and compare key with each element (arr[i])." ; 

algo2.innerText = "2. Comparing key with first element arr[0]. Since not equal, the iterator moves to the next element ." ; 

algo3.innerText = "3. Comparing key with next element arr[1]. SInce not equal, the iterator moves to the next element." ; 

algo4.innerText = "4.  Now when comparing arr[2] with key, if the value matches. So the Linear Search Algorithm will yield a successful message and return the index of the element when key is found (here 2)." ; 

algo5.innerText = "" ; 

algo6.innerText = "" ; 

algo7.innerText = "" ; 


btn1.addEventListener('click', () => {
	algo0.innerText = "Binary Search Algorithm:" ; 

	algo1.innerText = "1. Divide the search space into two halves by finding the middle index “mid”. " ; 

	algo2.innerText = "2. Compare the middle element of the search space with the key. " ; 

	algo3.innerText = "3. If the key is found at middle element, the process is terminated." ; 

	algo4.innerText = "4. If the key is not found at middle element, choose which half will be used as the next search space." ; 

	algo5.innerText = "5. If the key is smaller than the middle element, then the left side is used for next search." ; 

	algo6.innerText = "6. If the key is larger than the middle element, then the right side is used for next search." ; 

	algo7.innerText = "7. This process is continued until the key is found or the total search space is exhausted." ; 

});



btn2.addEventListener('click', () => {

	algo0.innerText = "Linear Search Algorithm:" ; 

	algo1.innerText = "1.  Start from the first element (index 0) and compare key with each element (arr[i])." ; 

	algo2.innerText = "2. Comparing key with first element arr[0]. Since not equal, the iterator moves to the next element ." ; 

	algo3.innerText = "3. Comparing key with next element arr[1]. SInce not equal, the iterator moves to the next element." ; 

	algo4.innerText = "4.  Now when comparing arr[2] with key, if the value matches. So the Linear Search Algorithm will yield a successful message and return the index of the element when key is found (here 2)." ; 

	algo5.innerText = "" ; 

	algo6.innerText = "" ; 

	algo7.innerText = "" ; 

}); 