import 'express-async-errors'
import { NextFunction, Request, Response } from 'express'
import { ErrorNotFound, ErrorUserPassword } from '../../domain/error'
import { ValidationError } from 'express-validation'

export function handleError(
  err: Error,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
) {
  console.log('ahuahauahuahua')
  if (err instanceof ErrorNotFound) {
    return res.status(404).json({ error: err.message })
  }

  if (err instanceof ErrorUserPassword) {
    return res.status(400).json({ error: err.message })
  }

  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err)
  }

  res.status(500).json({ error: err.message })
}
