


const valueOfNInputElement = document.getElementById("value-of-n");
const startButton = document.getElementById("start-visualization");
const startPath = document.getElementById("start-path");
const RatInMaze = document.getElementById("n-queens-visualizer-section");


let screen = document.getElementById("screen") ; 


var tbl = 0;

let n = 0;
let column = 0;
let chess = 0;

let animationsArr = new Array();


startButton.addEventListener("click", () => {
    if (valueOfNInputElement.value) {

        startButton.setAttribute("disabled", "disabled");
        valueOfNInputElement.setAttribute("disabled", "disabled");

        n = valueOfNInputElement.value;
        column = n;

        makeChessArr();
        makeTable(n);
        addEventListenersToCells();

    }
});



function makeChessArr() {
    chess = new Array(n);

    for (let i = 0; i < n; i++) {
        chess[i] = new Array(n);
    }


    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            chess[i][j] = 0;
        }
    }

}


function addEventListenersToCells() {
    const chessBoard = document.getElementById("chess-board1");
    const cells = tbl.getElementsByTagName("td");

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", cellClickHandler);
    }
}

function cellClickHandler() {
    const cellId = this.getAttribute("id");
    const [x, row, y, col] = cellId.split("-");
    const rowIndex = parseInt(row);
    const colIndex = parseInt(col);

    // -------------- breakers -------------------------- 
    this.style.backgroundColor = "yellow";

    // ----------- stopeers ----------------------------------- 
    screen.innerHTML = "Wall Added" ; 
    
    chess[rowIndex][colIndex] = 1;

    this.removeEventListener("click", cellClickHandler); // Deactivate the click listener
}

startPath.addEventListener("click", () => {
    animationsArr = getAnimationsArr(chess, 0, 0);

    const cells = tbl.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
        cells[i].removeEventListener("click", cellClickHandler); // Deactivate all cell click listeners
    }

    animateNQueens();
});


function makeTable(n) {

    tbl = document.createElement("table");
    tbl.setAttribute("id", "chess-board");


    const tblCaption = document.createElement("caption");



    tbl.appendChild(tblCaption);


    const tblBody = document.createElement("tbody");


    for (let i = 0; i < n; i++) {

        const row = document.createElement("tr");

        row.setAttribute("id", "row-" + (i));

        for (let j = 0; j < n; j++) {

            const cell = document.createElement("td");

            cell.setAttribute("id", "row-" + (i) + "-col-" + (j));


            row.appendChild(cell);
        }


        tblBody.appendChild(row);
    }


    tbl.appendChild(tblBody);


    RatInMaze.appendChild(tbl);

}


function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}


async function animateNQueens() {

    for (let functionArr of animationsArr) {

        let animationFunction = functionArr[0];

        let args = functionArr[1];

        await delay(350);
        animationFunction(...args);
    }

    await delay(200);

    valueOfNInputElement.removeAttribute("disabled");
    startButton.removeAttribute("disabled");
}


function getAnimationsArr(matrix, row, col) {

    pathFinder(matrix, row, col)



    return animationsArr;
}

function pathFinder(chess, x, y) {


    if (x == column - 1 && y == column - 1 && x >= 0 && y >= 0) {
        chess[x][y] = 0;
        animationsArr.push([markCurrentSqaureBlue, [x, y]]);
        return true;
    }

    if (isSafe(chess, x, y)) {
        chess[x][y] = 0;

        if (pathFinder(chess, x + 1, y)) {
            return true;
        }

        if (pathFinder(chess, x, y + 1)) {
            return true;
        }

        chess[x][y] = 1;
        animationsArr.push([removeSquareColor, [x, y]]);
        return false;
    }

    return false;

}

function isSafe(chess, x, y) {
    if (x >= 0 && y >= 0 && x < column && y < column && chess[x][y] === 0) {
        console.log(x);
        console.log(y);
        animationsArr.push([markCurrentSqaureBlue, [x, y]]);
        return true;
    }
    return false;

}


function markCurrentSqaureBlue(row, col) {
    console.log(row);
    console.log(col);
    const cell = document.getElementById("row-" + (row) + "-col-" + (col));


    // ------------- traverse -------------------------- 
    cell.setAttribute("class", "red-background !important");

    screen.innerHTML = "=====>" ; 



}


function removeSquareColor(row, col) {

    const cell = document.getElementById("row-" + (row) + "-col-" + (col));
    cell.removeAttribute("class") ; 
    

    //-------------------- while backtracked ------------------ 
    screen.innerHTML = "BackTracked" ; 
}
screen.innerHTML = ""  ; 



let theory = document.getElementById("theory") ; 
let code = document.getElementById("code") ; 





let area = document.getElementById("csk") ; 

    
area.textContent = `
    
    What is Backtracking Algorithm?
    Backtracking is a problem-solving algorithmic technique that involves finding a solution 
    incrementally by trying different options and undoing them if they lead to a dead end.

    It is commonly used in situations where you need to explore multiple possibilities to
    solve a problem, like searching for a path in a maze or solving puzzles like Sudoku.
    When a dead end is reached, the algorithm backtracks to the previous decision point
    and explores a different path until a solution is found or all possibilities have 
    been exhausted.


    How Does a Backtracking Algorithm Work?
    A backtracking algorithm works by recursively exploring all possible solutions to a problem.
    It starts by choosing an initial solution, and then it explores all possible extensions of
    that solution. If an extension leads to a solution, the algorithm returns that solution.
    If an extension does not lead to a solution, the algorithm backtracks to the previous 
    solution and tries a different extension.



    The following is a general outline of how a backtracking algorithm works:

    1 . Choose an initial solution.
    2 . Explore all possible extensions of the current solution.
    3 . If an extension leads to a solution, return that solution.
    4 . If an extension does not lead to a solution, backtrack to the previous 
    solution and try a different extension.
    5 . Repeat steps 2-4 until all possible solutions have been explored.


    Example of Backtracking Algorithm
    Example: Finding the shortest path through a maze

    Input: A maze represented as a 2D array, where 0 represents an open space and 1 represents a wall.

    Algorithm:

    Start at the starting point.
    For each of the four possible directions (up, down, left, right), try moving in that direction.
    If moving in that direction leads to the ending point, return the path taken.
    If moving in that direction does not lead to the ending point, backtrack to the previous position
    and try a different direction. Repeat steps 2-4 until the ending point is reached or all
    possible paths have been explored.


` ; 

theory.addEventListener('click', () => {
    
    area.textContent = `
    
    What is Backtracking Algorithm?
    Backtracking is a problem-solving algorithmic technique that involves finding a solution 
    incrementally by trying different options and undoing them if they lead to a dead end.

    It is commonly used in situations where you need to explore multiple possibilities to
    solve a problem, like searching for a path in a maze or solving puzzles like Sudoku.
    When a dead end is reached, the algorithm backtracks to the previous decision point
    and explores a different path until a solution is found or all possibilities have 
    been exhausted.


    How Does a Backtracking Algorithm Work?
    A backtracking algorithm works by recursively exploring all possible solutions to a problem.
    It starts by choosing an initial solution, and then it explores all possible extensions of
    that solution. If an extension leads to a solution, the algorithm returns that solution.
    If an extension does not lead to a solution, the algorithm backtracks to the previous 
    solution and tries a different extension.



    The following is a general outline of how a backtracking algorithm works:

    1 . Choose an initial solution.
    2 . Explore all possible extensions of the current solution.
    3 . If an extension leads to a solution, return that solution.
    4 . If an extension does not lead to a solution, backtrack to the previous 
    solution and try a different extension.
    5 . Repeat steps 2-4 until all possible solutions have been explored.


    Example of Backtracking Algorithm
    Example: Finding the shortest path through a maze

    Input: A maze represented as a 2D array, where 0 represents an open space and 1 represents a wall.

    Algorithm:

    Start at the starting point.
    For each of the four possible directions (up, down, left, right), try moving in that direction.
    If moving in that direction leads to the ending point, return the path taken.
    If moving in that direction does not lead to the ending point, backtrack to the previous position
    and try a different direction. Repeat steps 2-4 until the ending point is reached or all
    possible paths have been explored.


    ` ; 

}); 


code.addEventListener('click', () => {

    area.textContent = `

    #include <bits/stdc++.h>
    using namespace std;

    // Initialize a string direction which represents all the
    // directions.

    string direction = "DLRU";

    // Arrays to represent change in rows and columns
    int dr[4] = { 1, 0, 0, -1 };
    int dc[4] = { 0, -1, 1, 0 };

    // Function to check if cell(row, col) is inside the maze
    // and unblocked
    bool isValid(int row, int col, int n, vector<vector<int> >& maze){
        return row >= 0 && col >= 0 && row < n && col < n
           && maze[row][col];
    }

    // Function to get all valid paths
    void findPath(int row, int col, vector<vector<int> >& maze,
              int n, vector<string>& ans,
              string& currentPath){

    // If we reach the bottom right cell of the matrix, add
    // the current path to ans and return
        if (row == n - 1 && col == n - 1) {
            ans.push_back(currentPath);
            return;
        }

    // Mark the current cell as blocked
    maze[row][col] = 0;

        for (int i = 0; i < 4; i++) {
            // Find the next row based on the current row (row)
            // and the dr[] array
            int nextrow = row + dr[i];
            // Find the next column based on the current column
            // (col) and the dc[] array
            int nextcol = col + dc[i];

            // Check if the next cell is valid or not
            if (isValid(nextrow, nextcol, n, maze)) {
            currentPath += direction[i];
            // Recursively call the FindPath function for
            // the next cell
            findPath(nextrow, nextcol, maze, n, ans,
                     currentPath);
            // Remove the last direction when backtracking
            currentPath.pop_back();
            }
        }

        // Mark the current cell as unblocked
        maze[row][col] = 1;
    }

    int main(){

    vector<vector<int> > maze = { { 1, 0, 0, 0 },
                                  { 1, 1, 0, 1 },
                                  { 1, 1, 0, 0 },
                                  { 0, 1, 1, 1 } };

        int n = maze.size();
        // vector to store all the valid paths
        vector<string> result;
        // Store current path
        string currentPath = "";

        if (maze[0][0] != 0 && maze[n - 1][n - 1] != 0) {
            // Function call to get all valid paths
            findPath(0, 0, maze, n, result, currentPath);
        }

        if (result.size() == 0)
            cout << -1;
        else
            for (int i = 0; i < result.size(); i++)
                cout << result[i] << " ";
        cout << endl;

        return 0;
    }


    `

}); 