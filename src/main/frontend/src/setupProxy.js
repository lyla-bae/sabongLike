const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/",
        createProxyMiddleware({
            target: "http://localhost:8080",
            changeOrigin: true,
            pathRewrite: {
                "^/api": "",
            },
        })
    );

  // app.use(
  //   "/api",
  //   createProxyMiddleware({
  //     target:
  //       "http://openapi.1365.go.kr/openapi/service/rest/VolunteerPartcptnService",
  //     changeOrigin: true,
  //     pathRewrite: {
  //       "^/api": "",
  //     },
  //   })
  // );


};
