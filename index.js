const server = require('./api/server.js');

const port = process.env.PORT || 9090;

server.listen(port, () => console.log(`** API running on http://localhost:${port} **`));