import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as express from 'express'

class ServerCommunicator {
  port = process.env.PORT || 8082
  app = express()

  start(): void {
    this.middleware()
    this.routes()
    this.listen()
    this.app.use(bodyParser.json({ limit: '1000mb' }))
  }

  middleware(): void {
    this.app.use(bodyParser.json())
    this.app.use(cors())
  }

  routes(): void {
    this.app.get('/', (req: express.Request, res: express.Response) => {
      res.send('Hello from server :)')
    })

    this.app.get('/getFile', (req: express.Request, res: express.Response) => {
      console.log('GET /getFile')

    })

    this.app.post('/upload', (req: express.Request, res: express.Response) => {
      console.log('POST /upload')

      res.send(true)
    })
  }

  listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`)
    })
  }
}

export default ServerCommunicator
