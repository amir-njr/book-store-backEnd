function NotFound(app) {
  app.use((req, res, next) => {
    res.status(404).json({
      status: res.statusCode,
      message: "Route Not Found ...",
    });
  });
}

module.exports = NotFound;
