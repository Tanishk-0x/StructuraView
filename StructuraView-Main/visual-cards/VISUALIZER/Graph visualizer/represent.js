
let list = document.getElementById("list") ; 
let matrix = document.getElementById("matrix") ; 

let area = document.getElementById("code") ; 

    
area.textContent = `
    
      
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

//-----------------------------------------------------------



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


list.addEventListener('click', () => {

    area.textContent = `
    
      
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

//-----------------------------------------------------------



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
            

    `
}) ; 


matrix.addEventListener('click', () => {

    area.textContent = `
    
    // Representation of Graph by Adjacency Matrix ..
    // Sample Input
    // 5 6
    // 1 5
    // 2 3
    // 3 4
    // 5 2
    // 1 3
    // 4 2

    // output 
    //   0 1 2 3 4
    // 0 0 0 0 0 0 
    // 1 0 0 0 1 0 
    // 2 0 0 0 1 1 
    // 3 0 1 1 0 1 
    // 4 0 0 1 1 0 

    #include <iostream>
    using namespace std;

    int main(){

        // n = number of nodes
        // m = number of edges
        int m;
        int n;
        cin >> n >> m;

        // creating matrix ..
        int AdjMatrix[n + 1][n + 1];

        // Matrix ko initialise krenge ..
        for (int i = 0; i <= n; i++){

            for (int j = 0; j <= n; j++){
                AdjMatrix[i][j] = 0;
            }
        }

        for (int i = 0; i < m; i++){

            int u;
            int v;
            cin>> u >> v ; 
            AdjMatrix[u][v] = 1;
            AdjMatrix[v][u] = 1 ; 

            // for a directed graph assign AdjMatrix[u][v] as 1 
        }

        // printing the graph .. 
        cout << " " ; 

        for(int i = 0 ; i < n ; i++){
            cout << " " << i ; 
        }
        cout<<endl ; 

            for(int i = 0 ; i< n ; i++){
                cout << i << " " ; 
                for(int j = 0 ; j< n ; j++){
                cout << AdjMatrix[i][j] << " " ; 
            }
            cout<<endl ; 
        }

        return 0;
    }



    `

})