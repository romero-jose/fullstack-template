export const errorHandler = (err, _req, res, _next) => {
  console.error('Error:', err.message)

  res.status(err.status || 500).json({
    status: 'error',
    message: err.message || 'Internal Server Error',
  })
}

export default errorHandler
