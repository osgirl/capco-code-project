  const express = require("express");
  const path = require("path");
  const icons = require("./assets/");
  const cluster = require('cluster');
  const numCPUs = require('os').cpus().length;
  const cors = require('cors');

  const PORT = process.env.PORT || 8000;


  // Pretend like this app is going to use more than one core.
  if (cluster.isMaster) {
    console.error(`Node cluster master ${process.pid} is running`);

    // Forkers
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
      console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
    });

  } else {
    const app = express();
    
    app.use(cors());
    
    app.get('/api/icons', function (req, res) {
      res.set('Content-Type', 'application/json');
      res.send(icons);
    });

    app.use(express.static(path.resolve(__dirname, '../../dist')));

    app.listen(PORT, function () {
      console.error(`Cluter ${process.pid} is listening on port ${PORT}`);
    });
  }
