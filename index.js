const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const users = require('./db.json').user;
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.use(jsonServer.bodyParser);
server.post('/login', (req, res) => {
    console.log(req.body);
    let user = users.find(item => item.login === req.body.login && item.password === req.body.password);
    if(user){
        res.jsonp({status:true})
    } else {
        res.sendStatus(401);
    }
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
// server.use((req, res, next) => {
//   if (req.method === 'POST') {
//     req.body.createdAt = Date.now()
//   }
//   // Continue to JSON Server router
//   next()
// })

// Use default router
server.use(router)
server.listen(8000, () => {
  console.log('JSON Server is running')
})