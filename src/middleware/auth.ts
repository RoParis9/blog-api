import { Request, Response, NextFunction } from 'express'
import 'dotenv/config'
import jwt from 'jsonwebtoken'

export function AuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers

  if (!authorization) {
    return res.sendStatus(401)
  }
  const token = authorization.replace('Bearer', '').trim()

  try {
    const data = jwt.verify(token, process.env.SECRET)
    next()
  } catch {
    return res.sendStatus(401)
  }
}
