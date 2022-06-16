const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {

  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://13.125.4.231',
      changeOrigin: true,
    })
  );
  
  app.use(
    '/user',
    createProxyMiddleware({
      target: 'http://13.125.4.231',
      changeOrigin: true,
    })
  );
  
};