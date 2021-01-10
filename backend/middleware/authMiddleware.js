import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import AsyncHandler from 'express-async-handler'

const protect = AsyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const decode = jwt.verify(token, process.env.JWT_SECRET)

      req.user = await User.findById(decode.id).select('-password')

      next()
    } catch (error) {
      console.error(error)
      res.send(401)
      throw new Error('Not authorized, token failed')
    }
  }

  if (!token) {
    res.send(401)
    throw new Error('Not authorized, no token')
  }
})

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    res.send(401)
    throw new Error('Not authorized as an admin')
  }
}

export { protect, admin }
