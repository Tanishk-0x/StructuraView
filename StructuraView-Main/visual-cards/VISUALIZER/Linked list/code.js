
let btn = document.getElementById("swap") ; 

let area = document.getElementById("code") ; 

let ig = document.getElementById("example") ; 

let para = document.getElementById("para") ; 

let heading = document.getElementById("heading") ; 

ig.src = "singly.png"


para.innerText = `Singly Linked List is a type of linked list where each node has two parts: data and next pointer. The data part stores the information and the next pointer points to the next node of the linked list. The next pointer of the last node stores null as it is the last node of the linked list and there is no next node. Traversal of items can be done in the forward direction only due to the linking of every node to its next node.` ; 

heading.innerText = `Singly linked list :` ; 

area.textContent = `
    #include<iostream>
    using namespace std ;

    class Node{

        public:

        int data ; // data of linked link ...
        Node* next ; // address of next node stored ............

        // constructor ............
        Node(int data){
            this -> data = data ; 
            this -> next = NULL ; 
        }
    };

    void insertathead(Node* &head , int d ){

    // new node ko create kr liya he ..

        Node* temp = new Node(d);
        temp -> next = head ;
        head = temp ;  

    }

    void print(Node* &head){
        Node* temp = head ; 

        while(temp != NULL){
            cout<< temp -> data <<" "; 
            cout<< temp -> next ; 
        }
        cout<<endl ; 
    }   

//-------------------------------------

    int main (){

        Node* node1 = new Node(15); 
    
        // cout<<node1 -> data <<endl ;
        // cout<<node1 -> next <<endl ; 

        // head pointed to node 1  ..
        Node* head = node1 ; 
        print(head);

        insertathead(head , 12); 
        print(head); 


    return 0 ;
    }
` ; 




btn.addEventListener('click' , () => {

    heading.innerText = `Doubly linked list : ` ; 

    para.innerText = ` A doubly linked list is a more complex data structure than a singly linked list, but it offers several advantages. The main advantage of a doubly linked list is that it allows for efficient traversal of the list in both directions. This is because each node in the list contains a pointer to the previous node and a pointer to the next node. This allows for quick and easy insertion and deletion of nodes from the list, as well as efficient traversal of the list in both directions. ` ; 

    ig.src = "doubly.jpg" ; 

    area.textContent = `
    #include<bits/stdc++.h>
    using namespace std;

        class node {
            public:

        int data;
        node * next;
        node * prev;


        node(int val) {
            data = val;
            next = NULL;
            prev = NULL;
        }
    };


    void insertAtTail(node * & head, int val) {

    node * new_node = new node(val);

    if (head == NULL) {
        head = new_node;
        return;
    }

    node * temp = head;

        while (temp -> next != NULL) {
            temp = temp -> next;
        }
        temp -> next = new_node;
        new_node -> prev = temp;
    }


    void insertAtHead(node * & head, int val) { 

        node * ptr = new node(val);
        ptr -> next = head;

        if (head != NULL) {
            head -> prev = ptr;
        }
    head = ptr;
    }

    void insertAtMiddle(node * & head, int val, int pos) {
        node * ptr = new node(val);
        node * temp = head;
        for (int i = 0; i < pos - 2; i++) {
            temp = temp -> next;
        }
        ptr -> next = temp -> next;
        temp -> next = ptr;
        ptr -> prev = temp;
        if (ptr -> next != NULL) {
            ptr -> next -> prev = ptr;
        }
    }

    void deleteAtFirst(node * & head) {
        node * todelete = head;
        head = head -> next;
        head -> prev = NULL;
        delete todelete;
    }

    void deleteAtLast(node * & head) {
        if (head -> next == NULL) {
            deleteAtFirst(head);
            return;
        }
        node * temp = head;
        while (temp -> next != NULL) {
            temp = temp -> next;
        }

        temp -> prev -> next = NULL;
        free(temp);
        }

    void deleteAtposition(node * & head, int n) {
        if (n == 1) {
            deleteAtFirst(head);
            return;
        }
        node * temp = head;
        while (temp != NULL && n != 1) {
            temp = temp -> next;
            n--;
        }
        temp -> prev -> next = temp -> next;
        if (temp -> next != NULL) {
            temp -> next -> prev = temp -> prev;
        }
    }

    void display(node * head) {
        node * temp = head;
         while (temp != NULL) {
            cout << temp -> data << "-->";
            temp = temp -> next;
        }
     cout << "NULL\n";
    }

    int main() {
        node * head = NULL;
        insertAtTail(head, 2);
        insertAtTail(head, 3);
        insertAtTail(head, 4);
        insertAtTail(head, 5);
        insertAtTail(head, 6);
        display(head);
        insertAtHead(head, 1);
        display(head);
        insertAtMiddle(head, 7, 2);
        display(head);
        cout << "delete at the first:\n";
        deleteAtFirst(head);
        display(head);
        cout << "delete at the last:\n";
        deleteAtLast(head);
        display(head);
        cout << "delete at the particular position:\n";
        deleteAtposition(head, 3);
        display(head);

        return 0;
    }
    ` ; 

}) ; 

btn.addEventListener('dblclick' , () => {

    heading.innerText = `Circular linked list : ` ; 

    para.innerText = ` A circular linked list is a data structure where the last node connects back to the first, forming a loop.  A circular linked list is a special type of linked list where all the nodes are connected to form a circle. Unlike a regular linked list, which ends with a node pointing to NULL, the last node in a circular linked list points back to the first node. This means that you can keep traversing the list without ever reaching a NULL value.  ` ; 

    ig.src = "circular.jpg" ; 

    area.textContent = `
        
        #include <iostream>
        using namespace std;

    struct Node{
        int data;
        Node *next;

        Node(int value){
            data = value;
            next = nullptr;
        }
    };


    // Function to insert a node into an empty circular singly linked list
    Node *insertInEmptyList(Node *last, int data){

        if (last != nullptr) return last;
    
        // Create a new node
        Node *newNode = new Node(data);
  
        // Point newNode to itself
        newNode->next = newNode;
  
        // Update last to point to the new node
        last = newNode;
        return last;
    }


    void printList(Node* last){

        if(last == NULL) return;
  
        // Start from the head node
        Node* head = last->next;
        while (true) {
            cout << head->data << " ";
            head = head->next;
            if (head == last->next) break;
        }
        cout << endl;
    }

    int main(){
        Node *last = nullptr;

        // Insert a node into the empty list
        last = insertInEmptyList(last, 1);

        // Print the list
        cout << "List after insertion: ";
        printList(last);

        return 0;
    }


    `

}) ;

