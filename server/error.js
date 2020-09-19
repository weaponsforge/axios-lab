const errorHandler = async (err, req, res, next) => {
  const message = (!err) ? 'Bad URL' : err.message 
  return res.status(500).send({ message })
}

module.exports = errorHandler
