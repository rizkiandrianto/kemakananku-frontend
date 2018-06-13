// server.js
const next = require('next')
const path = require('path');
const routes = require('./app/routes')
const { parse } = require('url')
const app = next({
    dev: process.env.NODE_ENV !== 'production',
    dir: './app',
    useFileSystemPublicRoutes: false
})
const handler = routes.getRequestHandler(app)
const PORT = process.env.PORT || 3000;
 
// Without express
const {createServer} = require('http')
app.prepare().then(() => {
  // createServer((req, res) => {
  //   const parsedUrl = parse(req.url, true)
  //   const { pathname } = parsedUrl

  //   if (pathname === '/service-worker.js') {
  //     const filePath = join(__dirname, '.next', pathname)
  //     app.serveStatic(req, res, filePath)
  //   } else {
  //     handler(req, res, parsedUrl);
  //   }
  // }).listen(3000)

  const server = createServer((req, res) => {
		if (req.url === '/sw.js') {
			app.serveStatic(req, res, path.resolve('./app/static/sw.js'));
		} else {
			handler(req, res);
		}
	});

	server.listen(PORT, err => {
		if (err) throw err;

		console.log(`> App running on port ${PORT}`);
	});
})