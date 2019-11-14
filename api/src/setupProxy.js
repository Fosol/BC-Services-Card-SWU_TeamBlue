const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
      '/auth',
      proxy({
        target: 'http://keycloak:8180',
        changeOrigin: true,
      }),
  );
};
