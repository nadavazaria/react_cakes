const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://for-render-vk24.onrender.com/',
      changeOrigin: true,
    })
  );
};