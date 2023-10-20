[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11730528&assignment_repo_type=AssignmentRepo)
# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function. I have not provided any test code, but you can base
yours on test code from other exercises.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one!

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## Answer

Here's an outline of my code:
```
initialize arrays

while (there are unmarked vertices) {

    for (all vertices) {
        check if the vertex is the smallest
    }

    mark the smallest vertex

    for (each edge on the currect vertex) {
        set the minimum known distace
    }
}
```
The outer while loop takes $|V|$ time to complete, and the first for loop alst takes $|V|$ time, making this part take $|V|^2$ time.  The second for loop will traverse all the edges connected to a single node, so after the whole program runs, it will have taken $|E|$ time.  Therefore, the time complexity of this implementation is $\Theta(|V|^2+|E|)$



