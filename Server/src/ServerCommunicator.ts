import * as express from 'express'
import * as cors from 'cors'

class ServerCommunicator {
  port = process.env.PORT || 8082
  app = express()

  start(): void {
    this.middleware()
    this.routes()
    this.listen()
  }

  middleware(): void {
    this.app.use(cors())
  }

  routes(): void {
    this.app.get('/', (req: express.Request, res: express.Response) => {
      res.send('Hello from server :)')
    })
  }

  listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`)
    })
  }
}

export default ServerCommunicator
