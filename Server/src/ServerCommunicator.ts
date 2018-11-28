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
  }

  middleware(): void {
    this.app.use(bodyParser.json({limit:'1000mb'}))
    this.app.use(cors())
  }

  routes(): void {
    this.app.get('/', (req: express.Request, res: express.Response) => {
      res.send('Hello from server :)')
    })

    this.app.post('/searchFile', (req: express.Request, res: express.Response) => {
      console.log('POST /getFile')
      console.log('Searching for file named:', req.body.query)
      res.send(true)
    })

    this.app.post('/upload', (req: express.Request, res: express.Response) => {
      console.log('POST /upload')
      console.log(req.body.username)
      console.log(req.body.user_id)
      console.log(req.body.file_name)
      console.log(req.body.id)
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
