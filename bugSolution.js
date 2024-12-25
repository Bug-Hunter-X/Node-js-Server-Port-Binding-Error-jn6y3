const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

//Using an event listener to handle errors that may arise from port binding.
//This avoids the server crashing and provides a more robust solution.

const port = 8080;

const onError = (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Please choose a different port or stop the existing server.`);
    process.exit(1); //Exit the process with an error code
  } else {
    console.error(err);
    process.exit(1);
  }
};

server.on('error', onError);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});