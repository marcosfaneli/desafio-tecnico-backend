import { app } from './http'
import * as dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 5001

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
