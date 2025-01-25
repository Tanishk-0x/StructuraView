      // HTML BOx JS Code
      let HTMLBox = document.getElementById("textarea1");
      let HTMLButton = document.getElementById("HTMLButton");
      let copybtn = document.getElementById("copykrbhai") ; 

      copybtn.onclick = function () {
        HTMLBox.select() ; 
        document.execCommand("copy") ; 
        copybtn.innerText = "Copied" ; 
      }

    //   HTMLButton.onclick = function () {
    //     HTMLBox.select();
    //     document.execCommand("copy");
    //     HTMLButton.innerText = " Copied ";
    //   };

//---------------------------------------------------------------------------------


      let btn1 = document.getElementById('btn1') ; 
      let btn2 = document.getElementById('btn2') ; 
      let btn3 = document.getElementById('btn3') ; 
      let btn4 = document.getElementById('btn4') ; 
      let btn5 = document.getElementById('btn5') ; 
      let btn6 = document.getElementById('btn6') ; 
      let btn7 = document.getElementById('btn7') ; 
      let btn8 = document.getElementById('btn8') ; 
      let btn9 = document.getElementById('btn9') ; 
      let btn10 = document.getElementById('btn10') ; 
      let btn11 = document.getElementById('btn11') ; 
      let btn12 = document.getElementById('btn12') ; 

      let btn13 = document.getElementById('btn13') ; 
      let btn14 = document.getElementById('btn14') ; 
      let btn15 = document.getElementById('btn15') ; 
      let btn16 = document.getElementById('btn16') ; 
      let btn17 = document.getElementById('btn17') ; 
      let btn18 = document.getElementById('btn18') ; 
      let btn19 = document.getElementById('btn19') ; 
      let btn20 = document.getElementById('btn20') ; 
      let btn21 = document.getElementById('btn21') ; 
      let btn22 = document.getElementById('btn22') ; 
      let btn23 = document.getElementById('btn23') ; 

      let btn24 = document.getElementById('btn24') ; 
      let btn25 = document.getElementById('btn25') ; 
      let btn26 = document.getElementById('btn26') ; 
      let btn27 = document.getElementById('btn27') ; 
      let btn28 = document.getElementById('btn28') ; 
      let btn29 = document.getElementById('btn29') ; 
      let btn30 = document.getElementById('btn30') ; 
      let btn31 = document.getElementById('btn31') ; 
      let btn32 = document.getElementById('btn32') ; 
      let btn33 = document.getElementById('btn33') ; 

      let btn34 = document.getElementById('btn34') ; 
      let btn35 = document.getElementById('btn35') ; 
      let btn36 = document.getElementById('btn36') ; 
      let btn37 = document.getElementById('btn37') ; 
      let btn38 = document.getElementById('btn38') ; 
      let btn39 = document.getElementById('btn39') ; 
      let btn40 = document.getElementById('btn40') ; 
      let btn41 = document.getElementById('btn41') ; 

      let btn42 = document.getElementById('btn42') ; 
      let btn43 = document.getElementById('btn43') ; 
      let btn44 = document.getElementById('btn44') ; 
      let btn45 = document.getElementById('btn45') ; 


//-------------------------------------------------------------------------------

    btn1.addEventListener('click', () => {
     
   HTMLBox.textContent = ` 
  
  // Stack using Standard Template Library 
   
  #include<iostream>
  #include<stack>
  using namespace std ; 
  int main (){

  // DECALARATION OF STACK ..........
  stack<int> s; 

  //INSERT VALUES USING stackname.push(element); 
     s.push(5); 
     s.push(8); 
     s.push(7);
     s.push(2); 


  // BEFORE POP ....
  // cout<<"top element : "<<s.top()<<endl; 


  // s.pop(); 
  // s.pop(); 
  // s.pop(); 
  // s.pop(); 
  // cout<<" after pop top element : "<<s.top()<<endl; 

  if(s.empty()){
      cout<<"stack is empty";
  }

  else{
      cout<<"stack is not empty"; 
  }

      return 0 ; 
  }
        
        ` ; 
    }); 

//-------------------------------------------------------------------------------

    btn2.addEventListener('click', () => {
        HTMLBox.textContent = ` 

  #include<iostream>
  #include<queue>
  using namespace std ;

  int main ()
  {

    // DECLARATION OF QUEUE.................
      queue<int>q ; 

    // INSERT VALUES IN QUEUE ...............
      q.push(11);
      q.push(15);
      q.push(17);

    // PRINTING THE SIZE OF QUEUE.........
    cout<<"the size is : "<<q.size()<<endl; 

    // REMOVE ELEMENT USING POP .............. 
    q.pop();
    cout<<"the size is : "<<q.size()<<endl; 

    // PRINTING THE FRONT OF QUEUQ=E ..............
    cout<<"the front is : "<<q.front()<<endl;

    // CHECKING QUEUE IS EMPTY OR NOT ..........
    if(q.empty()){
        cout<<"queue is empty"<<endl ; 
    }
    else{
        cout<<"not empty"<<endl ; 
    }

    return 0 ;

  }


        ` ; 
    }); 

  //-------------------------------------------------------------------------------

    btn3.addEventListener('click', () => {
        HTMLBox.textContent = ` 
        
  #include <iostream>  
  using namespace std;  
  

  // Node class  
  class Node {  
    public:  
      int data;  
      Node *next;  
  
    Node(int data) {  
      this->data = data;  
      this->next = nullptr;  
    }  
  };  

  
  // Linked list class  
  class LinkedList {  
    private:  
      Node *head;  
  
    public:  
      LinkedList() {  
        this->head = nullptr;  
      }  
  
    void insertAtBeginning(int data) {  
      Node *newNode = new Node(data);  
      newNode->next = head;  
      head = newNode;  
    }  
  
    void insertAtEnd(int data) {  

      Node *newNode = new Node(data);  
      if (head == nullptr) {  
        head = newNode;  
        return;  
      }  
      Node *temp = head;  
      while (temp->next != nullptr) {  
        temp = temp->next;  
      }  
      temp->next = newNode; 

    }  
  
    void deleteAtBeginning() {  
      if (head == nullptr) {  
        return;  
      }  
      Node *temp = head;  
      head = head->next;  
      delete temp;  
    }  

  
    void deleteAtEnd() {  
      if (head == nullptr) {  
        return;  
      }  
      if (head->next == nullptr) {  
        delete head;  
        head = nullptr;  
        return;  
      }  
      Node *temp = head;  
      while (temp->next->next != nullptr) {  
        temp = temp->next;  
      }  
      delete temp->next;  
      temp->next = nullptr;  
    }  
  
    void printList() {  
      Node *temp = head;  
      while (temp != nullptr) {  
        cout << temp->data << " ";  
        temp = temp->next;  
      }  
      cout << endl;  
    }  
  };  
  
  int main() {  
    // Create a linked list  
    LinkedList List;  
  
    // Insert some nodes at the beginning of the list  
    list.insertAtBeginning(3);  
    list.insertAtBeginning(2);  
    list.insertAtBeginning(1);  
  
    // Insert some nodes at the end of the list  
    list.insertAtEnd(4);  
    list.insertAtEnd(5);  
    list.insertAtEnd(6);  
  
    // Print the list  
    cout << "Original list: ";  
    list.printList();  
  
    // Delete a node at the beginning of the list  
    list.deleteAtBeginning();  
  
    // Print the List again  
    cout << "List after deleting a node at the beginning: ";  
    list.printList();  
  
    // Delete a node at the end of the list  
    list.deleteAtEnd();  
  
    // Print the List again  
    cout << "List after deleting a node at the end: ";  
    list.printList();  
  
    return 0;  
  }  
        
        ` ; 
    }); 

  //-------------------------------------------------------------------------------

    btn4.addEventListener('click', () => {
        HTMLBox.textContent = ` 
    
  // implementation of stack using linked list      
        
  #include<iostream>
  using namespace std ;

  struct Node{
      int val ; 
      Node* next ; 
  }; 

  class mystack {

      Node* head ; 
      int stacksize ; 

        public: 

  // constructor banayenge ...
  mystack(){
      head = NULL; 
      stacksize = 0 ; 
  }

  //-----------------------------------------------------
  // push operation ...........       
      void push( int x ){
          Node* temp = new Node(); 
          temp->val=x ; 
          temp->next = head; 
          head = temp ; 

          cout<<"element" <<" " << x <<" "<< "insert in the stack "<<endl ;
          // size count ....
          stacksize++;  
      }

  //------------------------------------------------------
  // using pop operation .......
      void pop(){

          if(head==NULL){
              cout<<"stack is empty can not pop"<<endl ; 
              return ; 
          }
          Node* temp = head; 
          head = temp->next; 
          temp->next = NULL ; 
          // deleting temp ...............
          delete temp ; 

          cout<<"element popped ... "<<endl ; 
          // size count ....
          stacksize--; 
      }

  //----------------------------------------------------------
  // using top operation ....(returns the first element of the linked list ........
      int top(){
          if(head==NULL){
              cout<<"no top element stack is empty "<<endl ; 
              return -1;
          }

          cout<<"top element is present : " << head->val<<endl ; 
          return head->val ; 
      }

  //---------------------------------------------------------
  // using size operator ......    

  /*approach = upar ek stacksize krke variable banaya he .. 
  jab bhi koi element push ya* insert karenge tab stacksize ko 
  ++ kar denge or pop ke time pe stacksize ko -- kr denge  */
      int size(){

          cout<<"size of stack is : "<<stacksize<<endl ; 
              return stacksize ; 
      }

  //----------------------------------------------------------
  // using empty operator .........
      int empty(){
          if(head==NULL){
              cout<<"stack is empty .."<<endl ; 
              return 1 ; 
          }

        cout<<"stack is NOT empty "<<endl ;   
        return 0 ; 
      }

  };

  //------------------------------------------------------------

  int main (){

      mystack s1; 

      s1.empty(); 

      s1.push(7); 

      s1.push(9); 

      s1.pop(); 

      s1.push(10); 

      s1.top(); 
      
      s1.size(); 

      s1.empty();

  return 0 ;

  }
        ` ; 
    }); 

  //-------------------------------------------------------------------------------

    btn5.addEventListener('click', () => {
        HTMLBox.textContent = ` 
        
  #include<iostream>
  using namespace std ;

  class node{
      public: 
          int data ; 
          node* next ; 

    // constructor banayenge ...........
    node(int val){
      data = val ; 
      next = NULL ; 
    }     
  };

  class queue{

      node* front; 
      node* back ; 

    public: 
    //cosntructor banayenge .......
    queue(){
      front = NULL; 
      back = NULL ; 
    } 

  // ------------ OPERATIONS PERFORM ----------------
  // push operation ...........
    void push(int x ){

          node* n = new node(x); 
                  if(front == NULL){
                      back = n ; 
                      front = n ; 
                      return ; 
                  }

          back->next = n ; 
          back = n ;        
        
    }

  //---------------------------------------------------
  // pop operation .........
  void pop(){
      if(front==NULL){
          cout<<"queue is emptyy "<<endl ;  
          return ; 
      }

      node* todelete = front ; 
      front = front->next; 

      // deletinggggggggggg. 
      delete todelete ; 
  }  

  //-----------------------------------------------------
  // peek operation .........
  int peek(){
      if(front==NULL){
          cout<<"no element is queue "<<endl ; 
          return -1 ; 
      }

      return front->data ;
  }

  //---------------------------------------------------
  // checking queue is empty or not ......
      bool empty(){
      if(front==NULL){
          return false ; 
      }
    return true ; 
      }

  };

  //---------------------------------------------------

  int main (){

    // creating q as object of queue class ....
    queue q ; 

   // pushing elements in queue ....
              q.push(10); 
              q.push(15);
              q.push(17);
              q.push(25);



  // printing peek element ...........
      cout<<"peak element is : "<<q.peek()<<endl ; 

  // popping the element .......
          q.pop(); 

  // one more time ...
          cout<<"peak element is : "<<q.peek()<<endl ; 

          q.pop(); 

  // checking queue is empty or not .......................
          cout<<"empty or not :  "<<q.empty()<<endl ;   


      return 0 ;

  }
          
        ` ; 
    }); 

  //-------------------------------------------------------------------------------

    btn6.addEventListener('click', () => {
        HTMLBox.textContent = ` 
        
          
  //bubble sort  = isme neightbour element se compare karte he agar arr[j] > arr[j+1] he to swap kara denge nhi to ignore kr denge ..

  #include<iostream>
  using namespace std ;
  int main (){

  //---------------------------------------    
  
      int arr[] = {2,5,7,10,1,6,8,15,12,23,11,9}; // declaring array ..
      int n = sizeof(arr)/sizeof(arr[0]); // finding size of array ..


  // printing array before applying sort .....
    cout<<"before sort : "; 
          for(int i = 0 ; i<n ; i++){
          cout<<arr[i]<<"  "; 
      }

      cout<<endl ; 


  //-----------------------------------------
  // bubble sort .......  
      for(int i =1 ; i<n-1 ; i++){
          for(int j=0 ; j<n-i ; j++){
              if(arr[j] > arr[j+1]){
                  swap(arr[j] , arr[j+1]); 
              }
          }
      }


  //----------------------------------------------
  // printing element after applying bubble sort .....
  cout<<"after sort : "; 
      for(int i = 0 ; i<n ; i++){
          cout<<arr[i]<<"  "; 
      }


  return 0 ;
  }
          
        ` ; 
    }); 

  //-------------------------------------------------------------------------------

    btn7.addEventListener('click', () => {
        HTMLBox.textContent = ` 
          
            
  // insertion sort = card wala concept .. i=1 se chalenge elements ke sath compare karenge agar less than aata he to right me place hoha or agar greater 
  // than aata he to left me place hoga .... aur bache hue ko ek place aage shift kr denge 

  // time complexity = bigoh (n^2) in worst case ..
  // space complexity = constant ..

  #include<iostream>
  using namespace std ;

  //-----------------------------------------

  int main (){

      // declaring aaray ...
      int arr[] = {1,4,21,6,8,3,5,87,55,15,13,12,9};
      int n = sizeof(arr) / sizeof(arr[0]); 

  //-----------------------------------------
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

  //----------------------------------------   

      // loop for printing ....
      for(int i = 0 ; i<13 ; i++){
          cout<<arr[i]<<"  "; 
      }


    return 0 ;
  }
          
        ` ; 
    }); 

  //-------------------------------------------------------------------------------

    btn8.addEventListener('click', () => {
        HTMLBox.textContent = ` 
        
          
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

      //merge 2 sorted arrays     
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
      } cout << endl;

      return 0;
  }
          
        ` ; 
    }); 

  //-------------------------------------------------------------------------------

    btn9.addEventListener('click', () => {
        HTMLBox.textContent = ` 
        
  #include<iostream>
  using namespace std;


  int partition( int arr[], int s, int e) {

      int pivot = arr[s];

      int cnt = 0;
      for(int i = s+1; i<=e; i++) {
          if(arr[i] <=pivot) {
              cnt++;
          }
      }

      //place pivot at right position
      int pivotIndex = s + cnt;
      swap(arr[pivotIndex], arr[s]);

      //left and right wala part smbhal lete h 
      int i = s, j = e;

      while(i < pivotIndex && j > pivotIndex) {

          while(arr[i] <= pivot) 
          {
              i++;
          }

          while(arr[j] > pivot) {
              j--;
          }

          if(i < pivotIndex && j > pivotIndex) {
              swap(arr[i++], arr[j--]);
          }

      }

      return pivotIndex;

  }

  void quickSort(int arr[], int s, int e) {

      //base case
      if(s >= e) 
          return ;

      //partitioon karenfe
      int p = partition(arr, s, e);

      //left part sort karo
      quickSort(arr, s, p-1);

      //right wala part sort karo
      quickSort(arr, p+1, e);

  }

  int main() {

      int arr[10] = {2,6,9,15,12,32,11,92,87,55};
      int n = 10;

      quickSort(arr, 0, n-1);

      for(int i=0; i<n; i++) 
      {
          cout << arr[i] << " ";
      } cout << endl;


      return 0;
  }
        
        ` ; 
    }); 

  //-------------------------------------------------------------------------------

    btn10.addEventListener('click', () => {
        HTMLBox.textContent = ` 
        
  #include<iostream>
  #include<algorithm>
  using namespace std ;

  int main (){
      int arr[] = {10,43,9,5,87,55,35,98,82,92,15};
      int n = sizeof(arr)/sizeof(arr[0]); 

      cout<<"before sort : "<<"  "; 
      for(int i=0 ; i<n ; i++){
          cout<<arr[i]<<"  "; 
      }
      cout<<endl ; 

      // selection sort

      for(int i=0; i<n-1 ; i++){
          int minIndex = i ; 
          for( int j=i+1 ; j<n ; j++){
              if(arr[minIndex] > arr[j]){
                  minIndex = j ; 
              }
          }
          swap(arr[minIndex] , arr[i]); 
      }
  cout<<"after sorting : "<<"  "; 
      for(int i = 0 ; i<n ; i++){
          cout<<arr[i]<<"  "; 
      }

  return 0 ;
  }
        
        ` ; 
    }); 

  //-------------------------------------------------------------------------------

    btn11.addEventListener('click', () => {
        HTMLBox.textContent = ` 
        
          
  // binary search ..............

  #include<iostream>
  using namespace std ;


      int binarysearch(int arr[] , int size  , int key ){

          // decalring and initialising start end and mid .........
          int start = 0 ; 
          int end = size - 1 ; 
      
          int mid = (start+end)/2 ; // formula for calculate mid ....

          // optimised formulas .....
              // int mid = start + ( end - start) / 2 ; 


              while(start <= end){
                  // checking the condition ....
                  if(arr[mid]==key){
                      return mid ; 
                  }

            // right wale part me jayenge agar key > mid he to .........
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

  //------------------------------------------

  int main (){


      // creating an array of even size ...
      int even[6] = {2 , 5 , 7 , 9 , 13 , 25 }; 

      // creating an array of odd size ....
      int odd[5] = { 5 , 7 , 9 , 14 , 19 }; 

      
      // caliing the binary search function ..
          int evenindex = binarysearch(even , 6 , 45 ); 
          cout<<"the index of the 13 is : " << evenindex << endl ; 


      // calliing the binary search function..
          int oddindex = binarysearch(odd , 5 , 19); 
          cout<<"the index of the 19 is : " << oddindex << endl ; 


    return 0 ;
  }
        
        ` ; 
    }); 

  //-------------------------------------------------------------------------------

    btn12.addEventListener('click', () => {

         HTMLBox.textContent = ` 
        
  // C++ code to linearly search 
  // x in arr[]. If x is present 
  // then return its location, 
  // otherwise return -1

  #include <iostream>
  using namespace std;
  
  int search(int arr[],int n, int x)
  {
      int i;
      for (i = 0; i < n; i++)
          if (arr[i] == x)
              return i;
      return -1;
  }
  
  // Driver code ..

  int main(void)
  {
      int arr[] = {2, 3, 4, 10, 40};
      int x = 10;
      int n = sizeof(arr) / sizeof(arr[0]);

    
      // Function call
      int result = search(arr, n, x);
      (result == -1) ? 

      cout << "Element is not present in array" : 
      cout << "Element is present at index " <<result;

      return 0;
  }
         
         ` ;
         
         
    }); 


      //-------------------------------------------------------------------------------

      btn13.addEventListener('click', () => {

        HTMLBox.textContent = ` 
        
  #include<iostream>
  //HEADER FILE IN STL FOR USING DEQUE ...............
  #include<deque>
  using namespace std;

  int main (){
      // DECLARATION OF DEQUE ...........
    deque<int> d ; 

    d.push_back(1); 
    d.push_back(5); 
    d.push_back(9); 
    d.push_back(23); 
    d.push_back(45); 
    d.push_back(78); 
    // PUSH_FRONT SE ELEMENT SABSE AAGE CHALEJAYEGA .................
    d.push_front(92); 

    //USING SIZE ..................
    int size = d.size(); 
    cout<<"size is : "<<size<<endl;
    //FOR LOOP TO TRAVEL IN DEQUE..................
    for(int i:d){
        cout<<i<<"  ";
    }
    cout<<endl ; 
    // ELEMENT AT nTH INDEX .................
    int n = 3 ; 
    cout<<"element at "<<n<<" index : "<<d.at(n)<<endl;

    // FRONT AND BACK USING = d.front() and d.back(); ...........
    cout<<"front element is : "<<d.front()<<endl; 
    cout<<"last element is : "<<d.back()<<endl ; 

    cout<<"before pop : "<<endl; 
    for(int i:d){
        cout<<i<<"  ";
    }
    cout<<endl ;

    //USING POP_BACK TO REMOVE LAST ELEMENT ...............
    d.pop_back();

    cout<<"after pop : "<<endl ; 
    for(int i:d){
        cout<<i<<"  ";
    }
    cout<<endl ; 
    // CHECKING EMPTY OR NOT ..................
    cout<<"empty or not -> "<<d.empty()<<endl ; 

    cout<<"before erase -> "<<d.size()<<endl ; 
    for(int i:d){
        cout<<i<<"  ";
    }
    cout<<endl ;

    // ERASE FUNCTION =  dequename.erase(parameter) ; ...........
    d.erase(d.begin() , d.begin()+1); 

    cout<<"after erase -> "<<d.size()<<endl ; 
    for(int i:d){
        cout<<i<<"  ";
    }
    cout<<endl ;

    return 0 ; 

  }
        
        ` ; 

   }); 


     //-------------------------------------------------------------------------------

     btn14.addEventListener('click', () => {

      HTMLBox.textContent = ` 
      
  #include<iostream>
  #include<list>
  using namespace  std ; 

  int main (){
      //DECLARING LIST ...........
      list<int> l ; 


      list<int> n(5,100); 
      cout<<"printing n : "<<endl ; 
      for(int i : n ){
          cout<< i <<"  "; 
      }
      cout<<endl ; 

      //PUSH AND POP .............
      l.push_back(1);
      l.push_front(2);

      for(int i:l){
          cout<<i<<"  ";
      }
      cout<<endl ;

      // SIZE ...........
      cout<<"size of list : "<<l.size()<<endl; 


      // ERASE ..........
      l.erase(l.begin());
      cout<<"after erase : "<<endl ; 

      for(int i:l){
          cout<<i<<"  ";
      }
      cout<<endl ;

      // SIZE ..................
      cout<<"size of list : "<<l.size()<<endl; 

      return 0 ; 

  }

      
      ` ; 

 }); 


   //-------------------------------------------------------------------------------

   btn15.addEventListener('click', () => {

    HTMLBox.textContent = ` 
  
  // VECTOR KE BHAR JANE SE USKI CAPACITY DOUBLE HO JATI HE ..
  #include<iostream>
  //HEADER FILE IN STL FOR USING VECTOR ....
  #include<vector>
  #include<algorithm>
  using namespace std;

  int main (){

    vector<int> v = {1,2,3,4,5}; 
    
    for(int i =0 ; i<5 ; i++){
        cout<<v[i]<<"  "<<"  " ; 
    }

    // SIZE AND CAPACITY ..........
    int s = v.size() ;
    cout<<"size is : "<< s <<endl ; 
    cout<<"capacity is : "<<v.capacity()<<endl; 

    v.push_back(7); 
    cout<<"capacity is : "<<v.capacity()<<endl; 

    v.push_back(8); 
    cout<<"capacity is : "<<v.capacity()<<endl; 

    v.push_back(9); 
    cout<<"capacity is : "<<v.capacity()<<endl; 

    cout<<"size  is : "<<v.size()<<endl;

    for(int i =0 ; i<10 ; i++){
        cout<<v[i]<<"  "<<"  " ; 
    }

    cout<<endl ; 

    // FIND ELEMENT AT nTH INDEX BY USING = vectorname.at(index);
    int n = 6 ; 
    cout<<"element at index " << n <<" :"<<v.at(n)<<endl; 

    //FRONT AND BACK BY USING = V.back() and v.front(); ..........
    cout<<"front element is : "<<v.front()<<endl ; 
    cout<<"last element is : "<<v.back()<<endl ; 

    cout<<endl;
    cout<<endl;
    cout<<endl;

    cout<<"before pop : "<<endl ; 
    for(int i =0 ; i<10 ; i++){
        cout<<v[i]<<"  "<<"  " ; 
    }
    cout<<endl  ; 

    // USING POP FOR REMEOVE LAST ELEMENT ......
    v.pop_back() ;
    cout<<"after pop"<<endl ; 
    
    for( int i:v){
        cout<<i<<"    " ; 
    }

    return 0 ;

  }
    
    ` ; 

}); 


  //-------------------------------------------------------------------------------

  btn16.addEventListener('click', () => {

    HTMLBox.textContent = ` 
    
  #include<iostream>
  using namespace std  ;

    // parent class .................
    class animal{

    public: 
        int age ; 
        int weight ; 

    public: 
        void speak(){
            cout<<"speaking "<<endl ; 
        }
    };

    // class dog using properties of class animal .....
    class dog : public animal {

    };


  int main () {

      dog d ; 
      d.speak(); 
      cout<<d.age<<endl ; 
      return 0 ; 
  }
    
    ` ; 

}); 


  //-------------------------------------------------------------------------------

  btn17.addEventListener('click', () => {

    HTMLBox.textContent = ` 
    
  #include<iostream>
  using namespace std  ;

    // parent class .................
    class animal{

    public: 
        int age ; 
        int weight ; 

    public: 
        void bark(){
            cout<<"animal barking "<<endl ; 
        }
    };


      class human {
          public: 
          string color ; 

          public: 
          void speak(){
              cout<<" speaking human "<<endl ; 
          }

      };

    //multiple inheritance 

    class hybrid : public animal , public human {

        // hybrid class inherit both classes animal and human ...

    };



  int main () {

    hybrid object ; 
    object.speak(); 
    object.bark();

      return 0 ; 
  }
    
    ` ; 

}); 


  //-------------------------------------------------------------------------------

  btn18.addEventListener('click', () => {

    HTMLBox.textContent = ` 
    
  #include<iostream>
  using namespace std  ;

    // parent class .................
    class animal{

    public: 
        int age ; 
        int weight ; 

    public: 
        void speak(){
            cout<<"speaking "<<endl ; 
        }
    };

    // class dog using properties of class animal .....
    class dog : public animal {

    };

    // class german inherit properties of class dog ........
    class german : public dog {

    };


  int main () {

      german d ; 
      d.speak(); 
      cout<<d.age<<endl ; 
      return 0 ; 

  }

    ` ; 

}); 


  //-------------------------------------------------------------------------------

  btn19.addEventListener('click', () => {

    HTMLBox.textContent = ` 
    
  #include<iostream>
  using namespace std ;

    class A {

        public: 
        void func1 (){
            cout<<"inside function 1 "<<endl ; 
        }
    };

    class B {

        public: 
        void func2 (){
            cout<<"inside function 2 "<<endl ; 
        }
    };

    class C {

        public: 
        void func3 (){
            cout<<"inside function 3 "<<endl ; 
        }
    };

  int main () {

    A object1 ;  
      object1.func1();  

    B object2 ;  
      object2.func1();  
      object2.func2();  
      
    C object3 ;  
      object3.func1();  
      object3.func3();  

            
      return 0 ; 
  }
    
    ` ; 

}); 

  //-------------------------------------------------------------------------------

  btn20.addEventListener('click', () => {

    HTMLBox.textContent = ` 
    
  #include<iostream>
  using namespace std ;

    // class create kri he ..
    class heap{
        public: 

        int arr[100] ; // declaring array .. 
        int size = 0 ; 


        //constructor banayenge .. 
        heap(){
            arr[0] = -1 ; 
            size = 0 ; 
        }

        // function for insert .. 

        void insert(int val){

            size = size + 1 ;  // step 1 : value ko end me insert kr di he .. 
            int index = size ; 
            
            arr[index] = val ; 

            while(index > 1 ){

                int parent = index / 2 ; // formula .. 

                    if(arr[parent] < arr[index]){  // step 2 : value ko sahi jagah pe le jane ke liye upar wale formulas ko use krenge .. 
                        swap(arr[parent] , arr[index]) ;
                        index = parent ; 
                    }

                    else{
                        return ; // matlab already sahi jagah pe he .. 
                    }
            }
        }

        void print(){

            for(int i=1 ; i<=size ; i++){
                cout<<arr[i]<<"  " ;
            }
            cout<<endl ; 
        }
    }; 




  int main (){

      heap h ; // object create kra he .. 

      h.insert(56) ; 
      h.insert(80) ; 
      h.insert(75) ; 
      h.insert(66) ; 
      h.insert(26) ; 

      h.print() ; 

    return 0 ;

  }
    
    ` ; 

}); 


  //-------------------------------------------------------------------------------

  btn21.addEventListener('click', () => {

    HTMLBox.textContent = ` 
    
  #include<iostream>
  #include<queue>
  #include<algorithm>
  using namespace std ;

  int main (){

        priority_queue<int> pq ; 

        pq.push(36) ; 
        pq.push(98) ; 
        pq.push(27) ; 
        pq.push(82) ; 
        pq.push(55) ; 

        cout<<"the top element is : "<<pq.top()<<endl ; 

        cout<<"the size is : "<<pq.size()<<endl ; 

        pq.pop() ; 
        cout<<"after pop : "<<pq.top()<<endl ; 

        if(pq.empty()){
            cout<<"empty he .. "<<endl ; 
        }
        else{
            cout<<"empty nhi he .. "<<endl ; 
        }


    return 0 ;

  }
    
    ` ; 

}); 


  //-------------------------------------------------------------------------------

  btn22.addEventListener('click', () => {

    HTMLBox.textContent = ` 
    
      
  // randon print nhi hote he map me jis order me dale he usi order me print hote he .. 

  #include<iostream>
  #include<map>
  #include<unordered_map>
  using namespace std ;

  int main (){

        // map banayege .. 
        //<int,int> matlab bata diya he ki data int , int ke form me hoga .. k
        map<string,int> m ; 


        // insertion krenge .. 

        // 1 .. 
        pair<string, int> p = make_pair("tani" , 3) ; 
        m.insert(p) ; 

        //2 .. 
        pair<string,int> q("hello" , 2);  
        m.insert(q) ; 

        //3 .. 
        m["heyy"] = 4 ; // ek new entity create ho gyi he .. 
        m["heyy"] = 5  ; // update hogi .. 



        // search .. 

        cout<<" the first ans is : "<<m["tani"] << endl ; 

        cout<<" the second ans is : "<<m.at("hello") << endl ; 

        cout<<" the third ans is : "<<m["unknown"] << endl ; 

        cout<<" the fourth ans is : "<<m.at("unknown") << endl ; 

        cout<<endl ; 


        // size ...
        cout<<" the size is : "<<m.size()<<endl ;  


        // to check presenece ki present he bhi ya nhi ..
        cout<<" the presence : "<<m.count("bro")<<endl ; 
        cout<<" the presence : "<<m.count("tani")<<endl ;


        // erase function .. 
        m.erase("tani") ; 
        cout<<" the size after erase is : "<<m.size()<<endl ;  



        // print .. 
        // pura hi print krneke liye .. 
        for(auto i : m ){
            cout<<i.first<<"   "<<i.second<<endl ; 
        }


      
        cout<<"/////////////////////////////"<<endl ; 


        // iterator se ek ek kar ke iterate kr sakte he . 
        map<string,int> ::iterator it = m.begin() ; 
        
        while (it != m.end())
        {
            cout<<it->first<<"   "<<it->second<<endl ; 
            it++ ; 
        }
        

    return 0 ;

  }


    ` ; 

}); 


  //-------------------------------------------------------------------------------

  btn23.addEventListener('click', () => {

    HTMLBox.textContent = ` 
    
    
  // swaping two nnumber without using extra variable .. 
  // using XOR operator .. 

  #include <iostream>
  using namespace std ; 

  int main() {

      int a = 5 ; 
      int b  = 7 ; 
      
      a = a^b ; 
      b = a^b ; 
      a = a^b ; 
      cout<<"the a is : "<<a<<endl ; 
      cout<<"the b is : "<<b<<endl ; 

      return 0;
  }
    
    ` ; 

}); 


  //-------------------------------------------------------------------------------

  btn24.addEventListener('click', () => {

    HTMLBox.textContent = ` 
    
  #include<iostream>
  using namespace std ;

    class TrieNode {

        public: 
            char data ; 
            TrieNode* children[26] ; 
            bool isTerminal ; 

            TrieNode(char ch){

                data = ch ; 
                for(int i=0 ; i<26 ; i++){
                    children[i] = NULL ; 
                }
                isTerminal = false ; 
                
            }
    }; 

    //--------------------------
    // insertion .. 

    class Trie{

        public:
        TrieNode* root ; 

        // constructor ... 
        Trie(){
            root = new TrieNode('\0') ; 
        }
        

        void insertUtils(TrieNode* root , string word){
            // base case .. 
            if(word.length() == 0 ){
                root->isTerminal = true ; 
                return ; 
            }

            // asuming the words are in the caps .. 
            int index = word[0] - 'A' ; 

            TrieNode* child ; 
            
            // present case .. bss age badh jao .. 
            if( root->children[index] != NULL ){
                child = root->children[index] ; 
            }
            // absent wala case ... create kr do .. 
            else{
                child = new TrieNode(word[0]) ; 
                root->children[index] = child ; 
            }

            // Recursion sambhal lega .. 
            insertUtils(child , word.substr(1)) ; 
        }



        void insertWord(string word){
            insertUtils(root , word) ; 
        }

    //-------------------------------------
    // search ... 

        bool searchUtils(TrieNode* root , string word){

            // base case .. 
            if(word.length() == 0 ){
                return root->isTerminal ; 
            }
            
            int index = word[0] - 'A' ; 

            TrieNode* child ; 

            // present wala case ..    
            if( root->children[index] != NULL ){
                child = root->children[index] ; 
            }
            // absent wala case .. 
            else{
                return false ; 
            }

            // Recursion.....
            return searchUtils( child , word.substr(1) ) ;  
        } 



        bool searchWord(string word){
            return searchUtils( root , word ) ; 
        }

    }; 

  //---------------------------

  int main (){

        Trie *t = new Trie() ; 

        t->insertWord("HEYY") ; 

        cout<<"present he ya nhi : "<< t->searchWord("HEYY") ; 

    return 0 ; 

  }
    
    ` ; 

}); 


  //-------------------------------------------------------------------------------

  btn25.addEventListener('click', () => {

    HTMLBox.textContent = ` 
    
      
  // tree = tree ek non linear data structure he jo herarrical way me data ko store krta he ..
  // binary tree = isme maximum 2 hi childrens ho sakte he ..

  #include<iostream>
  using namespace std ;

  //-----------------------------

        class node {
            public:
            int data ; 
            node* left; 
            node* right; 

        // constructor banayenge .....
        node(int d){
            this->data = d; 
            this->right = NULL; 
            this->left = NULL;
        }   
        };

    //--------------------------------
    // function jo tree ko create krega ..

    node* builtree(node* root){
        cout<<"enter the data : "<<endl ; 
        int data ; 
        cin>>data; 
        root = new node(data); 

        // condition agar data -1 he to NULL matlab aage kuch nhi he ..
        if(data == -1){
            return NULL; 
        }
        
        // creating left ..
        cout<<"enter data for insert in left of : "<<data<<endl ; 
        root-> left = builtree(root->left); 
        
        //creating right ..
        cout<<"enter data for insert in right of : "<<data<<endl ; 
        root->right = builtree(root->right); 
    }

  //--------------------------------------

  int main (){


      node* root = NULL ; 

      // tree ko create kr rhe he ..
      root = builtree(root); 


    return 0 ;
  }
    
    ` ; 

}); 

  //-------------------------------------------------------------------------------

  btn26.addEventListener('click', () => {

    HTMLBox.textContent = ` 
    
    

  #include<iostream>
  using namespace std ;

    //-------------------------------

        class node {
            public:
            int data ; 
            node* left; 
            node* right; 

          // constructor banayenge .....
          node(int d){
              this->data = d; 
              this->right = NULL; 
              this->left = NULL;
          }   
        };

    //-----------------------------------
    // function jo tree ko create krega ..

    node* builtree(node* root){
        cout<<"enter the data : "<<endl ; 
        int data ; 
        cin>>data; 
        root = new node(data); 

        // condition agar data -1 he to NULL matlab aage kuch nhi he ..
        if(data == -1){
            return NULL; 
        }
        
        // creating left ..
        cout<<"enter data for insert in left of : "<<data<<endl ; 
        root-> left = builtree(root->left); 
        
        //creating right ..
        cout<<"enter data for insert in right of : "<<data<<endl ; 
        root->right = builtree(root->right); 
    }

  //------------------------------------------
  // ------------inorder traversal ----------

  void inorder(node* root){

      // base case ...
      if(root==NULL){
          return; 
      }

      // applying L N R ...
      inorder(root->left); // L = left me jaaao ..

      cout<<root->data<<"  " ; // N = print krdo ..

      inorder(root->right); // R = right me jaaa0 ..
  }


  //------------------------------------------

  int main (){

        node* root = NULL ; 

        // tree ko create kr rhe he ..
        root = builtree(root); 

      //----------------------------------------
      //calling inorder function ..
      inorder(root); 


    return 0 ;

  }
    
    ` ; 

}); 

  //-------------------------------------------------------------------------------

  btn27.addEventListener('click', () => {

    HTMLBox.textContent = ` 
    
    

  #include<iostream>
  #include<queue>
  using namespace std ;

    //------------------------------

        class node {
            public:
            int data ; 
            node* left; 
            node* right; 

          // constructor banayenge .....
          node(int d){
              this->data = d; 
              this->right = NULL; 
              this->left = NULL;
          }   
        };

    //--------------------------------
    // function jo tree ko create krega ..

    node* builtree(node* root){
        cout<<"enter the data : "<<endl ; 
        int data ; 
        cin>>data; 
        root = new node(data); 

        // condition agar data -1 he to NULL matlab aage kuch nhi he ..
        if(data == -1){
            return NULL; 
        }
        
        // creating left ..
        cout<<"enter data for insert in left of : "<<data<<endl ; 
        root-> left = builtree(root->left); 
        
        //creating right ..
        cout<<"enter data for insert in right of : "<<data<<endl ; 
        root->right = builtree(root->right); 
    }

    //------------------------------------------
    // level order traversal ...........


    void levelOrderTraversal(node* root) {
        queue<node*> q;
        q.push(root);
        q.push(NULL);

        while(!q.empty()) {
            node* temp = q.front();
            q.pop();

            if(temp == NULL) { 
                //purana level complete traverse ho chuka hai
                cout << endl;
                if(!q.empty()) { 
                    //queue still has some child ndoes
                    q.push(NULL);
                }  
            }
            else{
                cout << temp -> data << " ";
                if(temp ->left) {
                    q.push(temp ->left);
                }

                if(temp ->right) {
                    q.push(temp ->right);
                }
            }
        }

    }

  //----------------------------

  int main (){

        node* root = NULL ; 

        // tree ko create kr rhe he ..
        root = builtree(root); 

    //-----------------------------

        //1 3 7 -1 -1 11 -1 5 17 -1 -1 -1 
        // calling level order traversal function ..
        levelOrderTraversal(root); 
    
    return 0 ;

  }
    
    ` ; 

}); 

  //-------------------------------------------------------------------------------

  btn28.addEventListener('click', () => {

    HTMLBox.textContent = ` 
    
    
  #include<iostream>
  using namespace std ;

    //-----------------------------------

        class node {
            public:
            int data ; 
            node* left; 
            node* right; 

        // constructor banayenge .....
          node(int d){
              this->data = d; 
              this->right = NULL; 
              this->left = NULL;
          }   
        };

    //-------------------------------------
    // function jo tree ko create krega ..

    node* builtree(node* root){
        cout<<"enter the data : "<<endl ; 
        int data ; 
        cin>>data; 
        root = new node(data); 

        // condition agar data -1 he to NULL matlab aage kuch nhi he ..
        if(data == -1){
            return NULL; 
        }
        
        // creating left ..
        cout<<"enter data for insert in left of : "<<data<<endl ; 
        root-> left = builtree(root->left); 
        
        //creating right ..
        cout<<"enter data for insert in right of : "<<data<<endl ; 
        root->right = builtree(root->right); 
    }

  //------------------------------------
  //--------- preorder traversal -------

  void preorder(node* root){

      // base case ..
      if(root==NULL){
          return ; 
      }

      // applying N L R ...

      cout<<root->data<<"  " ; // N 

      preorder(root->left); // L 

      preorder(root->right); // R 
  }

  //---------------------------------------

  int main (){

      node* root = NULL ; 

      // tree ko create kr rhe he ..
      root = builtree(root); 

      // calling preorder function ..
      preorder(root); 

    return 0 ;

  }
    
    ` ; 

}); 

  //-------------------------------------------------------------------------------

  btn29.addEventListener('click', () => {

    HTMLBox.textContent = ` 
    

  #include<iostream>
  using namespace std ;

  //--------------------------------

        class node {
            public:
            int data ; 
            node* left; 
            node* right; 

        // constructor banayenge .....
          node(int d){
              this->data = d; 
              this->right = NULL; 
              this->left = NULL;
          }   
        };

    //-----------------------------------
    // function jo tree ko create krega ..

    node* builtree(node* root){
        cout<<"enter the data : "<<endl ; 
        int data ; 
        cin>>data; 
        root = new node(data); 

        // condition agar data -1 he to NULL matlab aage kuch nhi he ..
        if(data == -1){
            return NULL; 
        }
        
        // creating left ..
        cout<<"enter data for insert in left of : "<<data<<endl ; 
        root-> left = builtree(root->left); 
        
        //creating right ..
        cout<<"enter data for insert in right of : "<<data<<endl ; 
        root->right = builtree(root->right); 
    }

    //--------------------------------------
    //--------- postorder traversel --------
    
    void postorder(node* root){
        // base case ..
        if(root == NULL){
            return ; 
        }
        
        //applying L R N ...

        postorder(root->left); // L 

        postorder(root->right); // R 

        cout<<root-> data <<"  " ; // N 
    }


  //-------------------------------------

  int main (){

      node* root = NULL ; 

      // tree ko create kr rhe he ..
      root = builtree(root); 

      // calling postorder function ...
      postorder(root); 

    return 0 ;

  }

    ` ; 

}); 

  //-------------------------------------------------------------------------------

  btn30.addEventListener('click', () => {

    HTMLBox.textContent = ` 
    
      
  // BST  =  ek type of sorted binary tree hota he ..
  // jiske left me sare nodes root notes se chote hote he aur right side me sare node root node se bade hote he ..
  

  #include<iostream>
  #include<queue>
  using namespace std ;

        class Node {
            public: 
                int data ; 
                Node* left ; 
                Node* right ; 

            // constructor banayenge ...
            Node(int d){
                this->data = d ; 
                this->left = NULL ; 
                this -> right = NULL ; 
            }    
        };

    //-------------------------------
    // code for level order traversal ..

    void levelOrderTraversal(Node* root){
        cout<<endl ; 
        cout<<"level order traversal : "<<endl ; 
        // creating queue ..
        queue<Node*> q ; 
        q.push(root); 

        while(!q.empty()){
            Node* temp = q.front(); 
            cout<< temp -> data <<"  "; 
            q.pop(); 

            if(temp->left){
                q.push(temp->left);
            }

            if(temp->right){
                q.push(temp->right);
            }
        }
    }

    //---------------------------------
    // BST ko create krne ke liye ek function banayenge ..

    Node* insertintoBST(Node* root , int d){
        // base case ..
        if(root == NULL){
            root = new Node(d); 
            return root ; 
        }

      // compare krenge d ko root ke data ke sath .. 
      // agar d root ke data se bada he to right me insert krenge .. 
      // agar d root ke data se chota he to left me insert krenge ..
      
      if( d > root->data){
        // right part me jayenge .. 
        root->right = insertintoBST(root->right , d); 
      }
      else{
        // left part me jayenge ..
        root->left = insertintoBST(root->left , d); 
      }
      return root ; 
    }

    // ------------------------------
    // ek function banayenge input lene ke liye .. 

    void takeinput(Node* &root){
        int data ; 
        cin>> data ; 
        // jab tak -1 na aa jaye jab tak input lete rh .. 
        while(data != -1){
            root = insertintoBST(root , data); 
            cin>>data; 
        }
    }

  //--------------------------------------

  int main (){

      Node* root = NULL ; 
      // calling takeinput function ..
      takeinput(root); 

      // calling level order traversal function ..
      levelOrderTraversal(root); 

    return 0 ;

  }
    
    ` ; 

}); 

  //-------------------------------------------------------------------------------

  btn31.addEventListener('click', () => {

    HTMLBox.textContent = ` 
    
    

  // sample output ..
  // 0 0 0 1 1 0 
  // 0 0 1 0 1 1 
  // 0 1 0 1 0 1 
  // 1 0 1 0 0 1 
  // 1 1 0 0 0 1 
  // 0 1 1 1 1 0 

  #include<iostream>
  using namespace std;

    int vertArr[20][20]; //the adjacency matrix initially 0
    int count = 0;


    void displayMatrix(int v) {
      int i, j;
      for(i = 0; i < v; i++) {
          for(j = 0; j < v; j++) {
            cout << vertArr[i][j] << " ";
          }
          cout << endl;
      }
    }

    void add_edge(int u, int v) {       //function to add edge into the matrix
      vertArr[u][v] = 1;
      vertArr[v][u] = 1;
    }


  int  main() {

      int v = 6;   // there are 6 vertices in the graph

      add_edge(0, 4);
      add_edge(0, 3);
      add_edge(1, 2);
      add_edge(1, 4);
      add_edge(1, 5);
      add_edge(2, 3);
      add_edge(2, 5);
      add_edge(5, 3);
      add_edge(5, 4);

      //calling printing function .. 
      displayMatrix(v);

  }
    
    ` ; 

}); 

  //-------------------------------------------------------------------------------

  btn32.addEventListener('click', () => {

    HTMLBox.textContent = ` 
    
    
// implementing graph using Adjacency List 
// using Map to store first entity and second entity 
// first entity is a single type object so it can be int , string etc 
// here we use int as first entity 
// second entity is a list which contains the infornmation about connections of nodes 
// Class Graph consist of two functions one for addingEdges and second for printing '




  #include<iostream>
  #include<map>
  #include<list>
  #include<unordered_map>

  using namespace std ;


  // ye generic way he matlab kisi bhi tarah ka data dal sakte he .. 
  // bss jha jha datatype int likha he uskoo T se replace krna he ..


  //  template <typename T>

    class Graph{

        public: 

            unordered_map<int , list<int> > adj ; 

            // ek function banayenge edge ko insert krne ke liye .. 

            void addEdge(int u , int v , bool direction ){

                // direction = 0 matlab undirected graph
                // direction = 1 matlab directed graph

                // create krenege edge u ----> v 
                adj[u].push_back(v) ; // edge bn gayi .. 

                // v -----> u jab hi ban skati he jab wo ek undirected graph ho 
                // matlab direction 0 ho .. 

                // check krenge direction ko .. 
                if( direction == 0 ){ // matlab undirected graph he .. 
                    adj[v].push_back(u) ; 
                }

            }
            

            // print function .... 
            void printAdjacencyList(){
              for (auto i: adj){

                    cout<<i.first<< "->" ; 

                    for (auto j: i.second){
                        cout<< j << " , " ; 
                    }
                    cout<<endl ; 
              }
                
            }
    };

  //------------------------------



  int main (){
      
        int n ; // number of nodes .. 
        cout<<"enter the number of nodes"<<endl ; 
        cin>> n ; 

        int m ; // number of edges .. 
        cout<<"enter the number of edges"<<endl ; 
        cin>> m ; 

        // if using template there is some changes .. 
        // Graph<int> g ; 

        Graph g ; // creating ... 

        for(int i=0 ; i<m ; i++){
            int u , v ; 
            cin>> u >> v ; 


            // creating undirected graph .. 
            g.addEdge(u , v , 0 ) ; 
        }

        //printing graph .... 
        g.printAdjacencyList() ; 


    return 0 ;

  }

    
    ` ; 

}); 

  //-------------------------------------------------------------------------------

  btn33.addEventListener('click', () => {

    HTMLBox.textContent = ` 
    
    
  #include<unordered_map>
  #include<queue>
  #include<list>
  #include<set>

    void  preparedAdjList ( unordered_map<int,set<int>> &adjList, vector<pair<int, int>> &edges){
        for(int i=0; i<edges.size();i++){
            int u= edges[i].first;
            int v= edges[i].second;
            
            adjList[u].insert(v);
            adjList[v].insert(u);
        }
    }


  //--------------- BFS CODE ---------------------

    void bfs(  unordered_map<int,set<int>> &adjList,unordered_map<int,bool> &visited,    vector<int>&ans,int node){
      queue<int>q;
      q.push(node);
        visited[node]=1;
        
        while(!q.empty()){
            int frontnode=q.front();
            q.pop();
            //storefrontnode to ans
            ans.push_back(frontnode);
            //traverse all neighbours of frontnode
            for(auto i:adjList[frontnode]){
                if(!visited[i]){
                    q.push(i);
                    visited[i]=1;
                }
            }
        }
    }

  //------------------------------------

    vector<int> BFS(int vertex, vector<pair<int, int>> edges)
    {
        unordered_map<int,set<int>> adjList;
        vector<int> ans;
        unordered_map<int,bool> visited;
        
        preparedAdjList(adjList,edges);
        // traverse all components
        for(int i =0;i<vertex;i++){
            if(!visited[i]){
                bfs(adjList,visited,ans,i); 
            }
        }
      return ans; 
    }

    
    ` ; 

}); 

  //-------------------------------------------------------------------------------

  btn34.addEventListener('click', () => {

    HTMLBox.textContent = ` 
    
    
  #include <bits/stdc++.h>
  using namespace std;

    class Solution {

        void dfs(int node, vector<int> &vis, vector<int> adj[], vector<int> &storeDfs) {
            storeDfs.push_back(node); 
            vis[node] = 1; 
            for(auto it : adj[node]) {
                if(!vis[it]) {
                    dfs(it, vis, adj, storeDfs); 
                }
            }
        }

    public:

      vector<int>dfsOfGraph(int V, vector<int> adj[]){
          vector<int> storeDfs; 
          vector<int> vis(V+1, 0); 
          for(int i = 1;i<=V;i++) {
            if(!vis[i]) dfs(i, vis, adj, storeDfs); 
          }
          return storeDfs; 
      }
    };
  
    void addEdge(vector<int> adj[],int u,int v)
    {
        adj[u].push_back(v);
        adj[v].push_back(u);
    }

  int main()
  {
        vector<int> adj[6];
        
        addEdge(adj,1,2);
        addEdge(adj,1,3);
        addEdge(adj,1,4);
        addEdge(adj,1,5);
        addEdge(adj,2,4);
        addEdge(adj,2,1);
        addEdge(adj,3,1);
        addEdge(adj,4,1);
        addEdge(adj,4,2);
        addEdge(adj,5,1);

        Solution obj;

        vector<int> df;

        df= obj.dfsOfGraph(5, adj);
        
        for(auto it: df)
        cout<<it<<" ";
  
      return 0;
  }

    
    ` ; 

}); 

  //-------------------------------------------------------------------------------

  btn35.addEventListener('click', () => {

    HTMLBox.textContent = ` 
    
    

  // ------- KAHNS ALGORITHMS ----------- 


  #include<bits/stdc++.h>
  using namespace std;


    class Graph {
    public:


      vector<int> topologicalSortBFS(int N, vector<int> adj[]) {
            queue<int> q; 

            // find all indegrees .. 
          vector<int> indegree(N, 0); 

          for(int i = 0;i<N;i++) {
              for(auto j: adj[i]) {
                  indegree[j]++; 
              }
          }
          

            // 0 indegree walo ko queue me push krdo .. 
          for(int i = 0;i<N;i++) {
              if(indegree[i] == 0) {
                  q.push(i); 
              }
          }


        // BFS CODE ---------------

          vector<int> ans;
          while(!q.empty()) {

              int front = q.front(); 
              q.pop(); 
                
                // ans me store kra lenge .. 
              ans.push_back(front);

                //indegree updation ... 
              for(auto i : adj[front]) {

                  indegree[i]--;
                  if(indegree[i] == 0) {
                      q.push(i); 
                  }
              }
          }
          return ans;
      }


    };

  //----------------------------


  int main()
  {
          vector<int> adj[6];

          adj[5].push_back(2);
          adj[5].push_back(0);
          adj[4].push_back(0);
          adj[4].push_back(1);
          adj[3].push_back(1);
          adj[2].push_back(3);

          Graph g ; // object created .. 

          vector<int> v = g.topologicalSortBFS(6, adj);

            cout << "the topological sort is : " << "  " ; 

          for(auto it: v)
          cout << it << "  ";
        
      return 0;
  }
    
    ` ; 

}); 

  //-------------------------------------------------------------------------------

  btn36.addEventListener('click', () => {

    HTMLBox.textContent = ` 
    
    

  #include<bits/stdc++.h>
  using namespace std ; 

    class Graph {
        public:

        // creating adjacency list .. 
        unordered_map<int,list<pair<int,int>>> adj ; 

        // function edges ko add krne k eliye .. 
        void addEdge( int u , int v , int weight ){

            pair<int,int> p = make_pair(v , weight) ; 
            adj[u].push_back(p) ; 
        }


        // function to print adjacency list .. 
        void Printadj(){
            for(auto i: adj ){
                cout<<i.first<<" -> " ; 
                for(auto j: i.second){
                    cout<<"(" << j.first << " , " <<j.second<< "), " ; 
                }
                cout<<endl ; 
            }
        }


        void dfs( int node , unordered_map<int,bool>& visited , stack<int>& topo ){

            visited[node] = true ; 

            for(auto neighbour: adj[node]){
                if(!visited[neighbour.first]){
                    dfs(neighbour.first , visited , topo) ; 
                }
            }
            topo.push(node) ; 
        }


        void getShotestPath(int src , vector<int>& distance , stack<int>& topo){
            
            distance[src] = 0 ; 

            while (!topo.empty()){
              int top = topo.top() ; 
              topo.pop() ; 

              if(distance[top] != INT_MAX){
                for(auto i: adj[top]){
                    if(distance[top] + i.second < distance[i.first] ){
                        // distance ko update kr denge .. 
                        distance[i.first] = distance[top] + i.second ; 
                    }
                }
              }
            }
        }

    };

  //-----------------------------------


  int main(){

        //object creation .. 
        Graph g ; 

            // adding edges .. k
            g.addEdge( 0 , 1, 5 ) ; 
            g.addEdge( 0 , 2, 3 ) ; 
            g.addEdge( 1 , 2, 2 ) ;
            g.addEdge( 1 , 3, 6 ) ;
            g.addEdge( 2 , 3, 7 ) ;
            g.addEdge( 2 , 4, 4 ) ;
            g.addEdge( 2 , 5, 2 ) ;
            g.addEdge( 3 , 4, -1 ) ;
            g.addEdge( 4 , 5, -2 ) ;

        g.Printadj() ; // calling print function .. 

        int n = 6 ; 
        // topological sort 
        unordered_map<int,bool> visited ; 
        stack<int> st ; 

        for(int i=0 ; i<n ; i++){
            if(!visited[i]){
                g.dfs(i , visited , st ) ; 
            }
        }

        
        int src = 1 ; 
        vector<int> distance(n) ; 

        for(int i=0 ;i<n ;i++){
            distance[i] = INT_MAX ; // initially sare infinite honge .. 
        }


        g.getShotestPath(src , distance , st) ; 

        cout<<endl ; 
        cout<<"The answer is : "<<" " ; 

        for(int i=0 ;i<distance.size(); i++){
            cout<< distance[i] << " " ; 
        }

        cout<<endl ; 


    return 0 ;
      
  }
    
    ` ; 

}); 

  //-------------------------------------------------------------------------------

  btn37.addEventListener('click', () => {

    HTMLBox.textContent = ` 
    
      

  #include <bits/stdc++.h>

  using namespace std;

    class Graph {
      private:

        bool checkCycle(int node, vector < int > adj[], int vis[], int dfsVis[]) {

          vis[node] = 1;
          //extra data structure lena padega .. 
          dfsVis[node] = 1;

          for (auto it: adj[node]) {

            if (!vis[it]) {

                    if (checkCycle(it, adj, vis, dfsVis)){
                        return true;
                    } 

            } 

            else if (dfsVis[it]) {
              return true;
            }

          }

          // dfsvisited ko update krna padega .. 
          dfsVis[node] = 0;

          return false;

        }

      public:

        bool isCyclic(int N, vector < int > adj[]) {
          int vis[N], dfsVis[N];
        
          for(int i = 0; i < N; i++){
            vis[i] = 0;
            dfsVis[i] = 0;
          }

          for (int i = 0; i < N; i++) {
            if (!vis[i]) {
              // cout << i << endl; 
              if (checkCycle(i, adj, vis, dfsVis)) {
                // cout << i << endl;
                return true;
              }
            }
          }
          return false;
        }
    };


    // function to add edges .. 
    void addEdge(vector < int > adj[], int u, int v) {

      adj[u].push_back(v);

    }

  int main() {

      int V = 6;

      // adding edges .. 
      vector < int > adj[V];

      addEdge(adj, 0, 1);
      addEdge(adj, 1, 2);
      addEdge(adj, 1, 5);
      addEdge(adj, 2, 3);
      addEdge(adj, 3, 4);
      addEdge(adj, 4, 0);
      addEdge(adj, 4, 1);
      

      Graph obj;

        cout<<"THE RESULT IS : " << "   " ; 

      if (obj.isCyclic(V, adj)){
        cout << "Cycle Detected" << "\n";
      }
        
      else{
        cout << "No Cycle Detected";
      }
      

     return 0;

  }
    
    
    ` ; 

}); 

  //-------------------------------------------------------------------------------

  btn38.addEventListener('click', () => {

    HTMLBox.textContent = ` 
      
      
      

  #include<bits/stdc++.h>
  using namespace std ; 

    int bellmonFord(int n , int m , int src , int dest , vector<vector<int>> &edges ) {

        vector<int> dist(n+1 , 1e9) ; // 1e9 is the maximum number consider as infinty

        dist[src] = 0 ; 

        // n - 1 times 
        for(int i=1 ; i<=n ; i++) {
            // traverse all edges list .. 
            for(int j=0 ; j<m ; j++) {
                int u = edges[j][0] ; 
                int v = edges[j][1] ; 
                int wt = edges[j][2] ; 

                if (dist[u] != 1e9 && ((dist[u] + wt) < dist[v])) {
                    dist[v] = dist[u] + wt ; // updating .. 
                }
            }
        } 

        // check krenge ki negative cycle present he ya nhi .. 
        // ek aur baar formula apply krenge .. (condition)

        bool flag = 0 ; // agar negative cycle hogi to flag ko 1 kr denge .. 

                for(int j=0 ; j<m ; j++) {
                int u = edges[j][0] ; 
                int v = edges[j][1] ; 
                int wt = edges[j][2] ; 

                if (dist[u] != 1e9 && ((dist[u] + wt) < dist[v])) {
                    flag = 1 ; // checking for negative cycle ..  
                }
            }

            // flag ko check krenge .. 
            if ( flag == 0 ) {
                return dist[dest] ;
            }

            return -1 ; 

    }

    ` ; 

}); 

  //-------------------------------------------------------------------------------

  btn39.addEventListener('click', () => {

    HTMLBox.textContent = ` 
    
      

  #include <bits/stdc++.h>
  using namespace std;


    // minimum find krne ke liye function .. 
    int min(int a , int b ){
        if (a < b ){
            return a ; 
        }
        return b ; 
    }

      // dfs function ..

      void dfs(int node, int parent, vector<int> &disc, vector<int> &low,
      unordered_map<int,bool>& visited, unordered_map<int, list<int> >& adj,
        vector<int>& ap , int &timer) {

          visited[node] = true ; 
          disc[node] = low[node] = timer++ ; 
          int child = 0 ; 

          for(auto neighbour: adj[node]) {
              if( neighbour == parent ){
                  continue; // ignore .. 
              }
              if (!visited[neighbour]){
                  dfs(neighbour , node , disc , low , visited , adj, ap , timer) ; // calling
                  // low ko update krdenge .. 
                  low[node] = min(low[node] , low[neighbour]) ; 

                  // check krenge articulation point he ya nhi .. 
                  if ( low[neighbour] >= disc[node] && parent != -1 ){
                      // matlab articulation point he .. 
                      ap[node] = 1 ; 
                  }
                  child++ ; 
              }
              else {
                  // back edge ke liye .. 
                  low[node] = min(low[node] , disc[neighbour]) ; 
              }
          }

          if ( parent == -1 && child > 1 ) {
              ap[node] = 1 ; 
          }

        }

    int main(){

        int n = 5; // n = number of nodes ..
        int e = 5; // e = number of edges ..

        vector<pair<int, int>> edges;

        // inserting ...
        edges.push_back(make_pair(0, 3));
        edges.push_back(make_pair(3, 4));
        edges.push_back(make_pair(0, 4));
        edges.push_back(make_pair(0, 1));
        edges.push_back(make_pair(1, 2));

        // adj list ..
        unordered_map<int, list<int>> adj;

        for (int i = 0; i < edges.size(); i++)
        {
            int u = edges[i].first;
            int v = edges[i].second;

            adj[u].push_back(v);
            adj[v].push_back(u);
        }

        int timer = 0 ; 
        vector<int> disc(n);
        vector<int> low(n);

        unordered_map<int, bool> visited;
        vector<int> ap(n, 0);

        // initiialising ..
        for (int i = 0; i < n; i++)
        {
            disc[i] = -1;
            low[i] = -1;
        }

        // dfs ..
        for (int i = 0; i < n; i++)
        {
            // agar current node visisted nhi he to dfs call kr do ..
            if (!visited[i])
            {
                dfs(i, -1, disc, low, visited, adj , ap, timer);
            }
        }

        // print articulation points ..
        cout << "Articulation Points Are : " << " ";
        for (int i = 0; i < n; i++)
        {
            if (ap[i] != 0)
            {
                cout << i << "  ";
            }
        }
        cout<<endl ; 

       return 0;

    }
    
    
    ` ; 

}); 

  //-------------------------------------------------------------------------------

  btn40.addEventListener('click', () => {

    HTMLBox.textContent = ` 
    
  #include<bits/stdc++.h>
  using namespace std ; 



    vector<int> dijkshtra(vector<vector<int>>& vec , int vertices , int edges , int source ){

        // create krenge Adjacency list ko 
        unordered_map<int,list<pair<int,int>>> adj ; 

        for(int i=0 ; i<edges ; i++){
            int u = vec[i][0] ; 
            int v = vec[i][1] ; 
            // weight nikalenege .. 
            int w = vec[i][2] ; 

            adj[u].push_back(make_pair(v,w)) ; 
            adj[v].push_back(make_pair(u,w)) ; 
        }

  //------------------------------------

        // distance wala array banayenge .. 
        vector<int> dist(vertices) ; 
        for(int i=0 ; i<vertices ; i++){
            dist[i] = INT_MAX ;   // initialise it with infinte ..       
        }


        // set banayenge jo do chije carry krega 
        // 1st = distance of node  ,  2nd = node  
        set<pair<int,int> > st ; // (distance,node)

        dist[source] = 0 ; 
        st.insert(make_pair(0 , source)) ; 

        while(!st.empty()){

          // fetch krenge top ka record .. 
          auto top = *(st.begin()) ;  
          //top ke andar do chije hogi ek node ki distance aur ek topnode 

          int nodeDistance = top.first ; 
          int topNode = top.second ; 

            //remove the top record 
          st.erase(st.begin()) ; 

          // neighbours pe travel krenge ---------------------

          for(auto neighbour: adj[topNode]){
            // condition update krna he ya nhi check krenge ..
            if(nodeDistance + neighbour.second < dist[neighbour.first]){
                auto record = st.find(make_pair(dist[neighbour.first], neighbour.first)) ; 

                // if record found then erase it .. 
                if( record != st.end ){
                    st.erase(record) ; 
                }

                // distance updation .. 
                dist[neighbour.first] = nodeDistance + neighbour.second ; 
                //record ko set me push kr denge pair banake .. 
                st.insert(make_pair(dist[neighbour.first], neighbour.first )) ; 
            }
          }
        }
        
        return dist ; 
    }
      
    ` ; 

}); 

  //-------------------------------------------------------------------------------

  btn41.addEventListener('click', () => {

    HTMLBox.textContent = ` 
    
      

  #include<bits/stdc++.h>
  using namespace std ; 


    // DFs function .. 
    void dfs(int node , unordered_map<int,bool>& visited , stack<int>& st , unordered_map<int,list<int> >& adj) {

        visited[node] = true ; 
        for(auto neighbour: adj[node]){
            if(!visited[neighbour]) {
                dfs(neighbour , visited , st , adj ) ; 
            }
        }
        st.push(node) ;   
    }


    // reverse DFS function ... 
    void reverseDFS (int node , unordered_map<int,bool>& visited , unordered_map<int, list<int> >& adj) {

        visited[node] = true ; 

        for(auto neighbour: adj[node]) {
            if(!visited[neighbour]) {
                reverseDFS(neighbour , visited , adj ) ; 
            }
        }
    }

    int stronglyConnectedComponents( int v , vector<vector<int>>& edges ){

        // adjacency list .. 
        unordered_map<int,list<int> > adj ; 

        for(int i = 0 ; i < edges.size() ; i++){
            int u = edges[i][0] ; 
            int v = edges[i][1] ; 

            adj[u].push_back(v) ; // directed graph he 
        }


        //first step =  Topological sort krenge 
        stack<int> st ; 
        unordered_map<int,bool> visited ; 
        for(int i = 0 ; i < v ; i++) {
            if (!visited[i]) {
                // dfs calling .. 
                dfs(i , visited , st , adj ) ; 
            }
        }

      
        // second step = graph ko Transpose krenge 
        unordered_map<int, list<int> > transpose ; 

        for(int i=0 ; i<v ; i++){
            visited[i] = 0 ; 
            for(auto neighbour: adj[i]){
                transpose[neighbour].push_back(i) ; // transpose created .. 
            }
        }


        // step third = ordering ke hisab se DFS call krna he 
        int count = 0 ; 
        while (!st.empty()){ 

            int top = st.top() ; 
            st.pop() ; 

            if ( !visited[top] ) {
                count++ ; 
                reverseDFS( top , visited , transpose ) ; 
            }
        }
        return count ; 
        
    }
    
    ` ; 

}); 

//------------------------------------------------------------------

btn42.addEventListener('click' , () => {

  HTMLBox.textContent = `
  
  #include<bits/stdc++.h>
  using namespace std ; 


    // comparator .. 
    bool cmp (vector<int?& a , vector<int>& b ) {
        return a[2] < b[2] ; 
    }

    void makeSet(vector<int>& parent , vector<int>& rank , int n ){
        // shuru me element ka parent khud element hii he .. 
        // har kisi ki rank starting me 0 ke equal he .. 
        for (int i=0 ; i<n ; i++){
            parent[i] = i ; 
            rank[i] = 0 ; 
        }
    }

    // function for find parent .. 
    int findParent(vector<int>& parent , int node ){
        if( parent[node] == node ){
            return node ; 
        }
        return parent[node] = findParent( parent , parent[node] ) ; 
    }


    // union wali chij .. 
    void unionSet(int u , int v , vector<int>& parent , vector<int>& rank ) {

        u = findParent(parent , u ) ; 
        v = findParent(parent , v ) ; 

        // ranks ko compare krenge .. 
        if( rank[u] < rank[v] ){
            parent[u] = v ; 
        }
        else if ( rank[v] < rank[u] ){
            parent[v] = u ; 
        }
        else {
            // logic .. conditions .. 
            parent[v] = u ; 
            rank[u]++ ; 
        }

    }

    int minimumSpanningTree(vector<vector<int>>& edges , int n ) {

        // sort ---
        sort(edges.begin() , edges.end() , cmp ) ; 

        vector<int> parent(n) ; 
        vector<int> rank(n) ;

        // calling .. 
        makeSet(parent , rank , n) ; 

        int minWeight = 0 ; 

        for(int i=0 ; i<edges.size() ; i++) {
            int u = findParent(parent , edges[i][0]) ; 
            int v = findParent(parent , edges[i][1]) ; 
            int wt = edges[i][2] ; 

            // check krenge dono same he ya nhi .. 
            // same he to ignore .. 
            // differnet he to attach .. 

            if( u != v ){
                minWeight += wt ; 
                unionSet(u , v ,parent , rank)  ; 
            }
        }
        return minWeight ; 
    }

  ` ; 

}) ; 


//------------------------------------------------------------------

btn43.addEventListener('click' , () => {

  HTMLBox.textContent = `
  
    

  #include <bits/stdc++.h> 
  using namespace std ; 

    vector<pair<pair<int, int>, int>> calculatePrimsMST(int n, int m, vector<pair<pair<int, int>, int>> &g){

        // create krenge adjacency list .. 
        unordered_map<int,list<pair<int,int> > > adj ; 

        for(int i=0 ; i<g.size() ; i++){
            int u = g[i].first.first ; 
            int v = g[i].first.second ; 

            // weight nikalnege .. 
            int w = g[i].second ; 

            adj[u].push_back(make_pair(v,w)) ; 
            adj[v].push_back(make_pair(u,w)) ; 
        }
      
        vector<int> key(n+1) ; 

        vector<bool> mst(n+1) ; 

        vector<int> parent(n+1) ; 

        for(int i=0 ;i<=n ; i++){
            key[i] = INT_MAX ; 
            mst[i] = false ; 
            parent[i] = -1 ; 
        }

        // ALGORITHM START --------------------
        key[1] = 0 ; 
        parent[1] = -1 ; 

        for(int i=1 ; i<n ; i++){

            int mini = INT_MAX ; 
            int u ; 

            // find krenge min wali node ..
            for(int v=1 ; v<=n ;v++){
                if(mst[v] == false && key[v] < mini){
                    u = v ; 
                    mini = key[v] ; 
                }
            }

            // mark krenge min node as true ..
            mst[u] = true ; 

            // check its adjacent node ... 
            for(auto it: adj[u]){
                int v = it.first; 
                int w = it.second ; 

                if(mst[v] == false && w < key[v] ){
                    // parent aur key ko update kr denge 
                    parent[v] = u ; 
                    key[v] = w ; 
                }
            }

        }

        // answer banayenge .. 
        vector<pair<pair<int , int>, int> > result ; 
        for(int i=2 ; i<=n ; i++){
            result.push_back({{parent[i], i} , key[i]}) ; 
        }

        return result ; 
      
    }


  ` ; 

}) ; 


//------------------------------------------------------------------

