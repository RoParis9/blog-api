import { Request, Response, NextFunction } from 'express'
import 'dotenv/config'
import jwt from 'jsonwebtoken'

interface TokenPayload{
  id:number;
  iat:number;
  exp:number;
}

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

    const {id} = data as TokenPayload
    req.userId = id
    
    return next()
  } catch {
    return res.sendStatus(401)
  }
}
