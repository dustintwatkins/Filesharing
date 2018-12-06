import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as express from 'express'
import * as fuzzy from 'fuzzy'

let entries: any = []

const search_by_keys = ['username', 'file_name']

/**
returns a new object containing the fields listed in keys and the
value of those fields are the same as are in item.

#+BEGIN_SRC javascript
  const keys = ['a', 'b']
  const item = {
      a: 1,
      b: 2,
      c: 3,
  }

  const n = filter_keys(keys, item)
#+END_SRC

this results in n being

#+BEGIN_SRC javascript
  {
      a: 1,
      b: 2,
  }
#+END_SRC
*/
const filter_keys: any = (keys: string[], item: any) => {
    return keys.reduce((n: any, key: string) => {
        n[key] = item[key]
        return n
    }, {})
}

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

  findFile (userId: string, id: string, file_name: string): any {
    for (let i: number = 0; i < entries.length; i++) {
      if (entries[i]['id'] === String(id) &&
          entries[i]['user_id'] === userId &&
          entries[i]['file_name'] === file_name) {
        return entries[i]['file']
      }
    }
    return null
  }

  routes(): void {
    this.app.get('/', (req: express.Request, res: express.Response) => {
      res.send('Hello from server :)')
    })

    this.app.post('/getFiles', (req: express.Request, res: express.Response) => {
      let results: any[] = []
      entries.map((entry: any) => {
        results.push({
          file_name: entry['file_name'],
          user_id: entry['user_id'],
          id: entry['id']
        })
      })
      res.json(results)
    })

    this.app.post('/downloadFile', (req: express.Request, res: express.Response) => {
      console.log('POST /downloadFile')
      res.send(this.findFile(req.body['user_id'], req.body['id'], req.body['file_name']))
    })

      const search_keys = ['id', 'username', 'user_id', 'file_name']

    this.app.post('/searchFile', (req: express.Request, res: express.Response) => {
      console.log('POST /getFile')
        console.log('Searching for file named:', req.body.query)
        const searchables = entries.map((x: any) => {
            return x.username}).concat(
                entries.map((x: any) => {return x.file_name}))
        const best_matches = fuzzy.filter(
            req.body.query,
            searchables).map((x: any) => {return x.string})
        const meta_entries = entries.map((x: any) => {
            return filter_keys(search_keys, x)})
        const search_results = meta_entries
              .filter((x: any) => {
                  return [x.username, x.file_name].some((x: any) => {
                      return best_matches.indexOf(x) >= 0
                  })
              })
        res.json(search_results)
    })

    this.app.post('/upload', (req: express.Request, res: express.Response) => {
      console.log('POST /upload')
      req.body.file = Object.keys(req.body.file).map((key) => {
        return req.body.file[key]
      })
      entries.push(req.body)
      console.log(`received length:`)
      console.dir(Object.keys(req.body.file).length)
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
