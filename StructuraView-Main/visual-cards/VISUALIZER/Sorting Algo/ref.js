document.addEventListener('DOMContentLoaded', function () {
    const visualization = document.getElementById('visualization');
    const generateArrayBtn = document.getElementById('generate-array');
    const startSortingBtn = document.getElementById('start-sorting');
    const stopSortingBtn = document.getElementById('stop-sorting');
    const algorithmSelect = document.getElementById('algorithm');
    const speedSelect = document.getElementById('speed');

    const defin = document.getElementById('defination') ; 
    const complex = document.getElementById('complexity') ; 



    let array = [];
    let sortingInProgress = false;
    let animationId;

    generateArrayBtn.addEventListener('click', generateArray);
    startSortingBtn.addEventListener('click', startSorting);
    stopSortingBtn.addEventListener('click', stopSorting);

    function generateArray() {
        if (sortingInProgress) return;
        array = [];
        for (let i = 0; i < 20; i++) { 
            array.push(Math.floor(Math.random() * 100) + 1);
        }
        drawArray(array);

        defin.innerText = "" ; 
        complex.innerText = "" ; 
    }

    function drawArray(array, sortingRange = []) {
        visualization.innerHTML = '';
        array.forEach((value, index) => {
            const bar = document.createElement('div');
            bar.className = 'bar';

            bar.style.height = `${value}px`;

            bar.style.width = `${68}px` ; 

            bar.innerText = value ; 
    
            let color;
            if (sortingRange.includes(index)) {
                color = '#ff2f00'; 
            } else if (index < sortingRange[0]) {
                color = '#00ff00'; 
            } else {
                color = '#6600ff'; 
            }
            bar.style.backgroundColor = color;
            visualization.appendChild(bar);
        });
    }

    let area = document.getElementById("code") ; 


    
    area.textContent = `
            
                
    //bubble sort  = isme neightbour element se compare karte he
    // agar arr[j] > arr[j+1] he to swap kara denge nhi to ignore 
    // kr denge ..

    #include<iostream>
    using namespace std ;
    int main (){

//--------------------------------------------------    
 
    int arr[] = {2,5,7,10,1,6,8,15,12,23,11,9}; // declaring array ..
    int n = sizeof(arr)/sizeof(arr[0]); // finding size of array ..


    // printing array before applying sort .....
        cout<<"before sort : "; 
            for(int i = 0 ; i<n ; i++){
                cout<<arr[i]<<"  "; 
            }

        cout<<endl ; 


//---------------------------------------------------

// bubble sort .................    

    for(int i =1 ; i<n-1 ; i++){
        for(int j=0 ; j<n-i ; j++){
            if(arr[j] > arr[j+1]){
                swap(arr[j] , arr[j+1]); 
            }
        }
    }


//--------------------------------------------------
// printing element after applying bubble sort ..

    cout<<"after sort : "; 
        for(int i = 0 ; i<n ; i++){
            cout<<arr[i]<<"  "; 
        }


      return 0 ;
    }

            `



    function startSorting() {
        if (sortingInProgress) return;
        sortingInProgress = true;
        const selectedAlgorithm = algorithmSelect.value;
        const speed = getSpeed().value; 
        const swaps = [];

        if (selectedAlgorithm === 'bubble') {
            bubbleSort(array, speed, swaps);

            defin.className = 'tess' ; 
            complex.className = 'comp' ; 
            complex.innerText = "O(N^2)" ; 
            defin.innerText  = "Bubble sort is a sorting algorithm that starts from the first element of an array and compares it with the second element. If the first element is greater than the second, we swap them. It continues this process until the end of the array, with the largest elements “bubbling” to the top." ; 

            area.textContent = `
            
                
    //bubble sort  = isme neightbour element se compare karte he
    // agar arr[j] > arr[j+1] he to swap kara denge nhi to ignore 
    // kr denge ..

    #include<iostream>
    using namespace std ;
    int main (){

//--------------------------------------------------    
 
    int arr[] = {2,5,7,10,1,6,8,15,12,23,11,9}; // declaring array ..
    int n = sizeof(arr)/sizeof(arr[0]); // finding size of array ..


    // printing array before applying sort .....
        cout<<"before sort : "; 
            for(int i = 0 ; i<n ; i++){
                cout<<arr[i]<<"  "; 
            }

        cout<<endl ; 


//---------------------------------------------------

// bubble sort .................    

    for(int i =1 ; i<n-1 ; i++){
        for(int j=0 ; j<n-i ; j++){
            if(arr[j] > arr[j+1]){
                swap(arr[j] , arr[j+1]); 
            }
        }
    }


//--------------------------------------------------
// printing element after applying bubble sort ..

    cout<<"after sort : "; 
        for(int i = 0 ; i<n ; i++){
            cout<<arr[i]<<"  "; 
        }


      return 0 ;
    }

            `


        } 
        else if (selectedAlgorithm === 'insertion') {
            insertionSort(array, speed, swaps);

            defin.className = 'tess' ; 
            complex.className = 'comp' ; 
            complex.innerText = "O(N^2)" ; 
            defin.innerText  = "Insertion sort is a simple sorting algorithm that works by iteratively inserting each element of an unsorted list into its correct position in a sorted portion of the list. It is a stable sorting algorithm, meaning that elements with equal values maintain their relative order in the sorted output." ; 


            area.textContent = `
            
                
    // insertion sort = card wala concept i = 1 se chalenge
    // elements ke sath compare karenge agar less than 
    // aata he to right me place hoha or agar greater 
    // than aata he to left me place hoga .... aur bache 
    // hue ko ek place aage shift kr denge 

    // time complexity = bigoh (n^2) in worst case ..
    // space complexity = constant ..

    #include<iostream>
    using namespace std ;

//----------------------------------------------------

    int main (){

        // declaring aaray ...
        int arr[] = {1,4,21,6,8,3,5,87,55,15,13,12,9};
        int n = sizeof(arr) / sizeof(arr[0]); 

//------------------------------------------------------
    // insertion sort ....

        for(int i=0 ; i<n ; i++){ // number of rounds ..
            int temp = arr[i]; // temperory variable ..

            int j = i-1 ; 
            for(; j>=0 ; j--){
                if(arr[j] > temp ){
                    arr[j+1] = arr[j] ; 
                }
                else{
                    break; 
                }
            }
            arr[j+1] = temp ; 
        }

//-----------------------------------------------------    

    // loop for printing ....

    for(int i = 0 ; i<13 ; i++){
        cout<<arr[i]<<"  "; 
    }


      return 0 ;
    }
            
            `

        } 
        else if (selectedAlgorithm === 'selection') {
            selectionSort(array, speed, swaps);
            
            defin.className = 'tess' ; 
            complex.className = 'comp' ; 
            complex.innerText = "O(N^2)" ; 
            defin.innerText  = "Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list. " ; 


            area.textContent = `
            
                
    // selection  sort  =  round to round sort chalta he pehle round me
    // element ko uski sahi jagah par place krte he ... 

    #include<iostream>
    #include<algorithm>
    using namespace std ;

//-----------------------------------------------------

    int main (){

        int arr[7] = {32,45,12,98,15,76,20};

    // loop for printing element before sorting ....
            for(int i = 0 ; i<7 ; i++){
                cout<<arr[i]<<"  "  ; 
            }
            cout<<endl ; 

//------------------------------------------------------
// selection sort applied ......

        for(int i =0 ; i<6 ; i++){
            int  minIndex = i ; 
    
            for(int j=i+1 ; j<7; j++){

                    if(arr[minIndex] < arr[j]){
                         minIndex = j ; 
                    }
            }
            swap(arr[minIndex] , arr[i]);
        }

//------------------------------------------------------    
// loop for printing element after sort ......

       for(int i = 0 ; i<7 ; i++){
            
            cout<<arr[i]<<"  " ; 
        }
       


return 0 ;
}
            
            `

        }
         else if (selectedAlgorithm === 'merge') {
            mergeSort(array, speed);

            defin.className = 'tess' ; 
            complex.className = 'comp' ; 
            complex.innerText = "O(NlogN)" ; 
            defin.innerText  = "Merge sort is a sorting algorithm that follows the divide-and-conquer approach. It works by recursively dividing the input array into smaller subarrays and sorting those subarrays then merging them back together to obtain the sorted array." ; 


            area.textContent = `
            
                
    // merge sort = divide and conquer pe work karta he ..
    // pehle mid nikalenge ..
    // array ko single element tak tod denge ..
    // for recursively sort kr denge breaaked array ko ..
    // fir merge kr denge ..  

    #include<iostream>
    using namespace std;

    void merge(int *arr, int s, int e) {

        int mid = (s+e)/2;

        int len1 = mid - s + 1;
        int len2 = e - mid;

        int *first = new int[len1];
        int *second = new int[len2];

        //copy values
        int mainArrayIndex = s;

        for(int i=0; i<len1; i++) {
            first[i] = arr[mainArrayIndex++];
        }

        mainArrayIndex = mid+1;

        for(int i=0; i<len2; i++) {
            second[i] = arr[mainArrayIndex++];
        }

        //merge 2 sorted arrays ..    
        int index1 = 0;
        int index2 = 0;
        mainArrayIndex = s;

        while(index1 < len1 && index2 < len2) {
            if(first[index1] < second[index2]) {
                arr[mainArrayIndex++] = first[index1++];
            }
            else{
                arr[mainArrayIndex++] = second[index2++];
            }
        }   

        while(index1 < len1) {
            arr[mainArrayIndex++] = first[index1++];
        }

        while(index2 < len2 ) {
            arr[mainArrayIndex++] = second[index2++];
        }

        delete []first;
        delete []second;

    }

    void mergeSort(int *arr, int s, int e) {

        //base case
        if(s >= e) {
            return;
        }
    
        int mid = (s+e)/2;

        //left part sort karna h 
        mergeSort(arr, s, mid);
    
        //right part sort karna h 
        mergeSort(arr, mid+1, e);

        //merge
        merge(arr, s, e);

    }

    int main() {

        int arr[15] = {3,7,0,1,5,8,3,2,34,66,87,23,12,12,12};
        int n = 15;

        mergeSort(arr, 0, n-1);

        for(int i=0;i<n;i++){
            cout << arr[i] << " ";
        }
         cout << endl;

        return 0;
    }

            `

        }
    }

    function stopSorting() {
        if (!sortingInProgress) return;
        cancelAnimationFrame(animationId);
        sortingInProgress = false;
        defin.innerText = "" ; 
        complex.innerText = "" ; 
    }

    function getSpeed() {
        const speed = speedSelect.value;
        switch (speed) {
            case '1': 
                return { value: 3000, description: 'Slow' };
            case '2': 
                return { value: 1000, description: 'Medium' };
            case '3': 
                return { value: 50, description: 'Fast' };
            default:
                return { value: 150, description: 'Medium' }; 
        }
    }

    function bubbleSort(arr, speed, swaps) {
        let n = arr.length;
        let i = 0;
        let animationInterval = setInterval(() => {
            let swapped = false;
            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swaps.push(j);
                    swapped = true;
                }
            }
            drawArray(arr, [n - i - 1]);
            if (!swapped || !sortingInProgress) {
                clearInterval(animationInterval);
                sortingInProgress = false;
            }
            i++;
        }, speed);
    }
    
    function insertionSort(arr, speed, swaps) {
        let n = arr.length;
        let i = 1;
        let animationInterval = setInterval(() => {
            let key = arr[i];
            let j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                swaps.push(j + 1);
                j = j - 1;
            }
            arr[j + 1] = key;
            drawArray(arr, [i, ...swaps]);
            i++;
            if (i >= n || !sortingInProgress) {
                clearInterval(animationInterval);
                drawArray(arr);
                sortingInProgress = false;
            }
        }, speed);
    }
    
    
    

    function selectionSort(arr, speed, swaps) {
        let n = arr.length;
        let i = 0;
        let animationInterval = setInterval(() => {
            if (i >= n - 1 || !sortingInProgress) {
                clearInterval(animationInterval);
                drawArray(arr);
                sortingInProgress = false;
                return;
            }
    
            let minIndex = i;
            for (let j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                let temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
                swaps.push(minIndex);
                swaps.push(i);
            }
    
            drawArray(arr, [minIndex, i]);
            i++;
        }, speed);
    }
    

    async function mergeSort(arr, speed) {
        const merge = async (arr, l, m, r) => {
            let n1 = m - l + 1;
            let n2 = r - m;

            let L = new Array(n1);
            let R = new Array(n2);

            for (let i = 0; i < n1; i++)
                L[i] = arr[l + i];
            for (let j = 0; j < n2; j++)
                R[j] = arr[m + 1 + j];

            let i = 0;
            let j = 0;
            let k = l;

            while (i < n1 && j < n2) {
                if (L[i] <= R[j]) {
                    arr[k] = L[i];
                    i++;
                } else {
                    arr[k] = R[j];
                    j++;
                }
                k++;
                await waitforme(speed);
                drawArray(arr, [k - 1]);
            }

            while (i < n1) {
                arr[k] = L[i];
                i++;
                k++;
                await waitforme(speed);
                drawArray(arr, [k - 1]);
            }

            while (j < n2) {
                arr[k] = R[j];
                j++;
                k++;
                await waitforme(speed);
                drawArray(arr, [k - 1]);
            }
        }

        const mergeSortHelper = async (arr, l, r) => {
            if (l >= r) {
                return;
            }
            let m = l + Math.floor((r - l) / 2);
            await mergeSortHelper(arr, l, m);
            await mergeSortHelper(arr, m + 1, r);
            await merge(arr, l, m, r);
        }

        await mergeSortHelper(arr, 0, arr.length - 1);
        sortingInProgress = false;
    }

    function waitforme(delay) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, delay);
        });
    }
});