
let code = document.getElementById("code") ; 

let algo = document.getElementById("algo") ; 


let area = document.getElementById("codeTh") ; 


area.textContent = `
    
        
// tree = tree ek non linear data structure he jo herarrical way me data ko store krta he ..
// binary tree = isme maximum 2 hi childrens ho sakte he ..

#include<iostream>
using namespace std ;

//--------------------------------------------------------------------

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

//------------------------------------------------------------------

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

//---------------------------------------------------------------

// preorder traversal ..

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

//-------------------------------------------------------------

int main (){


    node* root = NULL ; 

    // tree ko create kr rhe he ..
    root = builtree(root); 

    // calling preorder function ..
    preorder(root); 


return 0 ;

}

    `

code.addEventListener('click', () => {

    area.textContent = `
    
        
// tree = tree ek non linear data structure he jo herarrical way me data ko store krta he ..
// binary tree = isme maximum 2 hi childrens ho sakte he ..

#include<iostream>
using namespace std ;

//--------------------------------------------------------------------

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

//------------------------------------------------------------------

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

//---------------------------------------------------------------

// preorder traversal ..

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

//-------------------------------------------------------------

int main (){


    node* root = NULL ; 

    // tree ko create kr rhe he ..
    root = builtree(root); 

    // calling preorder function ..
    preorder(root); 


return 0 ;

}

    `

}); 


//------------------------------------------------------------------ 

algo.addEventListener('click', () => {

    area.style.fontSize = "14px" ; 

    area.textContent = `
    
    The algorithm for preorder traversal is shown as follows:

    Preorder(root):

    1 . If root is NULL then return
    2 . Process root (For example, print root’s data)
    3 . Preorder (root -> left)
    4 . Preorder (root -> right)

    `


}); 



//----------------------------------------------------------------


let exm = document.getElementById("example") ; 

let vdo = document.getElementById("video") ; 

exm.addEventListener('click', () => {

    vdo.className = "exm" ; 
    vdo.src = "Video_Assets/PreEx.mp4" ; 


}); 


exm.addEventListener('dblclick', () => {

    vdo.src = "Video_Assets/PRS.mp4" ; 

}) ;