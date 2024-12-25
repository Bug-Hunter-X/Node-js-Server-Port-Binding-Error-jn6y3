# Node.js Server Port Binding Error

This repository demonstrates a common error in Node.js: failing to bind to a port that's already in use.  The provided code creates a simple HTTP server. Running this code multiple times concurrently without shutting down the server first will result in an error.

## Bug

The `bug.js` file contains the problematic code.  When you run this server and then attempt to run it again without stopping the first instance, Node.js will throw an error indicating that it cannot bind to the specified port (8080 in this example).

## Solution

The `bugSolution.js` file shows a corrected version that gracefully handles the port binding error using the `server.on('error', ...)` event listener.  This listener checks for the `EADDRINUSE` error (Address already in use) and implements appropriate error handling which may include retrying after a delay or notifying the user.

## Running the Code

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js` in your terminal. 
4.  Try to run another instance of `node bug.js` in a new terminal. Observe the error.
5. Run `node bugSolution.js` to see the improved error handling. 