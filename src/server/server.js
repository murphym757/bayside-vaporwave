const express = require('express'),
      app = express(),
      port = process.env.PORT || 3000;

app.use(express.static(__dirname + './../../')); //serves the index.html

app.listen(port, () => {
    console.log('Server started on port ' + port)
});