function allExceptionHandler(app) {
  app.use((err, req, res, next) => {
    res.status(404).json({
      status: err?.status ?? err?.statusCode ?? 500,
      message: err?.message ?? "Internal Server Error ...",
    });
  });
}

module.exports = allExceptionHandler;
