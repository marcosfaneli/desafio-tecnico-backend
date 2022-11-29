import express from 'express'
import cors from 'cors'
import { routes } from '../../application/routes'
import { handleError } from '../../application/middleware/handle-error'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(handleError)

export { app }
